import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        title: '',                      // 默认标题为空
        headerTitleAlign: 'center',     // 安卓标题栏居中
        animation: 'simple_push',       // 安卓使用左右切屏
        headerTintColor: '#1f99b0',     // 导航栏中文字、按钮、图标的颜色
        // 标题组件的样式
        headerTitleStyle: {
          fontWeight: '400',
          color: '#2A2929',
          fontSize: 16,
        },
        headerBackButtonDisplayMode: 'minimal', // 设置返回按钮只显示箭头，不显示文字
      }}
    >
      {/* Tabs */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* Cards */}
      <Stack.Screen name="articles/index" options={{ title: '通知' }} />
      <Stack.Screen name="settings/index" options={{ title: '设置' }} />
      <Stack.Screen name="courses/[id]" options={{ title: '课程详情' }} />
      <Stack.Screen name="search/index" options={{ title: '搜索' }} />
    </Stack>
  );
}
