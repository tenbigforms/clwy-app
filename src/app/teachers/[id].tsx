import { ScrollView, Text, StyleSheet, RefreshControl } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { Image } from 'expo-image'

import useFetchData from '@/hooks/useFetchData'
import Loading from '@/components/shared/Loading'
import NetworkError from '@/components/shared/NetworkError'

export default function Teacher() {
    const { id } = useLocalSearchParams()
    const url = `/teachers/${id}`

    const { data, loading, refreshing, onRefresh, error, onReload } = useFetchData(url)
    const { user } = data

    // 加载中
    if (loading) {
        return <Loading />
    }

    // 网络错误
    if (error) {
        return <NetworkError onReload={onReload} />
    }

    return (
        <ScrollView
            style={styles.container}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={'#1f99b0'} />
            }
        >
            <Image source={{ uri: user.avatar }} style={styles.avatar}></Image>
            <Text style={styles.nickname}>{user.nickname}</Text>
            <Text style={styles.company}>{user.company}</Text>
            <Text style={styles.bio}>{user.bio}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 45,
        backgroundColor: '#fff',
    },
    avatar: {
        alignSelf: 'center',
        width: 132,
        height: 132,
        borderRadius: 66,
    },
    nickname: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 15,
    },
    company: {
        marginTop: 12,
        textAlign: 'center',
        fontSize: 13,
        fontWeight: '300',
        marginBottom: 2,
        color: '#666',
    },
    bio: {
        marginTop: 20,
        paddingHorizontal: 20,
        fontSize: 11,
        lineHeight: 18,
        color: '#000000',
    },
})
