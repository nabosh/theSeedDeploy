import { useEffect, useState, useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import netlifyIdentity from 'netlify-identity-widget';
import netlifyAuth from '../netlifyAuth.js';
import { UserContext } from '../context/UserContext';

export default function Home() {
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
  console.log();

  // const usr = netlifyIdentity.currentUser();
  
  // const { user, setUser } = useContext(UserContext);
  // setUser(usr.email);


  // let { user, setUser } = useContext(UserContext);
  // console.log("⬇user⬇");
  // console.log(user);
  // const usr = netlifyIdentity.currentUser();
  // setUser(usr.email);
  // console.log(usr.email);
  // console.log('⬇index⬇user');
  // console.log(usr);

  // setUser(user.email);


  return (

    <div className="container">
      <Head>
        <title>Members Only</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 text={'Welcome to the Public Space™'} />
        <p className="description">
          We are in a public space, for the people who aren't able to access the
          super fancy members-only area. You hear snobbish laughter in the
          distance.
        </p>
        {loggedIn ? (
          <div>
        <Link href="/test">
              <a>💥 CHeck IT💥</a>
        </Link>
            ⚡️⚡️ You're logged in!  ⚡️⚡️ Please do visit{' '}
            <Link href="/home">
              <a>the special, members-only space.</a>
            </Link>
          </div>
        ) : (
          {/* <button onClick={login}> */}
          {/* <button onClick={async () => {
            const user = await login();
            setUser(user);
          }}> */}
            Log in here to access the members-only area.
          </button>
        )}
      </main>

      {/* <Footer /> */}

      {/* if (window.netlifyIdentity) {
          window.netlifyIdentity.on("init", user => {
            if (!user) {
              window.netlifyIdentity.on("login", () => {
                document.location.href = "/admin/";
              });
            }
          })
        } */}

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-family: Menlo, Monaco, Lucida Console, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>

  );
}
