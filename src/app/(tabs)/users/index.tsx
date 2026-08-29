import { View, Text, StyleSheet } from 'react-native'
import { useSession } from '@/utils/ctx'

export default function Index() {
    const { signOut } = useSession()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>这里是用户页</Text>

            <Text
                style={styles.button}
                onPress={() => {
                    signOut()
                }}
            >
                安全退出
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
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#e29447',
    },
    button: {
        marginTop: 20,
        fontSize: 20,
        color: '#1f99b0',
    },
})
