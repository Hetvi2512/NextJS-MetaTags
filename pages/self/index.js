import Head from "next/head";
import React, {useState} from "react";
import { Tabs } from "antd";
import self from "../../public/images/title_svg_self.svg";
import SectionWrapper from "./style";
import Image from "next/future/image";
import SectionStoryDisplay from "../../components/views/SectionStoryDisplay/SectionStoryDisplay";
import Header from "../../components/common/Headers/Header1";
function Self({ storyData, storyMetaData }) {
  const { TabPane } = Tabs;
  const [defaultActiveKey, setDefaultActiveKey] = useState("0")
  return (
    <SectionWrapper>
      <Head>
        <title>
          Latest on Beauty & Grooming Tips | Your Health & Wellness Guide
        </title>
        <meta
          name="description"
          content="Stay in to know the latest beauty, grooming, health and wellness news. Subscribe to The Established newsletter delivered to your inbox every day."
        />
      </Head>
      {/* <Header /> */}
      <div className="main-cat-div">
        <div className="">
          <Tabs
            className="Biotif-Bold"
            activeKey={defaultActiveKey}
            onChange={(key)=> setDefaultActiveKey(key)}
          >
            <div style={{ display: "none" }}>
              <TabPane className="d-none" tab="FASHION" key="0"></TabPane>
            </div>
            <TabPane tab="BEAUTY & GROOMING" key="1"></TabPane>
            <TabPane tab="HEALTH & WELLNESS" key="2"></TabPane>
          </Tabs>
        </div>
        <div className="style-heading InterstateCompressed-Bold mtp-5">
          <Image
            src={self}
            alt="self logo"
            className="cursor-pointer"
            priority={true}
            onClick={() => setDefaultActiveKey("0")}
          />
        </div>
        <SectionStoryDisplay stories={storyData} category="self" />
        {storyMetaData.from + storyMetaData.size < storyMetaData.total ? (
          <div className="d-flex justify-content Biotif-Regular mtp-5 mbp-8 section-read-more">
            <button
              className="read-more-btn"
              onClick={() => {
                getMoreStories();
              }}
            >
              SHOW MORE →
            </button>
          </div>
        ) : (
          <div className="mbp-10"></div>
        )}
      </div>
    </SectionWrapper>
  );
}

export default Self;

export async function getStaticProps(context) {
  console.log("GENERATING/ REGENERATING PAGES For SELF======================");
  const { params } = context;
  const response = await fetch(
    `http://theestablished.quintype.io/api/v1/search?section-id=38237&offset=0&limit=17&sort=latest-published`
  );
  const data = await response.json();
  const storyData = data?.results?.stories;
  const storyMetaData = data?.results?.total;
  return {
    props: {
      storyData,
      storyMetaData,
    },
    revalidate: 50,
  };
}
