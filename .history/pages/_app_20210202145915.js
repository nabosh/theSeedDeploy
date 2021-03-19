import '../styles/app.css';
import netlifyIdentity from 'netlify-identity-widget';
import netlifyAuth from '../netlifyAuth.js';

// import { AppWrapper } from '../context/AppContext';
// import {ThemeContext, themes} from '../theme-context';
// import ThemedButton from '../components/themed-button';


function MyApp({ Component, pageProps }) {
    let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated);

    useEffect(() => {
      let isCurrent = true;
      netlifyAuth.initialize((user) => {
        if (isCurrent) {
          setLoggedIn(!!user);
        }
      });
  
      return () => {
        isCurrent = false;
      };
    }, []);
  
    let login = () => {
      netlifyAuth.authenticate((user) => {
        setLoggedIn(!!user);
      });
    };

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
