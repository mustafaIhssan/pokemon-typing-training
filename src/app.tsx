import React, { Suspense } from 'react'
// import { AppRouter } from './app-router'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'
import { GameManagerProvider } from './game-manager'
import { SecurityProvider } from './scurity'

export function App() {
    const queryClient = new QueryClient()

    return (
        <Suspense
            fallback={
                <div className="h-full flex items-center justify-center">
                    Loading...
                </div>
            }
        >
            <SecurityProvider>
                <GameManagerProvider>
                    <QueryClientProvider client={queryClient}>
                        Hello
                        <ReactQueryDevtools />
                    </QueryClientProvider>
                </GameManagerProvider>
            </SecurityProvider>
        </Suspense>
    )
}
