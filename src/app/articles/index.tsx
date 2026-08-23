import {
    View,
    Text,
    StyleSheet,
    RefreshControl,
    FlatList,
    TouchableWithoutFeedback,
} from 'react-native'
import { Link } from 'expo-router'
import { Image } from 'expo-image'
import useFetchData from '@/hooks/useFetchData'
import Loading from '@/components/shared/Loading'
import NetworkError from '@/components/shared/NetworkError'
import NoData from '@/components/shared/NoData'
import { useState } from 'react'
import { get } from '@/utils/request'

export default function Index() {

    const url = '/articles'
    const { data, setData, loading, refreshing, onRefresh, error, onReload } = useFetchData(url)
    const { articles } = data
    const logo = require('@/assets/logo-light.png')
    const renderSeparator = () => <View style={styles.separator}></View>
    const [page, setPage] = useState(1)

    const onEndReached = async () => {
        const nextPage = page + 1
        setPage(nextPage)
        const { data } = await get(url, { page: nextPage })

        setData((prevData) => ({
            articles: [...prevData.articles, ...data.articles],
        }))
    }

    const renderItem = ({ item }) => {
        return (
            <Link asChild href={{ pathname: '/articles/[id]', params: { id: item.id } }}>
                <TouchableWithoutFeedback>
                    <View style={styles.item}>
                        <Image source={logo} style={styles.image} />
                        <View style={styles.titleWrapper}>
                            <Text style={styles.title} numberOfLines={2}>
                                {item.title}
                            </Text>
                            <Text style={styles.createdAt}>{item.createdAt}</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Link>
        )
    }

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <NetworkError onReload={onReload} />
    }

    return (
        <FlatList
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            data={articles}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            ListEmptyComponent={<NoData />}
            ItemSeparatorComponent={renderSeparator}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    tintColor={'#1f99b0'}
                />
            }
            onEndReached={onEndReached}
            onEndReachedThreshold={0.1}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingBottom: 20,
    },
    item: {
        padding: 5,
        height: 90,
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    image: {
        alignSelf: 'center',
        height: 40,
        width: 40,
        margin: 5
    },
    titleWrapper: {
        flex: 1,
        paddingRight: 8,
        backgroundColor: 'transparent',
    },
    title: {
        marginTop: 18,
        fontSize: 12,
        fontWeight: '300',
        height: 40,
        lineHeight: 18,
        color: '#333',
    },
    createdAt: {
        textAlign: 'right',
        fontSize: 10,
        fontWeight: '300',
        color: '555',
    },
    separator: {
        marginLeft: 15,
        marginRight: 0,
        height: 1.2,
        backgroundColor: '#E7DFD3',
    },
})
