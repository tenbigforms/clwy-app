import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Video Page</Text>

            <Link style={styles.link} href="/courses/2?title=React Native">
                Check React Native Course
            </Link>
        </View>
    );
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
    link: {
        marginTop: 20,
        fontSize: 20,
        color: '#1f99b0',
    },
});
