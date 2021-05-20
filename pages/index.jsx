import Head from "next/head";
import PeopleCarousel from "../components/PeopleCarousel";
import NavBar from "../components/NavBar";
import { people } from "../data";

import { useEffect, useRef } from "react";

export default function Home() {
  const topRef = useRef();
  const videoRef = useRef();
  const peopleRef = useRef();
  const textRef = useRef();
  const footerRef = useRef();

  useEffect(() => {
    topRef.current.scrollIntoView({
      behavior: "smooth",
      inline: "start",
    });
  });

  const refs = [
    { title: "Vídeo", ref: videoRef },
    { title: "Pessoas", ref: peopleRef },
    { title: "Texto", ref: textRef },
    { title: "Sobre", ref: footerRef },
  ];

  return (
    <body
      style={{
        backgroundColor: "#F1F1F1",
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
        <div ref={topRef}></div>
        <NavBar refs={refs} />
        <div ref={videoRef}>
          <p>video</p>
          <p>video</p>
          <p>video</p>
          <p>video</p>
        </div>
        <div ref={peopleRef}>
          <PeopleCarousel people={people} />
        </div>
        <div ref={textRef}>
          <p>texto</p>
          <p>texto</p>
          <p>texto</p>
          <p>texto</p>
          <p>texto</p>
          <p>texto</p>
          <p>texto</p>
          <p>texto</p>
          <p>texto</p>
          <p>texto</p>
          <p>texto</p>
          <p>texto</p>
          <p>texto</p>
          <p>texto</p>
          <p>texto</p>
          <p>texto</p>
          <p>texto</p>
          <p>texto</p>
          <p>texto</p>
          <p>texto</p>
          <p>texto</p>
          <p>texto</p>
          <p>texto</p>
          <p>texto</p>
          <p>texto</p>
          <p>texto</p>
          <p>texto</p>
          <p>texto</p>
          <p>texto</p>
          <p>texto</p>
          <p>texto</p>
          <p>texto</p>
          <p>texto</p>
          <p>texto</p>
          <p>texto</p>
        </div>
        <div ref={footerRef}>
          <p>footer</p>
        </div>
      </main>
      <footer>
        <p>Romano Studios - 2021</p>
      </footer>
    </body>
  );
}
