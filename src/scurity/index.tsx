import { createContext, FC, useContext, useState } from 'react'
import useLocalStorageState from 'use-local-storage-state'

type AuthLoginProps = {
    isSuccess: boolean
    data: object
}

type AuthLogoutProps = {
    isSuccess: boolean
}

const LOCAL_STORAGE_KEY = 'accessToken'
const LOCAL_STORAGE_USR = 'userData'
const GAME_MANAGER_CONTEXT_DEFAULT = {
    login: (): AuthLoginProps => ({ isSuccess: false, data: {} }),
    logout: (): AuthLogoutProps => ({ isSuccess: false }),
    user: {},
    accessToken: '',
    isAuthenticated: false,
}
const SecurityContext = createContext(GAME_MANAGER_CONTEXT_DEFAULT)

export const useSecurity = () => useContext(SecurityContext)

export const SecurityProvider: FC = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useLocalStorageState(LOCAL_STORAGE_USR, {})
    const [accessToken, setAccessToken] = useLocalStorageState(
        LOCAL_STORAGE_KEY,
        ''
    )

    const userPlaceHolder = {}
    const accessTokenPlaceHolder = '23456y2345675654576'

    const login = (): AuthLoginProps => {
        setIsAuthenticated(true)
        setUser(userPlaceHolder)
        setAccessToken(accessTokenPlaceHolder)
        return { isSuccess: true, data: userPlaceHolder }
    }

    const logout = (): AuthLogoutProps => {
        setIsAuthenticated(false)
        setUser({})
        setAccessToken('')
        return { isSuccess: true }
    }

    return (
        <SecurityContext.Provider
            value={{
                user,
                isAuthenticated,
                accessToken,
                login,
                logout,
            }}
        >
            {children}
        </SecurityContext.Provider>
    )
}
