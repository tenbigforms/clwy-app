import { Section as DefaultSection, Cell as DefaultCell } from 'clwy-react-native-tableview-simple'
import { useRouter } from 'expo-router'
/**
 * 封装 Section
 * @param props
 */
export function Section(props) {
    return (
        <DefaultSection
            hideSurroundingSeparators={true}
            roundedCorners={true}
            sectionPaddingTop={20}
            separatorInsetRight={'18'}
            separatorTintColor={'#efefef'}
            {...props}
        />
    )
}


export function Cell(props) {
    const { uri, onPress, ...rest } = props
    const router = useRouter()
    const baseUrl = 'https://clwy.cn'
    const navigateToDetail = () => {
        if (!uri) return

        router.push({
            pathname: '/settings/[uri]',
            params: {
                title: rest?.title,
                uri: `${baseUrl}/${uri}`,
            },
        })
    }

    return (
        <DefaultCell
            accessory="DisclosureIndicator"
            titleTextStyle={{ textAlign: 'center', fontSize: 17 }}
            titleTextColor="#000000"
            contentContainerStyle={{ height: 55 }}
            backgroundColor="#fff"
            onPress={onPress || navigateToDetail}
            {...rest}
        />
    )
}
