import '../styles/app.css';
// import netlifyIdentity from 'netlify-identity-widget';
// import netlifyAuth from '../netlifyAuth.js';
import React, { useState, useMemo } from "react";
import { UserContext } from '../context/UserContext';

function MyApp({ Component, pageProps }) {
    const [user, setUser] = useState(null);

    const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  

    return (
        <div className="bg-red-600 w-full p-10 min-h-screen">
            <div className="max-w-2xl mx-auto">
                {/* <AppWrapper>
                    <Component {...pageProps} />
                </AppWrapper> */}
                <UserContext.Provider value={value}>
                    <Component {...pageProps} />
                </UserContext.Provider>
            </div>
        </div>
    );
}

export default MyApp;
