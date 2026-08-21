import { Tabs, Link } from 'expo-router';
import { Image } from 'expo-image';
import { SimpleLineIcons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';

/**
 * 导航栏 Logo 组件
 */
function LogoTitle() {
    return <Image style={styles.logo} contentFit="contain" source={require('@/assets/logo-light.png')} />;
}

/**
 * 导航栏按钮组件
 * @param props
 */
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
                headerTitleAlign: 'center',       // 安卓标题栏居中
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
                options={{ title: '发现' }}
            />
            <Tabs.Screen
                name="videos"
                options={{ title: '视频课程' }}
            />
            <Tabs.Screen
                name="users"
                options={{ title: '我的' }}
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
