import { Stack } from 'expo-router'
import { useSession } from '@/utils/ctx'

export default function AuthLayout() {
    const { session } = useSession()

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Protected guard={!!session}>
                <Stack.Screen name="index" />
            </Stack.Protected>

            <Stack.Protected guard={!session}>
                <Stack.Screen name="sign-in" />
            </Stack.Protected>
        </Stack>
    )
}
