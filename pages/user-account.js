import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import Head from "next/head";
import Link from "next/link";

export default function Test() {
  const { user } = useContext(UserContext);
  console.log("💥💥💥 seedcards → USER::");
  const userEmail = user;
  console.log(userEmail);

  return (
    <main>
      <Link href="/">Home</Link>
      <br />
      <div className="my-12">
        <Link href="/">Home</Link>
        <p>{usr.email}</p>
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
  );
}
