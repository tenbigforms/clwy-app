import { View, Text, StyleSheet, FlatList, TouchableHighlight } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Menu = (props) => {
    const { course, chapter, chapters, onItemSelected } = props

    const renderHeader = () => (
        <View>
            <Text style={styles.name} numberOfLines={1}>
                {course.name}
            </Text>
        </View>
    )

    const renderSeparator = () => (
        <View style={styles.separator}>
            <View style={styles.separator_inner} />
        </View>
    )

    const renderItem = ({ item }) => (
        <TouchableHighlight underlayColor="#ddd" onPress={() => onItemSelected(item)}>
            <View style={styles.chapters}>
                <View style={styles.titleWrapper}>
                    <Ionicons
                        name={'play-circle-outline'}
                        size={25}
                        color={chapter.id === item.id ? '#1f99b0' : '#666A6C'}
                        style={styles.playIcon}
                    />
                    <Text style={[styles.title, chapter.id === item.id && styles.activeTitle]}>
                        {item.title}
                    </Text>
                </View>
                <Text style={styles.time}>{item.time}</Text>
            </View>
        </TouchableHighlight>
    )

    return (
        <FlatList
            style={styles.container}
            contentContainerStyle={{ paddingBottom: 20 }}
            ListHeaderComponent={renderHeader}
            data={chapters}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            ItemSeparatorComponent={renderSeparator}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderRightWidth: 1,
        borderRightColor: '#C8C7CC',
    },
    separator: {
        marginLeft: 15,
        marginRight: 0,
        backgroundColor: '#C8C7CC',
    },
    separator_inner: {
        height: StyleSheet.hairlineWidth,
    },
    name: {
        height: 45,
        fontSize: 17,
        paddingLeft: 22,
        lineHeight: 45,
        fontWeight: 'bold',
        backgroundColor: '#F1F2F2',
    },
    chapters: {
        flexDirection: 'row',
        minHeight: 41,
        paddingTop: 10,
        paddingBottom: 10,
    },
    playIcon: {
        width: 25,
        marginLeft: 20,
    },
    titleWrapper: {
        flexDirection: 'row',
        flexBasis: '80%',
        alignItems: 'center',
    },
    title: {
        color: '#343434',
        fontSize: 14,
        marginLeft: 18,
        lineHeight: 25,
    },
    activeTitle: {
        fontWeight: 600,
        color: '#1f99b0',
    },
    time: {
        color: '#343434',
        marginRight: 10,
    },
})

export default Menu
