import { useEffect, useState } from 'react'

import Head from 'next/head';
import Card from '../components/SeedCard';
import useSWR from 'swr';
import Link from 'next/link';

import netlifyAuth from '../netlifyAuth.js'

export default function Home() {
    const { data: seedcards, mutate } = useSWR('/api/seedcards');
    return (
        <div>
            <Head>
                <title>Seed Deploy</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="">
                <div className="my-12">
                    <h1 className="text-red-100 text-2xl ">
                        Your Seeds
                    </h1>
                    <p className="text-red-200">
                        Everyday be planting...
                    </p>
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
