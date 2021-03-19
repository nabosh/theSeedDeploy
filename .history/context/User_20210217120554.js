import React, { useState, createContext } from 'react';
import netlifyAuth from '../netlifyAuth';
import netlifyIdentity from 'netlify-identity-widget';

export const UserContext = createContext();

export const UserProvider = () => {
    let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated);
    let [user, setUser] = useState(null);
  
    useEffect(() => {
      let isCurrent = true;
      netlifyAuth.initialize((user) => {
        if (isCurrent) {
          setLoggedIn(!!user);
          setUser(user);
        }
      });
  
      return () => {
        isCurrent = false;
      };
    }, []);

    return (
        <UserContext.Provider value={'nabosh@gmail.com'} >
            {props.children}
        </UserContext.Provider>
    )
}


