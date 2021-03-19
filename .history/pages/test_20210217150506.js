import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext'
import Head from 'next/head';
import Link from 'next/link';

export default function Test(){
    const { user } = useContext(UserContext);
    console.log("💥💥💥 seedcards → USER::");
    const userEmail = user;
    console.log(userEmail);

    return (
        <Link href="/home">
              <a>the special, members-only space.</a>
            </Link>
        <main>
            <h1>Your Email: {userEmail}</h1>
        </main>
    )

}

