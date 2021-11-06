import { createContext, FC, useContext, useState } from 'react'
import useLocalStorageState from 'use-local-storage-state'

const LOCAL_STORAGE_KEY = 'accessToken'
const LOCAL_STORAGE_USR = 'userData'
const GAME_MANAGER_CONTEXT_DEFAULT = {
    login: () => undefined,
    logout: () => undefined,
    user: {},
    accessToken: null,
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

    const login = () => {
        setIsAuthenticated(true)
        setUser(userPlaceHolder)
        setAccessToken(accessTokenPlaceHolder)
    }

    const logout = () => {
        setIsAuthenticated(false)
        setUser(null)
        setAccessToken(null)
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
