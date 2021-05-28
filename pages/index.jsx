import Head from "next/head";
import NavBar from "../components/NavBar";
import PeopleCarousel from "../components/PeopleCarousel";
import Video from "../components/Video";
import Divider from "antd/lib/divider";
import { people } from "../data";
import Description from "../components/Article";
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
        <div className="topSection" ref={videoRef}>
          <Video url="https://www.youtube.com/embed/2uXS20iWve4" />
        </div>
        <Divider style={dividerStyle} />
        <div className="description" ref={textRef}>
          <p>
          Com o advento da internet, cada vez mais celebridades e famosos
          passaram a se expressar em meio virtual. No entanto, não apenas personidades
          já existentes passaram a se popularizar mais no campo virtual, mas também novas
          personalidades surgiram. <br />
          Assim, em meio a esse cenário da <i>internet</i>, diferentes dinâmicas de interação
          social passaram a se fazer presentes. Num cenário virtual, apesar de ser possível
          transmissão da imagem de uma pessoa por meio de uso de câmeras, tal recurso não é
          necessário para que haja trova de informações, criação de conteúdo, e engajamento.
          <br /> Com o passar do tempo, para certos públicos, esse recurso tornara-se não apenas
          desnecessário, mas também desinteressasnte. Assim, cada vez mais, surgiram personalidades
          no qual a sua identidade pessoal não fora revelada, permanecendo assim no anonimato, mas
          ainda assim ganhando fama; ou ainda, personalidades que por vezes até tiveram sua identidade
          revelada, mas a figura pública que eles representam é desconexa dessa identidade,
          por vezes, assim, estando conectada à figura de um avatar virtual que representa
          aquele indivíduo. Inclusive, em gêneros de conteúdo como os chamados <i>v-tubers</i>,
          ou youtubers virtuais, são utilizados programas de reconhecimento de movimento
          para que o movimento corporal e facial dos <i>influencers</i> em questão seja reproduzido
          no avatar; assim, trazendo expressão facial para aquela personalidade sem que seu rosto
          real seja utilizado.
          </p>
        </div>
        <Divider style={dividerStyle} />
        <div ref={peopleRef}>
          <PeopleCarousel people={people} />
        </div>

        <div ref={footerRef} className="credits">
          <p>Projeto produzido por: <br />
          Edson Gonzalez Júnior
          João Victor Amorim
          Mateus Romano Saback Santos
          </p>
        </div>
      </main>
      <footer>
        <p>Romano Studios - 2021</p>
      </footer>
    </body>
  );
}
