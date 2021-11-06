import { createContext, FC, useContext } from 'react'

const GAME_MANAGER_CONTEXT_DEFAULT = {
    user: {},
    level: 0,
    score: 0,
}
const GameManagerContext = createContext(GAME_MANAGER_CONTEXT_DEFAULT)

export const useGameManager = () => useContext(GameManagerContext)

export const GameManagerProvider: FC = ({ children }) => {
    return (
        <GameManagerContext.Provider
            value={{
                user: {},
                level: 0,
                score: 0,
            }}
        >
            {children}
        </GameManagerContext.Provider>
    )
}
