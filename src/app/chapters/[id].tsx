import { useState } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import useFetchData from '@/hooks/useFetchData'
import NetworkError from '@/components/shared/NetworkError'
import Loading from '@/components/shared/Loading'
import { Ionicons } from '@expo/vector-icons'
import ProgressWebView from '@/components/shared/ProgressWebView'
import SideMenu from 'react-native-side-menu-updated'
import Menu from '@/components/chapters/Menu'


export default function Chapter() {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL
    const { id } = useLocalSearchParams()
    const [url, setURL] = useState(`/chapters/${id}`)
    const [infoURI, setInfoURI] = useState(`${apiUrl}/chapters/${id}/info`)
    const { data, loading, error, onReload } = useFetchData(url)
    const { chapter, course, chapters } = data
    const [isOpen, setIsOpen] = useState(false)
    const onItemSelected = (item) => {
        setURL(`/chapters/${item.id}`)
        setInfoURI(`${apiUrl}/chapters/${item.id}/info`)
        setIsOpen(false)
    }
    const updateMenuState = (menuState) => {
        setIsOpen(menuState)
    }

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <NetworkError onReload={onReload} />
    }

    return (
        <SideMenu
            menu={
                <Menu
                    course={course}
                    chapter={chapter}
                    chapters={chapters}
                    onItemSelected={onItemSelected}
                />
            }
            isOpen={isOpen}
            onChange={(menuState) => updateMenuState(menuState)}
            disableGestures={true}
        >
            <View style={styles.container}>

                <View style={{ height: 200 }} />

                <TouchableWithoutFeedback
                    onPress={() => {
                        setIsOpen(!isOpen)
                    }}>
                    <View style={styles.sideBarButtonWrapper}>
                        <View style={styles.sideBarButton}>
                            <Ionicons name={'list'} size={16} color={'#434D58'} style={styles.chaptersIcon} />
                            <Text style={styles.chapters}>课程列表</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                <ProgressWebView source={{ uri: infoURI }} />
            </View>
        </SideMenu >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    sideBarButtonWrapper: {
        backgroundColor: '#fff',
        padding: 6,
    },
    sideBarButton: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#D4D1D9',
        width: 95,
        height: 32,
        borderRadius: 16,
        justifyContent: 'center',
    },
    chapters: {
        textAlign: 'center',
        lineHeight: 32,
        marginLeft: 3,
        fontSize: 12,
    },
    chaptersIcon: {
        textAlign: 'center',
        lineHeight: 32,
    },
    webview: {
        flex: 1,
        backgroundColor: '#fff',
    },
})
