import React, {createContext} from 'react'

export const UserContext = createContext({})

export const UserProvider = ({children}) => {
    const [user, setUser]

    return <UserContext.Provider value={{email}}>
        {children}
    </UserContext.Provider>
}
