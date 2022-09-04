import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Sistema de contrataciones PIXELS</title>
      <meta name="description" content="Sistema de contrataciones PIXELS" />
    </Head>
    <div className="flex flex-col min-h-screen w-full justify-center items-center bg-gray-100">
      <h1 className="text-2xl font-bold">Sistema de contrataciones PIXELS</h1>
    </div>
  </>
);

export default Home;
