import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext'
import Head from 'next/head';
import Cards from '../components/SeedCard';
import useSWR from 'swr';
import Link from 'next/link';
import netlifyIdentity from 'netlify-identity-widget';

export default function Home() {
  const usr = netlifyIdentity.currentUser();
  
  const { user, setUser } = useContext(UserContext);
  setUser(usr.email);
  
  console.log('⬇⬇user');
  console.log(usr.email);
  const contextUser = useContext(UserContext);
  console.log(JSON.stringify(contextUser, null, 2));

  console.log('⚡️ user: ');
  console.log(user);
  // alert({userr});
  

  
  // const { data: ref, mutate } = useSWR('/api/seedcards');
  // const { data: ref, mutate } = useSWR('/api/seedcards', {userEmail: 'nabosh@gmail.com'});
  const { data: ref, mutate } = useSWR(['/api/seedcards', user], (url, user) => query(url, { user }));

  // const { data: ref, mutate } = useSWR('/api/seedcards/${user}');



  return (
    <div>
      <Head>
        <title>Seed Deploy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="my-12">
          <Link href="/">Home</Link><p>{usr.email}</p>
          <Link href="/test">test</Link>

          <h1 className="text-red-100 text-2xl ">
            {/* Your Seeds {JSON.stringify(user, null, 2)} */}
            Your Seeds {user}
          </h1>
            {/* Your Seeds ⚡️{user.email}⚡️ */}
          <p className="text-red-200">Everyday be planting...</p>
          <Link href="/new">
            <a className="mt-3 inline-block bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Create a Seed Packet...
            </a>
          </Link>
        </div>
        {ref &&
          ref.map((scRef) => (
            <Cards
              key={scRef.id}
              seedcardd={scRef} // seedcardd var is linked with /components/SeedCard.js
              seedcardDeleted={mutate}
            />
          ))}
      </main>
    </div>
  );
}
