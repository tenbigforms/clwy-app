import { Slot } from 'expo-router'

import { useSession } from '@/utils/ctx'
import Loading from '@/components/shared/Loading'
import SignInNotice from '@/components/(tabs)/users/SignInNotice'

export default function AppLayout() {
    const { session, isLoading } = useSession()

    // 渲染加载中
    if (isLoading) {
        return <Loading />
    }

    // 如果用户未登录，渲染登录提示组件
    if (!session) {
        return <SignInNotice />
    }

    // 已登录，渲染子路由
    return <Slot />
}
