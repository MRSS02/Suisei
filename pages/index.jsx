import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hublive</title>
        <meta
          name="description"
          content="Conheça personalidades famosas, mas anônimas"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Image
          width="200"
          height="267"
          src="https://upload.wikimedia.org/wikipedia/en/a/a9/Hoshimachi_Suisei.png"
        ></Image>
      </main>
      <footer>
        <p>Romano Studios - 2021</p>
      </footer>
    </div>
  );
}
