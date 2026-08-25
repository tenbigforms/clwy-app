import { useLocalSearchParams } from 'expo-router'

import CoursesList from '@/components/shared/CoursesList'

export default function Results() {
    const { keyword } = useLocalSearchParams()
    const query = encodeURIComponent(keyword)
    const url = `/search?q=${query}`

    return <CoursesList url={url} />
}