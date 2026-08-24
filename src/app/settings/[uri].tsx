import { useLocalSearchParams } from 'expo-router'

import ProgressWebView from '@/components/shared/ProgressWebView'

export default function Details() {
    const { uri } = useLocalSearchParams()

    return <ProgressWebView source={{ uri }} />
}
