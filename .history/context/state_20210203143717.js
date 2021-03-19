import { createContext, useContext } from 'react';
import netlifyAuth from '../netlifyAuth';
import netlifyIdentity from 'netlify-identity-widget';

const AppContext = createContext();

export function AppWrapper({ children }) {
    let sharedState = {
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
    }

    return (
        
    )
}


