import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router'
import { Image } from 'expo-image'

export default function TeacherInfo(props) {
    const { user } = props

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>授课老师</Text>

            <Link href={{ pathname: `/teachers/${user.username}` }} asChild>
                <TouchableWithoutFeedback>
                    <View style={styles.userInfo}>
                        <Image source={{ uri: user.avatar }} style={styles.avatar} />
                        <View style={styles.info}>
                            <Text style={styles.nickname}>{user.nickname}</Text>
                            <Text style={styles.company}>{user.company}</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        paddingTop: 0,
        marginBottom: 8,
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000',
    },
    userInfo: {
        flexDirection: 'row',
        position: 'relative',
        alignItems: 'center',
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 45,
        marginRight: 15,
    },
    info: {
        flex: 1,
    },
    nickname: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#777',
    },
    company: {
        fontSize: 13,
        marginTop: 2,
        marginBottom: 2,
        color: '#777',
    },
})
