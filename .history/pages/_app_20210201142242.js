import '../styles/app.css';
import {ThemeContext, themes} from '../theme-context';
import ThemedButton from '../components/themed-button';

function Toolbar(props) {
    return (
        <ThemedButton onClick={props.changeTheme}>
            Change Theme
        </ThemedButton>
    )
}


function MyApp({ Component, pageProps }) {
    return (
        <>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <div className="bg-red-600 w-full p-10 min-h-screen">
            <div className="max-w-2xl mx-auto">
                <Component {...pageProps} />
            </div>
        </div>
        </>
    );
}

export default MyApp;
