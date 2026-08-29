import { useEffect, useCallback, useReducer } from 'react'
import * as SecureStore from 'expo-secure-store'

function useAsyncState(initialValue = [true, null]) {
    return useReducer((state, action) => [false, action], initialValue)
}

export async function setStorageItemAsync(key, value) {
    if (value == null) {
        await SecureStore.deleteItemAsync(key)
    } else {
        await SecureStore.setItemAsync(key, value)
    }
}

export function useStorageState(key) {
    const [state, setState] = useAsyncState()

    useEffect(() => {
        SecureStore.getItemAsync(key).then((value) => {
            setState(value)
        })
    }, [key])

    const setValue = useCallback(
        async (value) => {
            await setStorageItemAsync(key, value)
            setState(value)
        },
        [key],
    )

    return [state, setValue]
}