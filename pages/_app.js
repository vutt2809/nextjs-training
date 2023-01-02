/* eslint-disable @next/next/no-css-tags */
import Head from 'next/head';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        primary: '#355C7D',
        success: '#f0f0f0',
    },

    sizes: {
        small: '12px',
        medium: '24px',
        large: '36px',
    },
};

export default function App({ Component, pageProps }) {
    return (
        <div className="root-app">
            <Head>
                <title>Create Next App Edit</title>
                <link rel="stylesheet" href="/css/global.css" />
            </Head>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </div>
    );
}
