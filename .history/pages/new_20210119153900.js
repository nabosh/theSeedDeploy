// import Head from 'next/head';
import Head from 'next/'
import CardForm from '../components/SeedCardForm';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next Card</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="max-w-lg mx-auto">
                <h1 className="text-red-100 text-2xl mb-4">New Card</h1>
                <CardForm />
            </main>
        </div>
    );
}
