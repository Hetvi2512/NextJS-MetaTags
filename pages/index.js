import Head from "next/head";
import Image from "next/image";
import HomePage from "../components/HomePage";
import styles from "../styles/Home.module.css";

export default function Home({stories}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Established: Style, Self, Culture, Community - For the well informed</title>
        <meta name="description" content="The Established is a new digital platform at the forefront of a modern landscape, shaped by a community of conscious, authentic and very well-informed, progressive consumers." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage resp ={stories} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "http://theestablished.quintype.io/api/v1/collections/home"
  );
  const data = await response.json();
  const homeDisplay = [];
  data.items.map((a) => {
    if (a.type === "story") {
      homeDisplay.push(a);
    }
  });
  return {
    props: {
      stories: homeDisplay,
    },
    revalidate: 10,
  };
}
