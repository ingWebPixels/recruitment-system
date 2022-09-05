import type { NextPage } from "next";
import Head from "next/head";
import Header from "@components/Header";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Sistema de contrataciones PIXELS</title>
      <meta name="description" content="Sistema de contrataciones PIXELS" />
    </Head>
    <div className="flex flex-col min-h-screen w-full items-center bg-gray-100">
      <Header />
      <div className="flex flex-col justify-center flex-1 items-center bg-gray-100">
        <h1 className="text-2xl font-bold">Sistema de contrataciones PIXELS</h1>
      </div>
    </div>
  </>
);

export default Home;
