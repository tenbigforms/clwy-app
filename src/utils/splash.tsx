import { SplashScreen } from 'expo-router'

import { useSession } from '@/utils/ctx'

SplashScreen.preventAutoHideAsync()

export function SplashScreenController() {
    const { isLoading } = useSession()

    if (!isLoading) {
        SplashScreen.hide()
    }

    return null
}