import { useState } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

import { get } from '@/utils/request'


export default function useLoadMore(url, key, setData) {
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)
    // const resetLoadMore = () => {
    //     setHasMore(true)
    //     setPage(1)
    // }
    const LoadMoreFooter = () => {
        let message
        if (loading) {
            message = 'Loading...'
        } else if (!hasMore) {
            message = 'No More'
        } else {
            message = 'Pull up to load more'
        }

        return (
            <View style={styles.container}>
                {loading && <ActivityIndicator size="small" color="#1f99b0" />}
                <Text style={styles.message}>{message}</Text>
            </View>
        )
    }
    const onEndReached = async () => {
        if (loading) return
        if (!hasMore) return

        setLoading(true)
        const nextPage = page + 1
        setPage(nextPage)
        try {
            const { data } = await get(url, { page: nextPage })
            if (data[key].length === 0) {
                setHasMore(false)
            } else {
                setData((prevData) => ({
                    [key]: [...prevData[key], ...data[key]],
                }))
            }
        } finally {
            setLoading(false)
        }
    }

    return { onEndReached, LoadMoreFooter }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 20,
    },
    message: {
        fontSize: 13,
        marginHorizontal: 16,
    },
})