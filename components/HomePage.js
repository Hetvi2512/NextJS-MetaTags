import Link from "next/link";
// import './style.css'
import { imgBaseURL, subCatPageUrl } from "./constants";
function HomePage({ resp }) {
  return (
    <>
      {resp.map((a, index) => (
        <div className={`common-main-${index + 1} d-flex  flex-column`} key={a.id}>
          <Link
          href={`/${a["story"]["slug"]}`}
            
          >
            <div style={{ cursor: "pointer" }}>
              <img
                src={`${imgBaseURL}${a["story"]["hero-image-s3-key"]}`}
                alt=""
                width={150}
                height={150}
              />
              <Link
              href={ subCatPageUrl[a["story"]["sections"][0]["slug"]].url}
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
          <hr/>
        </div>
       
      ))}
    </>
  );
}
export default HomePage;
