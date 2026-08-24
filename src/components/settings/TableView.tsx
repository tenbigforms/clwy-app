import { Section as DefaultSection, Cell as DefaultCell } from 'clwy-react-native-tableview-simple'

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

/**
 * 封装 Cell
 * @param props
 */
export function Cell(props) {
    return (
        <DefaultCell
            accessory="DisclosureIndicator"
            titleTextStyle={{ textAlign: 'center', fontSize: 17 }}
            titleTextColor="#000000"
            contentContainerStyle={{ height: 55 }}
            backgroundColor="#fff"
            {...props}
        />
    )
}
