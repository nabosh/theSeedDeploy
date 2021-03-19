import React, { useState, createContext } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  let sharedState = {  }

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}


















export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]); // is this needed?

  let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated)
  
  useEffect(() => {
    let isCurrent = true;
    netlifyAuth.initialize((user) => {
      if (isCurrent) {
        setLoggedIn(!!user);
      }
    });

    return () => {
      isCurrent = false;
    }
  }, [])

  let login = () => {
    netlifyAuth.authenticate((user) => {
      setLoggedIn(!!user);
    });
  };

  const userEmail = user.email;


  return (
    <UserContext.Provider value={{ userEmail }}>{children}</UserContext.Provider>
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
  