import { Stack, } from 'expo-router'
import screenOptions from '@/opstions/screenOptions'
import tabOptions from '@/opstions/tabOptions'
import ModalCloseButton from '@/components/shared/ModalCloseButton'
import { SessionProvider } from '@/utils/ctx'
import { SplashScreenController } from '@/utils/splash'

export default function Layout() {
  return (
    <SessionProvider>
      <SplashScreenController />

      <Stack screenOptions={screenOptions}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="articles/index" options={{ title: 'Notification' }} />
        <Stack.Screen name="articles/[id]" options={{ title: 'Notification Details' }} />
        <Stack.Screen name="settings/index" options={{ title: 'Settings' }} />
        <Stack.Screen
          name="settings/[uri]"
          options={({ route }) => ({
            title: route.params?.title
          })}
        />
        <Stack.Screen name="courses/[id]" options={{ title: 'Course' }} />
        <Stack.Screen name="search/index" options={{ title: 'Search' }} />
        <Stack.Screen name="search/[keyword]" options={{ title: 'Search results' }} />
        <Stack.Screen
          name="teachers/[id]"
          options={{
            presentation: 'modal',
            title: 'Teacher Details',
            animation: 'slide_from_bottom',
            headerLeft: () => { ModalCloseButton },
          }}
        />
      </Stack>
    </SessionProvider>

  )
}
