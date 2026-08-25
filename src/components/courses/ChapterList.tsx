import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router'
import { Image } from 'expo-image'

export default function ChaptersList(props) {
    const { chapter, course, user } = props

    return (
        <View style={styles.container}>
            <Link href={{ pathname: `/chapters/${chapter.id}` }} key={chapter.id.toString()} asChild>
                <TouchableWithoutFeedback>
                    <View style={styles.item}>
                        <View style={styles.info}>
                            <Text style={styles.title} numberOfLines={2}>
                                {chapter.title}
                            </Text>
                            <View style={styles.userWrapper}>
                                <Image source={{ uri: user.avatar }} style={styles.avatar}></Image>
                                <View style={styles.others}>
                                    <Text style={styles.nickname}>{user.nickname}</Text>
                                    <Text style={styles.separator}> | </Text>
                                    <Text style={styles.createdAt} numberOfLines={1}>
                                        {chapter.createdAt} 发布
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.imageWrapper}>
                            <Image source={{ uri: course.image }} style={styles.image} />
                            <View style={styles.countWrapper}>
                                <Text style={styles.count}>第 {chapter.rank} 回</Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        backgroundColor: '#fff',
    },
    item: {
        marginBottom: 8,
        paddingTop: 8,
        paddingLeft: 8,
        paddingRight: 8,
        height: 96,
        borderRadius: 20,
        position: 'relative',
        flexDirection: 'row',
        backgroundColor: '#F4F1ED',
    },
    imageWrapper: {
        position: 'relative',
        backgroundColor: 'transparent',
    },
    image: {
        width: 96,
        height: 65,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    countWrapper: {
        position: 'absolute',
        bottom: 8,
        width: 96,
        height: 65,
        backgroundColor: '#C6B09B',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        justifyContent: 'flex-end',
        zIndex: -1,
    },
    count: {
        lineHeight: 15,
        textAlign: 'center',
        fontSize: 9,
        color: '#fff',
        zIndex: 1,
    },
    info: {
        backgroundColor: 'transparent',
        flex: 1,
        marginLeft: 10,
    },
    title: {
        width: 220,
        height: 48,
        marginTop: 10,
        fontSize: 14,
        fontWeight: 'bold',
    },
    userWrapper: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    avatar: {
        width: 18,
        height: 18,
        borderRadius: 9,
    },
    others: {
        flexDirection: 'row',
        fontSize: 10,
        color: '#777',
        marginLeft: 5,
        backgroundColor: 'transparent',
    },
    nickname: {
        marginTop: 4,
        fontSize: 10,
        color: '#777',
    },
    separator: {
        fontSize: 10,
        marginTop: 3,
        marginHorizontal: 1,
        color: '#777',
    },
    createdAt: {
        marginTop: 4,
        fontSize: 10,
        width: 130,
        color: '#777',
    },
})
