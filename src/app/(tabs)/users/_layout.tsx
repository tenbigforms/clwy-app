import { Slot } from 'expo-router'

import { useSession } from '@/utils/ctx'
import Loading from '@/components/shared/Loading'
import SignInNotice from '@/components/(tabs)/users/SignInNotice'

export default function AppLayout() {
    const { session, isLoading } = useSession()

    if (isLoading) {
        return <Loading />
    }

    if (!session) {
        return <SignInNotice />
    }

    return <Slot />
}
