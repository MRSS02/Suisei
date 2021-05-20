import Head from "next/head";
import Carousel from "../components/Carousel";
import { people } from "../data";

import { useRef } from "react";

export default function Home() {
  const peopleRef = useRef();

  return (
    <body
      style={{
        width: "100vw",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Head>
        <title>Hublive</title>
        <meta
          name="description"
          content="Conheça personalidades famosas, mas anônimas"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div ref={peopleRef}></div>
        <Carousel people={people} />
      </main>
      <footer>
        <p>Romano Studios - 2021</p>
      </footer>
    </body>
  );
}
