import '../styles/app.css';
// import netlifyIdentity from 'netlify-identity-widget';
// import netlifyAuth from '../netlifyAuth.js';

import { AppWrapper } from '../context/state';
import { UserContext } from '../context/User';
// import {ThemeContext, themes} from '../theme-context';
// import ThemedButton from '../components/themed-button';


function MyApp({ Component, pageProps }) {

    return (
        <div className="bg-red-600 w-full p-10 min-h-screen">
            <div className="max-w-2xl mx-auto">
                {/* <AppWrapper>
                    <Component {...pageProps} />
                </AppWrapper> */}
                <UserC>
                    <Component {...pageProps} />
                </UserC>
            </div>
        </div>
    );
}

export default MyApp;
