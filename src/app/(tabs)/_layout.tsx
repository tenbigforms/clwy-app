import { Tabs, Link } from 'expo-router';
import { Image } from 'expo-image';
import { SimpleLineIcons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';


function TabBarIcon(props) {
    return <SimpleLineIcons size={25} {...props} />;
}

function LogoTitle() {
    return <Image style={styles.logo} contentFit="contain" source={require('@/assets/logo-light.png')} />;
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

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerTitleAlign: 'center',
                headerTitle: props => <LogoTitle {...props} />,
                headerLeft: () => <HeaderButton name="bell" href="/articles" style={styles.headerButton} />,
                headerRight: () => (
                    <>
                        <HeaderButton name="magnifier" href="/search" style={[styles.headerButton, styles.searchButton]} />
                        <HeaderButton name="options" href="/settings" style={styles.headerButton} />
                    </>
                ),
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <TabBarIcon name="compass" color={color} />,
                }}
            />
            <Tabs.Screen
                name="videos"
                options={{
                    title: 'Videos',
                    tabBarIcon: ({ color }) => <TabBarIcon name="camrecorder" color={color} />,
                }}
            />

            <Tabs.Screen
                name="users"
                options={{
                    title: 'User',
                    tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 130,
        height: 30,
    },
    headerButton: {
        paddingLeft: 8,
    },
    searchButton: {
        marginRight: 8,
    },
});
