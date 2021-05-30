import Head from "next/head";
import PeopleCarousel from "../components/PeopleCarousel";
import Video from "../components/Video";
import Divider from "antd/lib/divider";
import { people } from "../data";
import Description from "../components/Article";

export default function Home() {
  const dividerStyle = { borderColor: "#505050" };

  return (
    <body>
      <Head>
        <title>Hublive</title>
        <meta
          name="description"
          content="Conheça personalidades famosas, mas anônimas"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          width: "100vw",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Video url="https://www.youtube.com/embed/2uXS20iWve4" />
        <div style={{ width: "75vw" }}>
          <Divider style={dividerStyle} />
        </div>

        <Description />
        <div style={{ width: "75vw" }}>
          <Divider style={dividerStyle} />
        </div>

        <PeopleCarousel people={people} />
        <div style={{ width: "75vw" }}>
          <Divider style={dividerStyle} />
        </div>

        {/* <p>
            Projeto produzido por: <br />
            Edson Gonzalez Júnior João Victor Amorim Mateus Romano Saback Santos
          </p> */}
      </main>
      <footer>
        <p>Romano Studios - 2021</p>
      </footer>
    </body>
  );
}
