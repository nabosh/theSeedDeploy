import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext'
import Head from 'next/head';
import Link from 'next/link';

export default function Test(){
    const { user } = useContext(UserContext);
    console.log("💥💥💥 seedcards → USER::");
    const userEmail = user;

    return (
        <main>
            <h1>{userEmail}</h1>
        </main>
    )

}

