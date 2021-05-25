import Head from "next/head";
import NavBar from "../components/NavBar";
import PeopleCarousel from "../components/PeopleCarousel";
import Video from "../components/Video";
import Divider from "antd/lib/divider";
import { people } from "../data";
import Description from "./description";
import { useEffect, useRef } from "react";

export default function Home() {
  const topRef = useRef();
  const videoRef = useRef();
  const peopleRef = useRef();
  const textRef = useRef();
  const footerRef = useRef();

  const dividerStyle = { borderColor: "#505050", width: 50 };

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
          <Video url="https://www.youtube.com/embed/2uXS20iWve4" />
        </div>
        <Divider style={dividerStyle} />
        <Description ref={textRef} />
        <Divider style={dividerStyle} />
        <div ref={peopleRef}>
          <PeopleCarousel people={people} />
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
