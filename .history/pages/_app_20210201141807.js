import '../styles/app.css';
import {ThemeContext, themes} from '../theme-context';
import ThemedButton from '../components/themed-button';

function Toolbar(props) {
    return (
        <ThemedButton onClick={props.changeTheme}
    )
}

function MyApp({ Component, pageProps }) {
    return (
        <div className="bg-red-600 w-full p-10 min-h-screen">
            <div className="max-w-2xl mx-auto">
                <Component {...pageProps} />
            </div>
        </div>
    );
}

export default MyApp;
