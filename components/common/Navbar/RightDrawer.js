import React, { useState } from "react";
import Image from "next/image";
// import Image from 'next/future/image'
import { Drawer } from "antd";
import NavDrawer from "../../../public/images/bar11.png";
import HamShow from "./HamShow";
import HamFooter from "./HamFooter";

function RightDrawer(props) {
  const [visible, setVisible] = useState(false);
  const [category, setCategory] = useState();
  const displayCategory = (data) => {
    setCategory(data);
  };
  const displayHideCategory = () => {
    // setTimeout(() => {
    //   setCategory("");
    // }, 10000);
  };
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
    console.log("clicked");
    // setCategory("");
  };
  return (
    <div>
      <Image
        onClick={showDrawer}
        className="drawer-icon-view cursor-pointer"
        src={NavDrawer}
        alt="drawer-icon"
      />
      <div className="right-side-drawer"> 
      <Drawer
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
      >
        <HamShow
          displayCategory={displayCategory}
          category={category}
          displayHideCategory={displayHideCategory}
          onClose={onClose}
        />
        <HamFooter />
      </Drawer>
      </div>
    </div>
  );
}

export default RightDrawer;
