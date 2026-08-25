import { StyleSheet, Text } from 'react-native'
import ScrollableTabView, { ScrollableTabBar } from 'clwy-expo-scrollable-tab-view'
import useFetchData from '@/hooks/useFetchData'
import Loading from '@/components/shared/Loading'
import NetworkError from '@/components/shared/NetworkError'

export default function Index() {

    const url = '/categories'
    const { data, loading, error, onReload } = useFetchData(url)
    const { categories } = data

    // 加载中
    if (loading) {
        return <Loading />
    }

    // 网络错误
    if (error) {
        return <NetworkError onReload={onReload} />
    }

    const pages = categories.map((item) => (
        <Text key={item.id.toString()} tabLabel={item.name} />
    ))

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
            {pages}
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
