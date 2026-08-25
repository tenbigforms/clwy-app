import { FlatList, StyleSheet, RefreshControl } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

import NetworkError from '@/components/shared/NetworkError'
import Loading from '@/components/shared/Loading'
import useFetchData from '@/hooks/useFetchData'
import ChaptersList from '@/components/courses/ChapterList'
import IntroduceInfo from '@/components/courses/IntroduceInfo'
import ContentInfo from '@/components/courses/ContentInfo'
import TeacherInfo from '@/components/courses/TeacherInfo'

export default function Course() {
    const { id } = useLocalSearchParams()
    const url = `/courses/${id}`
    const { data, loading, refreshing, onRefresh, error, onReload } = useFetchData(url)
    const { course, user, chapters } = data
    const rederItem = ({ item }) => <ChaptersList chapter={item} course={course} user={user} />


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
            renderItem={rederItem}
            ListHeaderComponent={<IntroduceInfo course={course} />}
            ListFooterComponent={
                <>
                    <ContentInfo course={course} />
                    <TeacherInfo user={user} />
                </>
            }
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
