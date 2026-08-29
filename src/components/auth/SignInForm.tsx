import { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { useSession } from '@/utils/ctx'
import Loading from '@/components/shared/Loading'
import * as WebBrowser from 'expo-web-browser'

export default function SignInForm(props) {
    const { setSelected } = props
    const { signIn } = useSession()
    const [hidePassword, setHidePassword] = useState(true)
    const [agreedPolicy, setAgreedPolicy] = useState(false)
    const [formParams, setFormParams] = useState({
        login: '',
        password: '',
    })
    const [loading, setLoading] = useState(false)


    const onChangeText = (name, text) => {
        setFormParams((prev) => ({
            ...prev,
            [name]: text,
        }))
    }
    const handleSubmit = () => {
        console.log('formParams', formParams)

    }

    return (
        <View style={styles.container}>
            {loading && <Loading />}

            <View style={styles.noticeWrapper}>
                <Text style={styles.notice}>新用户请从这里开始 </Text>
                <MaterialCommunityIcons name={'arrow-right'} size={25} color={'#fff'} />
                <TouchableOpacity onPress={() => setSelected('signUp')}>
                    <Text style={styles.noticeLink}>会员注册</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>会员登录</Text>
                <View style={styles.form}>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>用户名 / 邮箱</Text>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                style={styles.input}
                                placeholder="name@clwy.cn"
                                keyboardType={'email-address'}
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                onChangeText={(text) => onChangeText('login', text)}
                            />
                        </View>
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.label}>密码</Text>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                style={styles.input}
                                placeholder="・・・・・・・・"
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                secureTextEntry={hidePassword}
                                onChangeText={(text) => onChangeText('password', text)}
                            />
                            <TouchableWithoutFeedback onPress={() => setHidePassword(!hidePassword)}>
                                <View style={styles.eyeIcon}>
                                    <MaterialCommunityIcons
                                        name={hidePassword ? 'eye-off' : 'eye-outline'}
                                        size={24}
                                        color={'#333'}
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>

                <TouchableWithoutFeedback disabled={!agreedPolicy} onPress={handleSubmit}>
                    <View style={[styles.submitWrapper, agreedPolicy && styles.canSubmitWrapper]}>
                        <Text style={[styles.submit, agreedPolicy && styles.canSubmit]}>登录</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => setAgreedPolicy(!agreedPolicy)}>
                    <View style={styles.privacyWrapper}>
                        <MaterialCommunityIcons
                            name={agreedPolicy ? 'checkbox-marked-circle' : 'checkbox-blank-circle-outline'}
                            size={16}
                            color={agreedPolicy ? '#629BF0' : '#999'}
                            style={styles.privacyCheckbox}
                        />
                        <Text style={styles.privacyText}>已阅读并同意</Text>
                        <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://clwy.cn/rules')}>
                            <Text style={styles.privacy}>会员使用条款</Text>
                        </TouchableOpacity>
                        <Text style={styles.privacyText}>和</Text>
                        <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://clwy.cn/privacy')}>
                            <Text style={styles.privacy}>隐私政策</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    cancel: {
        alignSelf: 'flex-end',
        color: '#629BF0',
    },
    title: {
        fontSize: 28,
        marginTop: 28,
    },
    form: {
        marginTop: 29,
    },
    formGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 12,
    },
    inputWrapper: {
        position: 'relative',
    },
    input: {
        fontSize: 15,
        fontWeight: '300',
        color: '#404044',
        backgroundColor: '#F8F8F8',
        height: 50,
        marginTop: 6,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
    },
    inputFocused: {
        borderBottomColor: '#629BF0',
    },
    eyeIcon: {
        position: 'absolute',
        right: 15,
        top: 20,
        backgroundColor: 'transparent',
    },
    inputIcon: {
        position: 'absolute',
        right: 15,
        top: 20,
        color: '#DEDEE2',
    },
    inputIconSuccess: {
        color: '#629BF0',
    },
    forgetPassword: {
        fontSize: 12,
        color: '#629BF0',
        fontWeight: 'bold',
        textAlign: 'right',
        marginTop: 5,
    },
    submitWrapper: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#AACAF7',
        width: 206,
        height: 48,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    submit: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#AACAF7',
    },
    canSubmitWrapper: {
        borderColor: '#629BF0',
    },
    canSubmit: {
        color: '#629BF0',
    },
    privacyWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    privacyCheckbox: {
        marginRight: 4,
    },
    privacyText: {
        fontSize: 12,
        color: '#999',
    },
    privacy: {
        fontSize: 12,
        color: '#629BF0',
        fontWeight: 'bold',
        marginHorizontal: 2,
    },
    noticeWrapper: {
        height: 48,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DC5F7',
    },
    notice: {
        color: '#fff',
        fontSize: 12,
    },
    noticeLink: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
})
