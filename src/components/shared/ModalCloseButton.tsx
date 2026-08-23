import { useRouter } from 'expo-router'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'


export default function ModalCloseButton() {
    const router = useRouter()

    return (
        <View style={styles.headerButton}>
            <TouchableOpacity onPress={() => router.dismiss()}>
                <MaterialCommunityIcons name="close" size={30} color="#1f99b0" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headerButton: {
        padding: 3,
    },
})
