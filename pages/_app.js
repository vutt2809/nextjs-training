/* eslint-disable @next/next/no-css-tags */
import Head from 'next/head';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
    return (
        <div className="root-app">
            <Head>
                <title>Create Next App Edit</title>
                <link rel="stylesheet" href="/css/global.css" />
            </Head>
            <Component {...pageProps} />
        </div>
    );
}
