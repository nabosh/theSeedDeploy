import Head from 'next/head';
import { getSeedCardById } from '../../utils/Fauna';
import SeedCardForm from '../../components/SeedCardForm';

export default function Home({ seedcard }) {
    return (
        <div>
            <Head>
                <title>Update Next SeedCard {auth.cu</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="max-w-lg mx-auto">
                <h1 className="text-red-100 text-2xl mb-4">Update SeedCard</h1>
                <SeedCardForm seedcard={seedcard} />
            </main>
        </div>
    );
}

export async function getServerSideProps(context) {
    try {
        const id = context.params.id;
        const seedcard = await getSeedCardById(id);
        return {
            props: { seedcard },
        };
    } catch (error) {
        console.error(error);
        context.res.statusCode = 302;
        context.res.setHeader('Location', `/home`);
        return { props: {} };
    }
}
