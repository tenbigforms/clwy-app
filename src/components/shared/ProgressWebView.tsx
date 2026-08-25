import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'

import Loading from '@/components/shared/Loading'

export default function ProgressWebView(props) {
    const [progress, setProgress] = useState(0)
    const ProgressBar = (props) => {
        if (progress >= 1) return null
        const width = `${props.progress * 100}%`
        // const width2 = `${props.progress - 100}`
        return (
            <View style={[styles.loadingBar, { width }]}>
                {/* <View style={[styles.loadingBarr, { width2 }]} /> */}
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <ProgressBar progress={progress} />

            <WebView
                userAgent="clwy-app"
                startInLoadingState={true}
                renderLoading={() => <Loading />}
                onLoadProgress={({ nativeEvent }) => {
                    setProgress(nativeEvent.progress)
                }}
                {...props}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    loadingBar: {
        backgroundColor: '#2ce1db',
        height: 2,
    },
    loadingBarr: {
        backgroundColor: '#171b1b',
        height: 2,
    },
})
