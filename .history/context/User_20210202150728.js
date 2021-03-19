import React from, {useState, createContext} 'react'
import netlifyAuth from '../netlifyAuth';
import netlifyIdentity from 'netlify-identity-widget';

export const User = () => {
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
        <div>
            
        </div>
    )
}


