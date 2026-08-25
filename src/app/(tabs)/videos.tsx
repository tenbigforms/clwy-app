import { StyleSheet, Text } from 'react-native'
import ScrollableTabView, { ScrollableTabBar } from 'clwy-expo-scrollable-tab-view'

export default function Index() {
    return (
        <ScrollableTabView
            style={styles.container}
            initialPage={0}
            renderTabBar={() => <ScrollableTabBar />}
            tabBarUnderlineStyle={styles.barUnderLine}
            tabBarBackgroundColor={'#fff'}
            tabBarInactiveTextColor={'#777'}
            tabBarActiveTextColor={'#000'}
            tabBarTextStyle={styles.barText}
        >
            <Text tabLabel="新闻">新闻的内容</Text>
            <Text tabLabel="体育">体育的内容</Text>
            <Text tabLabel="生活">生活的内容</Text>
            <Text tabLabel="娱乐">娱乐的内容</Text>
            <Text tabLabel="科技">科技的内容</Text>
            <Text tabLabel="创业">创业的内容</Text>
            <Text tabLabel="教育">教育内容</Text>
            <Text tabLabel="财经">财经的内容</Text>
        </ScrollableTabView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    barUnderLine: {
        backgroundColor: '#1f99b0',
        height: 2,
    },
    barText: {
        fontWeight: '400',
    },
})
