import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext'
import Head from 'next/head';
import Cards from '../components/SeedCard';
import useSWR from 'swr';
import Link from 'next/link';
import netlifyAuth from '../netlifyAuth';
import netlifyIdentity from 'netlify-identity-widget';
// import netlifyAuth from '../netlifyAuth';
// import netlifyIdentity from 'netlify-identity-widget';


// const User = () => {
//     let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated);
//     let [user, setUser] = useState(null);
  
//     useEffect(() => {
//       let isCurrent = true;
//       netlifyAuth.initialize((user) => {
//         if (isCurrent) {
//           setLoggedIn(!!user);
//           setUser(user);
//         }
//       });
  
//       return () => {
//         isCurrent = false;
//       };
//     }, []);

//     return (
//         user
//     )
// }

export default function Home() {
  const { user, setUser } = useContext(UserContext);
  const usr = netlifyIdentity.currentUser();
  setUser(usr.email);
  console.log('⬇⬇user');
  console.log(usr.email);
  const { contextUser } = 
  console.log(UserContext.user);
  // alert({userr});
  const { data: ref, mutate } = useSWR('/api/seedcards');
  return (
    <div>
      <Head>
        <title>Seed Deploy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="my-12">
          <Link href="/">Home</Link><p>{usr.email}</p>

          <h1 className="text-red-100 text-2xl ">
            Your Seeds {JSON.stringify(user, null, 2)}
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
