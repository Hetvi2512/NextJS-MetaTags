import React from "react";
import HamCommunity from "./HamCommunity";
import HamCulture from "./HamCulture";
import HamSelf from "./HamSelf";
import HamStyle from "./HamStyle";
function HamShow({displayCategory, category, displayHideCategory,onClose }) {
  return (
    <div>
      <div className="ham-main">
        <div className="ham-1">
          <div
            className="text-shadow InterstateCompressed-Bold"
            style={{ width: "6ch" }}
            onClick={() => {
              props.history.push("/style");
              onClose();
            }}
            onMouseEnter={() => {
              displayCategory("style");
            }}
            onMouseLeave={displayHideCategory}
          >
            STYLE
          </div>
          <div
            className="text-shadow InterstateCompressed-Bold"
            style={{ width: "5ch" }}
            onClick={() => props.history.push("/self")}
            onMouseOver={() => {
              displayCategory("self");
            }}
            onMouseLeave={displayHideCategory}
          >
            SELF
          </div>
          <div
            className="text-shadow InterstateCompressed-Bold"
            style={{ width: "8ch" }}
            onClick={() => props.history.push("/culture")}
            onMouseOver={() => {
              displayCategory("culture");
            }}
            onMouseLeave={displayHideCategory}
          >
            CULTURE
          </div>
          <div
            className="text-shadow InterstateCompressed-Bold"
            style={{ width: "11ch" }}
            onClick={() => props.history.push("/community")}
            onMouseOver={() => {
              displayCategory("community");
            }}
            onMouseLeave={displayHideCategory}
          >
            COMMUNITY
          </div>
        </div>
        {
          category === 'style' ? <HamStyle /> : category === 'self' ? <HamSelf /> : category === 'culture' ? <HamCulture /> : category === 'community' ? <HamCommunity /> : ''
        }
      </div>
    </div>
  );
}

export default HamShow;
