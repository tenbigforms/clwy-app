import { useState } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

import { get } from '@/utils/request'


export default function useLoadMore(url, key, setData) {
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)

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

    return { onEndReached }
}
