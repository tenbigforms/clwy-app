import { ScrollView, StyleSheet, Alert } from 'react-native'
import { TableView } from 'clwy-react-native-tableview-simple'
import { Cell, Section } from '@/components/settings/TableView'
import { useRouter } from 'expo-router'

export default function Index() {

    const router = useRouter()
    return (
        <ScrollView style={styles.container}>
            <TableView>
                <Section>
                    <Cell title="Wiki" />
                    <Cell
                        title="常用站点"

                        onPress={() => {
                            router.push({
                                pathname: '/settings/[uri]',
                                params: {
                                    uri: `https://kisbook.com/`,
                                    title: '常用站点',
                                },
                            })
                        }}
                    />           </Section>

                <Section>
                    <Cell title="关于「长乐未央」" />
                    <Cell title="使用条款" />
                    <Cell title="隐私政策" />
                    <Cell title="注销账户" />
                    <Cell
                        title="App 备案号"
                        onPress={() => {
                            Alert.alert('备案号', '鄂ICP备13016268号-12A')
                        }}
                    />
                </Section>

                <Section>
                    <Cell title="安全退出" titleTextColor="#ff6a6a" />
                </Section>
            </TableView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
    },
})
