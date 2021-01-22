import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Head from 'next/head';
import Card from '../components/SeedCard';
import useSWR from 'swr';
import Link from 'next/link';

// import netlifyAuth from './netlifyAuth.js'
import netlifyAuth from '../netlifyAuth'
import netlifyIdentity from 'netlify-identity-widget'

export default function Home() {
    let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated)

    const userId = netlifyIdentity.currentUser().id;
    const userName = netlifyIdentity.currentUser().username;
    console.log({userId});
    console.log({userName});

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
  
    const classes={
        wrapper: 'border-2 m-16 p-16'
    }

    return (
      <div className="container">
        <Head>
          <title>[20210122.12:17:56]</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main>
          <h1>Welcome to Seed Deploy</h1>
          <p className="description">
            We are in a public space, for the people who aren't able to access the super fancy
            members-only area. You hear snobbish laughter in the distance.
          </p>
          {loggedIn ? (
            <div>
              You're logged in! Please do visit{' '}
              <Link href="/home">
                <a>the special, members-only space.</a>
              </Link>
              <p>Your user id is: {userId}</p>
              <p>Your user name is: {userName}</p>
              <button onClick={login}>Log in here to access the members-only area.</button>
            </div>
            
          ) : (
            <button onClick={login}>Log in here to access the members-only area.</button>
          )}
        </main>

        <Footer />

       <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
            background-color: yellow;
        }

        button {
            background-color: blue;
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
      </div>
    )

}

  