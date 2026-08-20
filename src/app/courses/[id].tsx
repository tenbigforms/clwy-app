import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Stack, useLocalSearchParams, useNavigation } from 'expo-router';

export default function Course() {

    const { id, } = useLocalSearchParams();
    const navigation = useNavigation();


    return (
        <View style={styles.container}>

            <Text style={styles.title}>Here is Courses</Text>

            <Text style={styles.info}>Course ID: {id}</Text>
            <TouchableOpacity onPress={() => navigation.setOptions({ title: 'Course is good' })}>
                <Text style={styles.buttonText}>Change title</Text>
            </TouchableOpacity>
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
        color: '#4f9df7',
    },
    info: {
        marginTop: 20,
        fontSize: 20,
        color: '#67c1b5',
    },
    buttonText: {
        marginTop: 20,
        fontSize: 20,
        color: '#ff7f6f',
    },
});
