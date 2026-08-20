import { Stack } from 'expo-router'






// function LogoTitle() {
//   return <Image style={styles.logo} contentFit="contain" source={require('../assets/images/kisbook_icon.png')} />;
// }

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#1780f1'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="index" options={{
        title: 'Main Page',
      }} />      <Stack.Screen
        name="courses/[id]"
        options={({ route }) => ({
          title: route.params?.title || 'Course Page',
        })}
      />
    </Stack>
  )
}


// const styles = StyleSheet.create({
//   logo: {
//     width: 130,
//     height: 30,
//   },
// });
