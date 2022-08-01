import React, { useEffect, useState } from "react";
import StyleWrapper from "./style";
import Search from "../Search";
import Title from "../Title";
import RightDrawer from "../RightDrawer";
function NavBar1(props) {
  const [scrollValue, setScrollValue] = useState(false);

  
  useEffect(() => {
    console.log("Scrolling .....");
    function scrollFunction() {
      console.log("IN");
      if (document.getElementById("new-image")) {
        if (
          document.body.scrollTop === 0 ||
          document.documentElement.scrollTop === 0
        ) {
          document.getElementById("new-image").style.width = "40%";
          console.log("IN 40");
        }
        if (
          (document.body.scrollTop < 50 ||
            document.documentElement.scrollTop < 50) &&
          (document.body.scrollTop > 25 ||
            document.documentElement.scrollTop > 25)
        ) {
          document.getElementById("new-image").style.width = "20%";
          console.log("IN 50");
        }
        if (
          document.body.scrollTop > 100 ||
          document.documentElement.scrollTop > 100
        ) {
          setScrollValue(true);
          console.log("IN 100");
  
          document.getElementById("new-image").style.width = "100%";
        } else {
          console.log("IN else");
  
          setScrollValue(false);
          // document.getElementById("new-image").style.width = "40%";
        }
      }
    }
    window.addEventListener("scroll", scrollFunction);
    return () => window.removeEventListener("scroll", scrollFunction);
  });
  return (
    <StyleWrapper>
      {/* main div */}
      <div className="d-flex justify-content-between nav-1-main-div">
        {/* left search icon */}
        <Search />

        {/* middle part */}

        <div
          className={
            scrollValue === true ? `d-flex justify-content-center` : "menuCon"
          }
        >
          <Title scrollValue={scrollValue} />
        </div>

        {/* Right Part */}
        <div className="drawer-icon-view-div">
          <RightDrawer />
        </div>
      </div>
    </StyleWrapper>
  );
}

export default NavBar1;
