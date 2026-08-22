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
      <Stack.Screen name="articles/index" options={{ title: '通知' }} />
      <Stack.Screen name="settings/index" options={{ title: '设置' }} />
      <Stack.Screen name="courses/[id]" options={{ title: '课程详情' }} />
      <Stack.Screen name="search/index" options={{ title: '搜索' }} />
    </Stack>
  );
}
