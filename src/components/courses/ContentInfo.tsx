import { View, Text, StyleSheet } from 'react-native'

export default function ContentInfo(props) {
    const { course } = props

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>课程概要</Text>

            <View style={styles.contentWrapper}>
                <Text style={styles.content} lightColor="#333">
                    {course.content}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 23,
        paddingBottom: 15,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    contentWrapper: {
        marginTop: 5,
        position: 'relative',
        backgroundColor: '#fff',
    },
    content: {
        fontSize: 10,
        fontWeight: '300',
        lineHeight: 15,
    },
})
