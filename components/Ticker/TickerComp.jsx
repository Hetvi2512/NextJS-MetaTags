import React from "react";
import Marquee from "react-fast-marquee";

function TickerComp({resp}) {
    
  return (
    <div
      style={{
        backgroundColor: "#FA062E",
        color: "white",
        display: "flex",
        width: "100%",
        alignItems: "center",
      }}
      className="ticker-main-main"
    >
      <Marquee
        gradient={false}
        className="marque"
        pauseOnHover={true}
        speed={25}
      >
        {resp.map((a, index) => {
          return (
            <div key={index} className="ticker-main InterstateCompressed-Bold">
              <div className="marque-heading InterstateCompressed-Bold">
                TRENDING
              </div>
              <div
                className="ticker-content cursor-pointer Heldane-Text-Regular"
                onClick={() => {
                  handleIndividualStory(a);
                }}
              >
                {a.story.headline}
              </div>
              <div className="read-more">
                <div
                  className="Biotif-Regular cursor-pointer"
                  onClick={() => {
                    handleIndividualStory(a);
                  }}
                >
                  READ MORE →{" "}
                </div>
              </div>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}

export default TickerComp;
