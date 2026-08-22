import { View, Text, StyleSheet } from 'react-native'

export default function Teacher() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Teachers</Text>
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
})
