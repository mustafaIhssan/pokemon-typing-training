import React from 'react'
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
    useLocation,
} from 'react-router-dom'
import { useAuth } from './scurity'

export function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<div>ABC</div>} />
                <Route path="/login" element={<div>Login</div>} />

                <Route
                    path="/protected"
                    element={
                        <PrivateRoute>
                            <div>Hello This is Protected</div>
                        </PrivateRoute>
                    }
                />
            </Routes>
        </Router>
    )
}

// A wrapper for <Route> that redirects to the
// login screen if you're not yet authenticated.
function PrivateRoute({ children }: { children: JSX.Element }) {
    const { isAuthenticated } = useAuth()
    const location = useLocation()

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} />
    }

    return children
}
