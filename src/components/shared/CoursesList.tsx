import {
    Text,
    View,
    StyleSheet,
    RefreshControl,
    FlatList,
    TouchableWithoutFeedback,
    Platform,
} from 'react-native'
import { Link } from 'expo-router'
import { Image } from 'expo-image'

import useFetchData from '@/hooks/useFetchData'
import Loading from '@/components/shared/Loading'
import NoData from '@/components/shared/NoData'
import NetworkError from '@/components/shared/NetworkError'
import useLoadMore from '@/hooks/useLoadMore'

export default function CoursesList(props) {
    const { url } = props
    const { data, setData, loading, refreshing, onRefresh, error, onReload } = useFetchData(url)
    const { courses } = data
    const { onEndReached, resetLoadMore, LoadMoreFooter } = useLoadMore(url, 'courses', setData)

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <NetworkError onReload={onReload} />
    }

    const handleRefresh = async () => {
        await onRefresh()
        resetLoadMore()
    }

    const renderItem = ({ item }) => (
        <Link asChild href={{ pathname: '/courses/[id]', params: { id: item.id } }}>
            <TouchableWithoutFeedback>
                <View style={styles.item}>
                    <View style={styles.imageWrapper}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                    </View>

                    <View style={styles.info}>
                        <Text style={styles.title} numberOfLines={2}>
                            {item.name}
                        </Text>

                        <View style={styles.countWrapper}>
                            <Text style={styles.count}>全 {item.chaptersCount} 回</Text>
                        </View>

                        <View style={styles.userWrapper}>
                            <Image source={{ uri: item.user.avatar }} style={styles.avatar}></Image>
                            <View style={styles.others}>
                                <Text style={styles.nickname}>{item.user.nickname}</Text>
                                <Text style={styles.separator}> | </Text>
                                <Text style={styles.company} numberOfLines={1}>
                                    {item.user.company}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Link>
    )

    return (
        <FlatList
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            data={courses}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={handleRefresh}
                    tintColor={'#1f99b0'}
                />
            }
            ListEmptyComponent={<NoData />}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.1}
            ListFooterComponent={LoadMoreFooter}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        padding: 10,
        paddingBottom: 0,
        ...Platform.select({
            ios: {
                paddingBottom: 84,
            },
        }),
    },
    item: {
        marginBottom: 8,
        paddingTop: 8,
        paddingLeft: 8,
        paddingRight: 8,
        height: 96,
        borderRadius: 20,
        flexDirection: 'row',
        backgroundColor: '#F4F1ED',
    },
    imageWrapper: {
        backgroundColor: 'transparent',
    },
    image: {
        width: 96,
        height: 80,
        borderRadius: 15,
    },
    countWrapper: {
        backgroundColor: '#1f99b0',
        borderRadius: 3,
        height: 15,
        width: 40,
    },
    count: {
        fontSize: 8,
        color: '#fff',
        textAlign: 'center',
        lineHeight: 15,
    },
    info: {
        flex: 1,
        marginLeft: 10,
        backgroundColor: 'transparent',
        position: 'relative',
    },
    title: {
        height: 37,
        fontSize: 13,
    },
    userWrapper: {
        marginTop: 5,
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    avatar: {
        width: 18,
        height: 18,
        borderRadius: 9,
    },
    others: {
        flexDirection: 'row',
        fontSize: 10,
        color: '#777',
        marginLeft: 5,
        backgroundColor: 'transparent',
    },
    nickname: {
        marginTop: 4,
        fontSize: 10,
    },
    separator: {
        fontSize: 10,
        marginTop: 3,
        marginHorizontal: 1, // 调整 '|' 两侧的间距
    },
    company: {
        marginTop: 4,
        fontSize: 10,
        width: 130,
    },
    likeIcon: {
        position: 'absolute',
        right: 10,
        bottom: 7,
    },
})
