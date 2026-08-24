import { useState } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

import { get } from '@/utils/request'


export default function useLoadMore(url, key, setData) {
    const [page, setPage] = useState(1)

    const onEndReached = async () => {

        const nextPage = page + 1
        setPage(nextPage)

        const { data } = await get(url, { page: nextPage })

        setData((prevData) => ({
            articles: [...prevData.articles, ...data.articles],
        }))
    }

    return { onEndReached }
}
