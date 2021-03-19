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
    class App extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            theme: themes.light,
          };
      
          this.toggleTheme = () => {
            this.setState(state => ({
              theme:
                state.theme === themes.dark
                  ? themes.light
                  : themes.dark,
            }));
          };
        }
    }

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



// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       theme: themes.light,
//     };

//     this.toggleTheme = () => {
//       this.setState(state => ({
//         theme:
//           state.theme === themes.dark
//             ? themes.light
//             : themes.dark,
//       }));
//     };
//   }

//   render() {
//     // The ThemedButton button inside the ThemeProvider
//     // uses the theme from state while the one outside uses
//     // the default dark theme
//     return (
//       <Page>
//         <ThemeContext.Provider value={this.state.theme}>
//           <Toolbar changeTheme={this.toggleTheme} />
//         </ThemeContext.Provider>
//         <Section>
//           <ThemedButton />
//         </Section>
//       </Page>
//     );
//   }
// }
