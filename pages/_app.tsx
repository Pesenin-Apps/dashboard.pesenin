import '../styles/utilities.css';
import '../styles/sign-in.css';
import '../styles/sidebar.css';
import '../styles/dashboard-content.css';
import '../styles/order.css';
import '../styles/order-detail.css';
import '../styles/history.css';
import '../styles/table.css';
import '../styles/table-detail.css';
import '../styles/menu.css';
import '../styles/menu-create.css';
import '../styles/menu-detail.css';
import '../styles/waiter.css';
import '../styles/waiter-create.css';
import '../styles/waiter-detail.css';
import '../styles/kitchen.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>

        <title>Dashboard Pesenin Apps</title>
        <link rel="icon" href="/assets/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon" />

        {/* SEO Config */}
        <meta name="description" content="Pesenin Apps merupakan aplikasi pemesanan makanan dan minuman secara virtual." />
        <meta property="og:title" content="Dashboard Pesenin Apps" />
        <meta property="og:description" content="Pesenin Apps merupakan aplikasi pemesanan makanan dan minuman secara virtual." />
        <meta property="og:image" content="https://dashboard-pesenin.vercel.app/assets/logonotext.svg" />

        {/* Bootstraps CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossOrigin="anonymous"
        />

        {/* Google Font */}
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
          as="font"
        />

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
          crossOrigin="anonymous"
        />

      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}
export default MyApp;
