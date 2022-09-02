import Link from "next/link";
// import './style.css'
import { imgBaseURL, subCatPageUrl } from "./constants";
import Header from "./common/Headers/Header1";
import TickerComp from "./Ticker/TickerComp";
function HomePage({ resp, combinedData1, combinedData2 }) {
  return (
    <>
      <div className="common-section">
      <div className="common-partone">
        </div>
        <div className="common-parttwo">
          <div className="common-main-div">
            {" "}
            {resp.map((a, index) => (
              <div
                className={`common-main-${index + 1} d-flex  flex-column`}
                key={a.id}
              >
                <Link href={`/${a["story"]["slug"]}`} prefetch={false}  passHref={true}>
                  <div style={{ cursor: "pointer" }}>
                    <img
                      src={`${imgBaseURL}${a["story"]["hero-image-s3-key"]}`}
                      alt=""
                      // width={150}
                      // height={150}
                    />
                    <Link
                      href={
                        subCatPageUrl[a["story"]["sections"][0]["slug"]].url
                      }
                      prefetch={false}
                      passHref={true}
                    >
                      <div className="Biotif-Book common-category">
                        {a["story"]["sections"][0]["name"].toUpperCase()}
                      </div>
                    </Link>
                    <div className="common-main-1-text InterstateCompressed-Bold">
                      {/* THE COMPLETE GUIDE TO NFTS */}
                      {a["story"]["headline"].toUpperCase()}
                    </div>
                    <div className="common-author Biotif-Book">
                      By {a["story"]["author-name"]}{" "}
                    </div>
                  </div>
                </Link>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
      <TickerComp resp={combinedData1['breaking-news']} />
      <div style={{ height: "500px" }}>
        <h3>HEIGHT</h3>
      </div>
    </>
  );
}
export default HomePage;
