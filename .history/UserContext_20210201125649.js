import React, { useState, createContext } from 'react';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]); // is this needed?

  let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated)
  
  useEffect(() => {
    let isCurrent = true
    netlifyAuth.initialize((user) => {
      if (isCurrent) {
        setLoggedIn(!!user)
      }
    })

    return () => {
      isCurrent = false;
    }
  }, [])

  let login = () => {
    netlifyAuth.authenticate((user) => {
      setLoggedIn(!!user)
    })
  }


  return (
    <UserContext.Provider value={{ email }}>{children}</UserContext.Provider>
  );
};





export default function Home() {
    let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated)
  
    useEffect(() => {
      let isCurrent = true
      netlifyAuth.initialize((user) => {
        if (isCurrent) {
          setLoggedIn(!!user)
        }
      })
  
      return () => {
        isCurrent = false
      }
    }, [])
  
    let login = () => {
      netlifyAuth.authenticate((user) => {
        setLoggedIn(!!user)
      })
    }
  