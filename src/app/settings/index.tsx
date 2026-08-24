import { ScrollView, StyleSheet, Alert, Image } from 'react-native'
import { TableView, Section, Cell } from 'clwy-react-native-tableview-simple'

export default function Index() {
    return (
        <ScrollView style={styles.container}>
            <TableView>
                <Section>
                    <Cell title="Wiki" />
                    <Cell title="常用站点" />
                </Section>

                <Section>
                    <Cell title="关于「长乐未央」" />
                    <Cell title="使用条款" />
                    <Cell title="隐私政策" />
                    <Cell title="App 备案号" />
                </Section>

                <Section>
                    <Cell title="注销账户" />
                    <Cell title="安全退出" />
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
