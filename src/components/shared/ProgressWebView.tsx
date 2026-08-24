import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'

import Loading from '@/components/shared/Loading'

export default function ProgressWebView(props) {
    const [progress, setProgress] = useState(0)
    const ProgressBar = (props) => {
        if (progress >= 1) return null
        const width = `${props.progress * 100}%`

        return <View style={[styles.loadingBar, { width }]} />
    }

    return (
        <View style={styles.container}>
            <ProgressBar progress={progress} />
            <WebView
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
})
