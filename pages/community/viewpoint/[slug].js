import Head from "next/head";
import { useRouter } from "next/router";

function IndividualStories({ heroData, seoData }) {
  const router = useRouter();

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
      </Head>
      <div className="a4-header-img" style={{ width: imgWidth }}>
        <img src={heroData.img} alt="" height={500} />
      </div>
      <div className="a4-header-con">
        <div className="Biotif-Book a4-header-cat ">{heroData.cat}</div>
        <h1 className="HeldaneDisplay-Regular a4-header-title">
          {heroData.title}
        </h1>
        <div className="Biotif-Book a4-header-auth">By {heroData.auth}</div>
      </div>
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
  const seoData = {
    title: individualStory["story"]["seo"]["meta-title"],
    description: individualStory["story"]["seo"]["meta-description"],
  };
  return {
    props: {
      heroData,
      seoData,
    },
    revalidate: 50,
  };
}
