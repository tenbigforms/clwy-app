import { router } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

import { useSession } from '@/utils/ctx'

export default function SignInNotice() {
    const { signIn } = useSession()
    return (
        <View style={styles.container}>
            <Text
                style={styles.button}
                onPress={() => {
                    signIn()
                }}
            >
                登录
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginTop: 20,
        fontSize: 20,
        color: '#1f99b0',
    },
})
