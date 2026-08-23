import { Tabs, Link } from 'expo-router'
import { Image } from 'expo-image'
import { SimpleLineIcons } from '@expo/vector-icons'
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { ComponentProps } from 'react';


type SimpleLineIconsProps = React.ComponentProps<typeof SimpleLineIcons>;


type HeaderButtonProps = {
    name: SimpleLineIconsProps['name']
    href: ComponentProps<typeof Link>['href']
    style?: ComponentProps<typeof TouchableOpacity>['style']
}

function TabBarIcon(props: SimpleLineIconsProps) {
    return <SimpleLineIcons size={25} {...props} />
}

function LogoTitle() {
    return <Image style={styles.logo} contentFit="contain" source={require('@/assets/logo-light.png')} />
}


function HeaderButton(props: HeaderButtonProps) {
    const { name, ...rest } = props
    return (
        <Link asChild {...rest} >
            <TouchableOpacity>
                <SimpleLineIcons size={20} color="#1f99b0" name={name} />
            </TouchableOpacity>
        </Link>
    )
}

export default function TabLayout() {


    return (
        <Tabs
            screenOptions={{
                headerTitleAlign: 'center',
                headerTitle: () => <LogoTitle />,
                headerLeft: () => <HeaderButton name="bell" href="/articles" style={styles.headerButton} />,
                headerRight: () => (
                    <>
                        <HeaderButton name="magnifier" href="/search" style={[styles.headerButton, styles.searchButton]} />
                        <HeaderButton name="options" href="/settings" style={styles.headerButton} />
                    </>

                ),
                tabBarButton: (props) => (
                    <TouchableOpacity
                        {...props}
                        activeOpacity={1}
                        style={[props.style, { backgroundColor: 'transparent' }]}
                    />
                ),
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <TabBarIcon name="compass" color={color} />,
                    tabBarActiveTintColor: '#d90f0f',
                }}
            />
            <Tabs.Screen
                name="videos"
                options={{
                    title: 'Videos',
                    tabBarIcon: ({ color }) => <TabBarIcon name="camrecorder" color={color} />,
                    tabBarActiveTintColor: '#0f67d9',


                }}

            />

            <Tabs.Screen
                name="users"
                options={{
                    title: 'User',
                    tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
                    tabBarActiveTintColor: '#1bc163',

                }}
            />
        </Tabs>
    )
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
})
