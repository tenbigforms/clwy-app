import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function NetworkError(props: { title?: string; onReload?: () => void; }) {

    const title = props.title || 'Ooops, network error';
    const { onReload } = props;

    return (
        <View style={styles.container}>
            {/* <SimpleLineIcons name={"alert"} size={10} color={"#1f99b0"} /> */}
            <Text style={styles.errortext}>{title}</Text>
            <TouchableOpacity style={styles.reload} onPress={onReload}>
                <Text style={styles.label}>Reload Page</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center",
    },
    errortext: {
        color: 'red',
    },
    reload: {
        marginTop: 10,
        backgroundColor: '#1f99b0',
        height: 40,
        borderRadius: 4,
        paddingLeft: 10,
        paddingRight: 10,
    },
    label: {
        color: '#fff',
        lineHeight: 40,
    },
});