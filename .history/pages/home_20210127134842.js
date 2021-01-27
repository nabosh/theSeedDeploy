import { useState, useEffect } from 'react';
import Head from 'next/head';
import Card from '../components/SeedCard';
import useSWR from 'swr';
import Link from 'next/link';

import netlifyAuth from '../netlifyAuth';
import netlifyIdentity from 'netlify-identity-widget';

export default function Home() {
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

  const { data: seedcards, mutate } = useSWR('/api/seedcards');
  return (
    <div>
      <Head>
        <title>Seed Deploy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="my-12">
          <Link href="/">Home</Link>
          {/* <h2>Your email is: <b>{userInfo.email}</b> </h2>
                    <h2>Your id is: <b>{userInfo.id}</b> </h2> */}
          <h1 className="text-red-100 text-2xl ">
            Your Seeds
            {/* Your Seeds ⚡️{user.email}⚡️ */}
          </h1>
          <p className="text-red-200">Everyday be planting...</p>
          <Link href="/new">
            <a className="mt-3 inline-block bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Create a Seed Packet...
            </a>
          </Link>
        </div>
        {seedcards &&
          seedcards.map((seedcard) => (
            <Card
              key={seedcard.id}
              seedcard={seedcard}
              seedcardDeleted={mutate}
            />
          ))}
      </main>
    </div>
  );
}

module.exports