import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Stack, useRouter } from 'expo-router'
import { View, TouchableOpacity } from 'react-native'
import screenOptions from '@/opstions/screenOptions'
import ModalCloseButton from '@/components/shared/ModalCloseButton'

function CloseButton() {
  const router = useRouter()

  return (
    <View style={{ padding: 3 }}>
      <TouchableOpacity onPress={() => router.dismiss()}>
        <MaterialCommunityIcons name="close" size={30} color="#1f99b0" />
      </TouchableOpacity>
    </View>
  );
}

export default function Layout() {
  return (
    <Stack screenOptions={screenOptions}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="articles/index" options={{ title: 'Notification' }} />
      <Stack.Screen name="settings/index" options={{ title: 'Settings' }} />
      <Stack.Screen name="courses/[id]" options={{ title: 'Course' }} />
      <Stack.Screen name="search/index" options={{ title: 'Search' }} />
      <Stack.Screen
        name="teachers/[id]"
        options={{
          presentation: 'modal',
          title: '老师详情',
          animation: 'slide_from_bottom',
          headerLeft: () => { ModalCloseButton },
        }}
      />
    </Stack>


  )
}
