import Head from 'next/head';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next App</title>
        <meta name="description" content="next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default Home;
