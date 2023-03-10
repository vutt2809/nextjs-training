/* eslint-disable @next/next/no-css-tags */
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import '../components/Navbar/Navbar.scss';
import Auth from '../components/Auth';
import Layout from '../components/Layout';

const theme = {
    colors: {
        primary: '#355C7D',
        success: '#f0f0f0',
        white: '#f5f5f5',
    },

    sizes: {
        small: '12px',
        medium: '24px',
        large: '36px',
    },
};

export default function App({ Component, pageProps }) {
    return (
        <SessionProvider session={pageProps.session}>
            <div className="root-app">
                <Head>
                    <title>Create Next App Edit</title>
                    <link rel="stylesheet" href="/css/global.css" />
                </Head>
                <Layout>
                    <ThemeProvider theme={theme}>
                        {Component.auth ? (
                            <Auth>
                                <Component {...pageProps} />
                            </Auth>
                        ) : (
                            <Component {...pageProps} />
                        )}
                    </ThemeProvider>
                </Layout>
            </div>
        </SessionProvider>
    );
}
