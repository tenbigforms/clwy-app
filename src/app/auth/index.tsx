import { useState } from 'react'

import SignInForm from '@/components/auth/SignInForm'
import SignUpForm from '@/components/auth/SignUpForm'

export default function Auth() {
    const [selected, setSelected] = useState('signIn')

    return selected === 'signIn' ? (
        <SignInForm setSelected={setSelected} />
    ) : (
        <SignUpForm setSelected={setSelected} />
    )
}
