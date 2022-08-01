import React from "react";
import Image from "next/future/image";
import Logo1 from "../../../public/images/LOGO.svg";
import Logo2 from "../../../public/images/LOGO2.svg";
import BottomMenu from "./BottomMenu";

function Title({ scrollValue }) {
  return (
    <>
      {scrollValue === true ? (
        <div style={{ width: "50%" }}>
          <Image
            id="new-image"
            className="cursor-pointer"
            onClick={() => window.scroll(0, 0)}
            style={{ width: "100%" }}
            src={Logo2}
            alt="the-established"
          />
        </div>
      ) : (
        <div style={{ backgroundColor: "#ff003d" }}>
          <div className="d-flex justify-content pbp-2">
            <Image
              id="new-image"
              className="theestdfulllogo"
              src={Logo1}
              alt="the-established"
            />
          </div>
          <div
            className={`leftMenu`}
            // className="leftMenu"
            style={{ width: "100%" }}
          >
            <BottomMenu />
          </div>
        </div>
      )}
    </>
  );
}

export default Title;
