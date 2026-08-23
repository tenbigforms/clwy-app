import { Link } from 'expo-router'
import { Text, View, StyleSheet, FlatList, TouchableWithoutFeedback, Platform } from 'react-native'
import { Image } from 'expo-image'
import { Course } from '@/types/course'

interface CourseListProps {
    courses: Course[]
    title: string
}

export default function CoursesList(props: CourseListProps) {
    const { courses, title } = props
    const renderItem = ({ item, index }: { item: Course, index: number }) => (
        <Link asChild href={{ pathname: '/courses/[id]', params: { id: item.id } }}>
            <TouchableWithoutFeedback>
                <View
                    style={[
                        styles.course,
                        index === 0 && styles.first,
                        index === courses.length - 1 && styles.last,
                    ]}
                >
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <View style={styles.content}>
                        <Text style={styles.name} numberOfLines={2}>
                            {item.name}
                        </Text>

                        <View style={styles.countWrapper}>
                            <Text style={styles.count}>全{item.chaptersCount}回</Text>
                        </View>
                        <Text style={styles.category}>{item.category.name}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Link>
    )

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.heading}>{title}</Text>
            </View>

            <FlatList
                data={courses}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginBottom: 6,
    },
    content: {
        backgroundColor: 'transparent',
        paddingLeft: 12,
        position: 'relative',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 11,
    },
    course: {
        marginRight: 8,
        width: 232,
        height: 195,
        borderRadius: 10,
        backgroundColor: '#F5F2EE',
    },
    image: {
        width: 232,
        height: 100,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    name: {
        marginTop: 8,
        fontSize: 15,
        color: '#575457',
        fontWeight: 'bold',
        lineHeight: 20,
        width: 210,
        height: 44,
    },
    countWrapper: {
        backgroundColor: '#1f99b0',
        borderRadius: 3,
        height: 18,
        width: 46,
    },
    count: {
        fontSize: 10,
        color: '#fff',
        textAlign: 'center',
        lineHeight: 18,
    },
    category: {
        marginTop: 5,
        fontSize: 10,
        fontWeight: '300',
    },
    first: {
        marginLeft: 10,
    },
    last: {
        marginRight: 10,
    },
})
