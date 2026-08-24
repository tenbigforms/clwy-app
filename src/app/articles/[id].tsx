import { useLocalSearchParams } from 'expo-router'
import { WebView } from 'react-native-webview'

export default function Article() {
    const baseURL = process.env.EXPO_PUBLIC_API_URL
    const { id } = useLocalSearchParams()
    const uri = `${baseURL}/articles/${id}/info`

    return <WebView source={{ uri }} />
}
