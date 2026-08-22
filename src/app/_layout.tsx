import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        title: '',
        headerTitleAlign: 'center',
        animation: 'simple_push',
        headerTintColor: '#1f99b0',

        headerTitleStyle: {
          fontWeight: '400',
          color: '#2A2929',
          fontSize: 16,
        },
        headerBackButtonDisplayMode: 'minimal',

      }}
    >
      <Stack.Screen name="teachers/[id]" options={{ presentation: 'modal', title: '老师详情', }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="articles/index" options={{ title: 'Notification' }} />
      <Stack.Screen name="settings/index" options={{ title: 'Settings' }} />
      <Stack.Screen name="courses/[id]" options={{ title: 'Course' }} />
      <Stack.Screen name="search/index" options={{ title: 'Search' }} />
    </Stack>
  );
}
