import { Tabs, Stack, Link } from 'expo-router';
import { Image } from 'expo-image';
import { SimpleLineIcons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';

function LogoTitle() {
  return <Image style={styles.logo} contentFit="contain" source={require('../../assets/logo-light.png')} />;
}


function HeaderButton(props) {
  const { name, ...rest } = props;

  return (
    <Link asChild {...rest} >
      <TouchableOpacity>
        <SimpleLineIcons size={20} color="#1f99b0" name={name} />
      </TouchableOpacity>
    </Link>
  );
}
export default function Layout() {
  return (
    <Tabs />
    // <Stack
    //   screenOptions={{
    //     title: '',
    //     headerTitleAlign: 'center',
    //     animation: 'simple_push',
    //     headerTintColor: '#1f99b0',
    //     headerTitleStyle: {
    //       fontWeight: '400',
    //       color: '#2A2929',
    //       fontSize: 16,
    //     },
    //     headerBackButtonDisplayMode: 'minimal',
    //   }}
    // >
    //   <Stack.Screen
    //     name="index"
    //     options={{
    //       headerTitle: props => <LogoTitle {...props} />,
    //       headerLeft: () => <HeaderButton name="bell" href="/articles" style={styles.headerButton} />,
    //       headerRight: () => (
    //         <>
    //           <HeaderButton name="magnifier" href="/search" style={[styles.headerButton, styles.searchButton]} />
    //           <HeaderButton name="options" href="/settings" style={styles.headerRight} />
    //         </>
    //       ),
    //     }}
    //   />
    //   <Stack.Screen
    //     name="courses/[id]"
    //     options={({ route }) => ({
    //       title: route.params?.title || 'Course Page',
    //     })}
    //   />
    // </Stack>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 130,
    height: 30,
  },
  headerButton: {
    padding: 8,
    color: "#000000"
  },
  searchButton: {
    marginRight: 8,
  },
});
