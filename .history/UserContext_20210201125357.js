import React, {useState, createContext} from 'react'

export const UserContext = createContext({})

export const UserProvider = ({children}) => {
    const [user, setUser] = useState([])

    return <UserContext.Provider value={{email}}>
        {children}
    </UserContext.Provider>
}
