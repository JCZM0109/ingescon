import Head from "next/head";
import { MainPage } from "@/components/MainPage";

import { Suspense } from "react";

import NoSSR from "react-no-ssr";
import { Footer } from "@/components/Layout/Footer";
import { BotonFlotante } from "@/components/Layout/BotonFlotante";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
    return ( 
       <Suspense>
          <Head>
            <title>INGES</title>
            <meta
              name="description"
              content="Experience the difference exceptional dental care can make. Our compassionate team is dedicated to helping you achieve optimal oral health. Schedule a consultation now!"
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* <link rel="icon" href="/assets/favicon.ico" /> */}
            <link href="https://cdn.jsdelivr.net/npm/i18next-http-backend@1.3.1/i18nextHttpBackend.min.js"></link>
          </Head>
          <main>
            <NoSSR>
              <MainPage />
              <BotonFlotante />
              <Footer />
              <ToastContainer />
            </NoSSR>
          </main>
        </Suspense>
    );
};

export const getServerSideProps = async() => {
    return {
        props: {}, // Deshabilitar SSR para esta página
    };
};

export default Home;