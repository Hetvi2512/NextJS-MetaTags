import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/common/Headers/Header1";
import HomePage from "../components/HomePage";

export default function Home({ stories, combinedData1, combinedData2 }) {
  console.log("combinedData1", combinedData1);
  return (
    <div>
      <Head>
        <title>
          The Established: Style, Self, Culture, Community - For the well
          informed
        </title>
        <meta
          name="description"
          content="The Established is a new digital platform at the forefront of a modern landscape, shaped by a community of conscious, authentic and very well-informed, progressive consumers."
        />
        <meta name="image" content="../estd.png" />
        <meta property="image:type" content="image/png" />
        <meta property="image:width" content="400" />
        <meta property="image:height" content="300" />
        
        <meta property="og:image" content="../estd.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />

        <meta property="twitter:image" content="../estd.png" />
        <meta property="twitter:image:type" content="image/png" />
        <meta property="twitter:image:width" content="400" />
        <meta property="twitter:image:height" content="300" />
        <link rel="icon" href="/estd-favicon.png" />
      </Head>
      <Header />
      <HomePage
        resp={stories}
        combinedData1={combinedData1}
        combinedData2={combinedData2}
      />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "http://theestablished.quintype.io/api/v1/collections/home"
  );
  const data = await response.json();
  const homeDisplay = [];
  const displaySeq = {};
  data.items.map((a) => {
    if (a.type === "story") {
      homeDisplay.push(a);
    } else if (a.type === "collection") {
      displaySeq[a.name.toLowerCase()] = a.slug;
    }
  });
  const tempObj1 = {};
  const tempObj2 = {};
  Object.values(displaySeq).map((a) => {
    if (a === "style" || a === "breaking-news") {
      tempObj1[a] = {
        _type: "collection",
        slug: a,
        "item-type": "stories",
      };
    } else {
      tempObj2[a] = {
        _type: "collection",
        slug: a,
        "item-type": "stories",
      };
    }
  });
  const bodyAPIBulk1 = {
    requests: tempObj1,
  };
  const bodyAPIBulk2 = {
    requests: tempObj2,
  };
  const combinedState1 = { style: [], "breaking-news": [] };
  const combinedState2 = {
    self: [],
    culture: [],
    community: [],
    spotlight: [],
  };
  const getCombinedData1 = async () => {
    const response = await fetch(
      "https://theestablished.quintype.io/api/v1/bulk-request",
      {
        method: "POST",
        body: JSON.stringify(bodyAPIBulk1),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    Object.entries(data?.results).map((col) => {
      combinedState1[col[0]] = col[1].items;
    });
    return combinedState1;
  };

  const combinedData1 = await getCombinedData1();

  const getCombinedData2 = async () => {
    const response = await fetch(
      "https://theestablished.quintype.io/api/v1/bulk-request",
      {
        method: "POST",
        body: JSON.stringify(bodyAPIBulk2),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    Object.entries(data?.results).map((col) => {
      combinedState2[col[0]] = col[1].items;
    });
    return combinedState2;
  };
  const combinedData2 = await getCombinedData2();
  console.log("combinedData1", combinedData1);
  console.log("combinedData2", combinedData2);

  return {
    props: {
      stories: homeDisplay,
      combinedData1: JSON.parse(JSON.stringify(combinedData1)),
      combinedData2: JSON.parse(JSON.stringify(combinedData2)),
    },
    revalidate: 50,
  };
}
