import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { imgBaseURL } from "../../../components/constants";
import EstdFullFormat1Card1 from "../../../components/views/ArticleLayout/EstdFullFormat1Card1";
import EstdFullFormat1card2 from "../../../components/views/ArticleLayout/EstdFullFormat1card2";
import SocialMediaShareButton from "../../../components/views/SocialMediaShareButton";

function IndividualStories({ heroData, seoData , cards}) {
  const router = useRouter();
  const [cardtype, setcardtype] = useState([]);
  const cardType = []
  const [displayFlag, setDisplayFlag] = useState(false);
  var tempCardOneFlag;

  useEffect(() => {
    console.log('inside useeffect', cards)
    window.scroll(0, 0);
    tempCardOneFlag = true
    let tempcont = 0;
    cards?.map((card, index) => {
        let typeNotSelected = true
        if (Object.keys(card.metadata.attributes).length >= 1) {
            if ('alternateheroimage' in card.metadata.attributes) {
                if (card.metadata.attributes.alternateheroimage[0] === 'yes') {
                    console.log('hero image');
                }
            }
            if ('contentimgsidebyside' in card.metadata.attributes) {
                if (card.metadata.attributes.contentimgsidebyside[0] === 'yes') {
                    console.log('side by side')
                    cardType[index] = 'card2';
                }
                else {
                    card['story-elements'].map((element) => {
                        if (tempcont === 0) {
                            tempcont = 1;
                            cardType[index] = 'card1';
                            typeNotSelected = false
                        }
                        else if (element.type === 'image' && element.subtype === null && typeNotSelected) {
                            cardType[index] = 'card2';
                            typeNotSelected = false
                        }
                        else if (element.type === "composite" && element.subtype === 'image-gallery' && typeNotSelected) {
                            cardType[index] = 'card2';
                            typeNotSelected = false
                        }
                        else if (element.type === "text" && element.subtype === 'also-read') {
                            cardType[index] = 'also-read';
                            typeNotSelected = false
                        }
                        else {
                            console.log('inside else')
                            cardType[index] = 'card2';
                        }
                    })
                }
            }
            if ('cardbackgroungcolour' in card.metadata.attributes) {
                if (card.metadata.attributes.cardbackgroungcolour.length >= 1) {
                    console.log('bgcloor', card.metadata.attributes.cardbackgroungcolour[0]);
                    // cardBgColor[index]= card.metadata.attributes.cardbackgroungcolour[0]
                    // setCardBgColor([...cardBgColor])
                }
            }
        } else {
            console.log('story ele', card['story-elements'], card);
            card['story-elements'].map((element) => {
                console.log('flag value', typeNotSelected)
                if (tempcont === 0) {
                    tempcont = 1;
                    cardType[index] = 'card1';
                    typeNotSelected = false
                }
                else if (element.type === 'image' && element.subtype === null && typeNotSelected) {
                    cardType[index] = 'card2';
                    typeNotSelected = false
                }
                else if (element.type === "composite" && element.subtype === 'image-gallery' && typeNotSelected) {
                    cardType[index] = 'card2';
                    typeNotSelected = false
                }
                else if (element.type === "text" && element.subtype === 'also-read') {
                    cardType[index] = 'also-read';
                    typeNotSelected = false
                }
                else if (typeNotSelected) {
                    console.log('inside else')
                    cardType[index] = 'card2';
                }
            })
        }
    })
    console.log('cardtype', cardType);
    setcardtype(cardType);
    setDisplayFlag(true);
}, []);
  var imgWidth = "30%";
  if (router.isFallback) {
    return <h1>Data is loading</h1>;
  }
  return (
    <>
      {" "}
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta property="og:image" content={heroData.img} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* <meta property="twitter:url" content={window.location.href} /> */}
        <meta property="twitter:title" content={seoData.title} />
        <meta property="twitter:description" content={seoData.description} />
        <meta property="twitter:image" content={heroData.img} />
        <meta property="twitter:image:type" content="image/jpeg" />
        <meta property="twitter:image:width" content="400" />
        <meta property="twitter:image:height" content="300" />
      </Head>
      <div className="a4-header">
        <div className="a4-header-img" style={{ width: imgWidth }}>
          <div
            className="a4-header-img-div"
            style={{ position: "relative", width: "100%", height: "60vw" }}
          >
            <Image src={heroData.img} layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className="a4-header-con">
          <div className="Biotif-Book a4-header-cat ">{heroData.cat}</div>
          <h1 className="HeldaneDisplay-Regular a4-header-title">
            {heroData.title}
          </h1>
          <div className="Biotif-Book a4-header-auth">By {heroData.auth}</div>

          <SocialMediaShareButton
            title={heroData?.title}
            description={seoData?.description}
          />
        </div>
      </div>
      <div className='a4-header-img-title' dangerouslySetInnerHTML={{ __html: heroData.imgTitle }}></div>
        {
            displayFlag && cardtype.map((card, index) => (
                card === 'card1' ? <EstdFullFormat1Card1 cards={cards[index]} /> : card === 'card2' ? <EstdFullFormat1card2 cards={cards[index]} /> : ""
            ))
        }
    </>
  );
}

