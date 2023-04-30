import '@/styles/globals.css'
import { Provider } from "react-redux";
import Head from 'next/head';
import { store } from '@/features/store';

export default function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Head>
        <title>PassMeCash | Authentication</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
