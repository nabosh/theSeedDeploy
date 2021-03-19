import '../styles/app.css';
// import { AppWrapper } from '../context/AppContext';
// import {ThemeContext, themes} from '../theme-context';
// import ThemedButton from '../components/themed-button';


function MyApp({ Component, pageProps }) {
    return (
        <div className="bg-red-600 w-full p-10 min-h-screen">
            <div className="max-w-2xl mx-auto">
                {/* <AppWrapper></AppWrapper> */}
                    <Component {...pageProps} />
                {/* </AppWrapper> */}
            </div>
        </div>
    );
}

export default MyApp;
