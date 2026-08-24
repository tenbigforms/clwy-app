import { useLocalSearchParams } from 'expo-router'
import ProgressWebView from '@/components/shared/ProgressWebView'

export default function Article() {
    const baseURL = process.env.EXPO_PUBLIC_API_URL
    const { id } = useLocalSearchParams()
    const uri = `${baseURL}/articles/${id}/info`

    return <ProgressWebView source={{ uri }} />
}
