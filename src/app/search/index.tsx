import { View, StyleSheet, TextInput, Alert } from 'react-native'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function Search() {
    return (
        <View style={styles.container}>
            <View style={styles.searchWrapper}>
                <Ionicons name={'search-outline'} size={20} color="#888" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    autoCapitalize={'none'}
                    autoFocus={true}
                    autoCorrect={false}
                    returnKeyType={'search'}
                    selectionColor={'#1f99b0'}
                    placeholder={'通过关键词搜索'}
                    placeholderTextColor={'#777'}
                    onSubmitEditing={(event) => {
                        const keyword = event.nativeEvent.text
                        const searchKeyword = keyword.trim().toLowerCase()

                        console.log('搜索的关键词：', keyword)
                        if (!searchKeyword) {
                            Alert.alert('提示', '请输入搜索关键词')
                            return
                        }
                        router.push({
                            pathname: '/search/[keyword]',
                            params: { keyword: searchKeyword },
                        })
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchWrapper: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#D3D3D3',
        borderRadius: 50,
        height: 40,
        alignItems: 'center',
        marginTop: 13,
        marginBottom: 30,
        marginHorizontal: 10,
    },
    icon: {
        width: 26,
        marginLeft: 14,
    },
    input: {
        flex: 1,
        height: 50,
        fontWeight: 600,
        fontSize: 16,
    },
})
