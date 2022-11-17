import { ApolloProvider } from '@apollo/client';
import useApolloClient from 'hooks/useApolloClient';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/globals.css';

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  const { client } = useApolloClient();
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <>
          <Head>
            <title>{`${
              pageProps.name ?? ''
            } | Sistema de reclutamiento`}</title>
          </Head>
          <Component {...pageProps} />
        </>
        <ToastContainer />
      </ApolloProvider>
    </SessionProvider>
  );
};

export default MyApp;
