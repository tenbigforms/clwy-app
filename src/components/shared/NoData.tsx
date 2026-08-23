import { View, Text, StyleSheet } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons'

export default function NoData() {
    return (
        <View style={styles.notice}>
            <SimpleLineIcons name={'drawer'} size={160} color={'#ddd'} />
            <Text style={styles.noticeMsg}>There is no content yet.~</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    notice: {
        height: 500,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    noticeMsg: {
        color: '#999',
    },
})
