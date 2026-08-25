import { FlatList, StyleSheet, RefreshControl } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

import NetworkError from '@/components/shared/NetworkError'
import Loading from '@/components/shared/Loading'
import useFetchData from '@/hooks/useFetchData'

export default function Course() {
    const { id } = useLocalSearchParams()
    const url = `/courses/${id}`
    const { data, loading, refreshing, onRefresh, error, onReload } = useFetchData(url)
    const { course, user, chapters } = data

    // 加载中
    if (loading) {
        return <Loading />
    }

    // 网络错误
    if (error) {
        return <NetworkError onReload={onReload} />
    }

    return (
        <FlatList
            style={styles.container}
            data={chapters}
            keyExtractor={(item) => item.id}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    tintColor={'#1f99b0'}
                />
            }
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})