export default IndividualStories;
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slug: "chef-alex-sanchez-i-am-fascinated-that-food-can-be-infinitely-complex-within-its-simplicity",
        },
      },
    ],

    fallback: true,
  };
}
export async function getStaticProps(context) {
  console.log("GENERATING/ REGENERATING PAGES ======================");

  const { params } = context;
  const response = await fetch(
    `http://theestablished.quintype.io/api/v1/stories-by-slug?slug=${params.slug}`
  );
  const individualStory = await response.json();
  const cards = individualStory['story']['cards']
  console.log("individualStory", cards)
  const heroData = {
    img:
      "https://gumlet.assettype.com/" +
      individualStory["story"]["hero-image-s3-key"],
    imgMeta: individualStory["story"]["hero-image-metadata"],
    imgTitle: individualStory["story"]["hero-image-caption"],
    cat: individualStory["story"]["sections"][0]["name"].toUpperCase(),
    title: individualStory["story"]["headline"],
    auth: individualStory["story"]["author-name"],
    imgCap: individualStory["story"]["hero-image-attribution"],
  };
  if ("home" in individualStory["story"]["alternative"]) {
    if ("default" in individualStory["story"]["alternative"]["home"]) {
      console.log(
        "alernative",
        individualStory["story"]["alternative"]["home"]
      );
      if (
        "hero-image" in
        individualStory["story"]["alternative"]["home"]["default"]
      ) {
        if (
          individualStory["story"]["alternative"]["home"]["default"][
            "hero-image"
          ] != null
        ) {
          if (
            "hero-image-s3-key" in
            individualStory["story"]["alternative"]["home"]["default"][
              "hero-image"
            ]
          ) {
            console.log(
              "image changed",
              individualStory["story"]["alternative"]["home"]["default"][
                "hero-image"
              ]["hero-image-s3-key"]
            );
            heroData.img =
              imgBaseURL +
              individualStory["story"]["alternative"]["home"]["default"][
                "hero-image"
              ]["hero-image-s3-key"];
            heroData.imgMeta =
              individualStory["story"]["alternative"]["home"]["default"][
                "hero-image"
              ]["hero-image-metadata"];
          }
        }
      }
    }
  }
  var isImgLandscape = false;
  var imgWidth = "50%";
  if (heroData.imgMeta.width > heroData.imgMeta.height) {
    isImgLandscape = true;
    imgWidth = "60%";
  }
  const metaDataStory = {
    title: heroData.title,
    description: heroData.title,
    keywords: "The Established",
  };
  if ("seo" in individualStory["story"]) {
    console.log("in seo");
    if ("meta-title" in individualStory["story"]["seo"]) {
      if (individualStory["story"]["seo"]["meta-title"].length > 1) {
        metaDataStory.title = individualStory["story"]["seo"]["meta-title"];
        console.log("in seo meta");
      } else {
        metaDataStory.title = heroData.title;
      }
    }
    if ("meta-description" in individualStory["story"]["seo"]) {
      if (individualStory["story"]["seo"]["meta-description"].length > 1) {
        metaDataStory.description =
          individualStory["story"]["seo"]["meta-description"];
      } else {
        metaDataStory.title = heroData.title;
        console.log("else in seo meta");
      }
    }
    if ("meta-keywords" in individualStory["story"]["seo"]) {
      if (individualStory["story"]["seo"]["meta-keywords"].length > 1) {
        metaDataStory.keywords =
          individualStory["story"]["seo"]["meta-keywords"].toString();
      }
    }
  } else {
    metaDataStory.title = heroData.title;
    metaDataStory.description = heroData.title;
  }
  return {
    props: {
      heroData,
      seoData: metaDataStory,
      cards
    },
    revalidate: 50,
  };
}
