import Link from "next/link";
// import './style.css'
import { imgBaseURL, subCatPageUrl } from "./constants";
import Header from "./common/Headers/Header1";
import TickerComp from "./Ticker/TickerComp";
function HomePage({ resp, combinedData1, combinedData2 }) {
  function imageBounds(imageDimensions =[ 1920, 1200 ], aspectRatio=[ 16, 9 ], focusPoint=[ 0, 0 ]) {
  
    // imageDimensions - Image Width and Height
    // aspectRatio -  Image Aspect Ratio
    // focusPoint - Image Focus Point 
  
    var expectedHeight, expectedWidth, bound;
  
    if (imageDimensions[0] * aspectRatio[1] < imageDimensions[1] * aspectRatio[0]) { 
      // Use the entire width
      expectedHeight = (imageDimensions[0] * aspectRatio[1]) / aspectRatio[0];  // 
      bound          = findBounds(imageDimensions[1], expectedHeight, focusPoint[1]);
      return [0, Math.round(bound), imageDimensions[0], Math.round(expectedHeight)];
    } else {
      // Use the entire height
      expectedWidth = (imageDimensions[1] * aspectRatio[0]) / aspectRatio[1];
      bound         = findBounds(imageDimensions[0], expectedWidth, focusPoint[0]);
      return [Math.round(bound), 0, Math.round(expectedWidth), imageDimensions[1]];
    }
  }
  
  function findBounds(imageWidth, cropWidth, focusPoint) {
    var leftBound = findLeftBound(imageWidth, cropWidth / 2, focusPoint); 0
    if (leftBound + cropWidth > imageWidth) {
      return (imageWidth - cropWidth);
    }
    else {
      return leftBound;
    }
  }
  function findLeftBound(imageWidth, halfCropWidth, focusPoint) {
    if (focusPoint - halfCropWidth < 0) {
      return 0;
    }
    else if (focusPoint + halfCropWidth > imageWidth) {
      return imageWidth - halfCropWidth;
    }
    else {
      return focusPoint - halfCropWidth;
    }
  }
  let rectValue = imageBounds()
  console.log("rectValue",rectValue)
  return (
    <>
      <div className="common-section">
        <div className="common-partone"></div>
        <div className="common-parttwo">
          <div className="common-main-div">
            {" "}
            {resp.map((a, index) => (
              <div
                className={`common-main-${index + 1} d-flex  flex-column`}
                key={a.id}
              >
                <Link
                  href={`/${a["story"]["slug"]}`}
                  prefetch={false}
                  passHref={true}
                >
                  <a>
                    <div style={{ cursor: "pointer" }}>
                      <img
                        src={`${imgBaseURL}${a["story"]["hero-image-s3-key"]}?rect=0,0,1500,1080&format=auto`}
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
                        <a>
                          <div className="Biotif-Book common-category">
                            {a["story"]["sections"][0]["name"].toUpperCase()}
                          </div>
                        </a>
                      </Link>
                      <div className="common-main-1-text InterstateCompressed-Bold">
                        {/* THE COMPLETE GUIDE TO NFTS */}
                        {a["story"]["headline"].toUpperCase()}
                      </div>
                      <div className="common-author Biotif-Book">
                        By {a["story"]["author-name"]}{" "}
                      </div>
                    </div>
                  </a>
                </Link>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
      <TickerComp resp={combinedData1["breaking-news"]} />
      <div style={{ height: "500px" }}>
        <h3>HEIGHT H3</h3>
      </div>
    </>
  );
}
export default HomePage;
