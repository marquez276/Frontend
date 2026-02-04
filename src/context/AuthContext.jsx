import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()
const ADMIN_EMAIL = 'diegocostamarques23@icloud.com'

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth deve ser usado dentro de AuthProvider')
    }
    return context
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        const savedUser = localStorage.getItem('user')
        if (savedUser) {
            setUser(JSON.parse(savedUser))
            setIsAuthenticated(true)
        }
    }, [])

    const login = (userData) => {
        setUser(userData)
        setIsAuthenticated(true)
        localStorage.setItem('user', JSON.stringify(userData))
    }

    const isAdmin = () => {
        return user?.email === ADMIN_EMAIL
    }

    const logout = () => {
        setUser(null)
        setIsAuthenticated(false)
        localStorage.removeItem('user')
    }

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated,
            login,
            logout,
            isAdmin
        }}>
            {children}
        </AuthContext.Provider>
    )
}