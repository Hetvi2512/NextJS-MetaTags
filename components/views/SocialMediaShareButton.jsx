import React, { useEffect, useState } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import Twitter from "../../public/images/twlogopink.svg";
import Instagram from "../../public/images/lilogopink.svg";
import Facebook from "../../public/images/fblogopink.svg";
import Image from "next/image";

function SocialMediaShareButton({ title, description }) {
  const [windowLocation, setWindowLocation] = useState();
  useEffect(() => {
    console.log("LOCATION", window?.location?.href);
    setWindowLocation(window?.location?.href);
  }, []);
  return (
    <div className="d-flex eff1-social mtp-3 mbp-3">
      <FacebookShareButton
        className="cursor-pointer"
        url={windowLocation}
        quote={title}
      >
        <div className="eff1-social-images cursor-pointer">
          <Image
            src={Facebook}
            alt="Facebook"
          />
        </div>
      </FacebookShareButton>

      <LinkedinShareButton
        className="cursor-pointer"
        title={title}
        url={windowLocation}
        description={description}
        source={windowLocation}
      >
        <div className="eff1-social-images cursor-pointer">
          <Image src={Instagram} alt="Instagram" />
        </div>
      </LinkedinShareButton>
      <TwitterShareButton
        className="cursor-pointer"
        title={title}
        url={windowLocation}
      >
        <div className="eff1-social-images cursor-pointer">
          <Image
            src={Twitter}
            alt="Twitter"
          />
        </div>
      </TwitterShareButton>
    </div>
  );
}

export default SocialMediaShareButton;
