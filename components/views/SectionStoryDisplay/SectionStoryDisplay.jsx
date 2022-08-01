import React from "react";
import Link from "next/link";
import Image from "next/future/image";
function SectionStoryDisplay({ stories, category }) {
  return (
    <div className="grid-view mlp-15 mrp-15 mbp-5">
      {stories.slice(0,2).map((story, index) => (
        <div className="cursor-pointer" key={index}>
          <Link href={`/${story["slug"]}`}>
            <Image
              src={`https://gumlet.assettype.com/${story["hero-image-s3-key"]}`}
              width ={600}
              height={600}
            />
          </Link>
          <Link href={`/${story["slug"]}`}>
            <div className="sub-category Biotif-Book">
              {story["sections"][0]["display-name"].toUpperCase()}
            </div>
          </Link>
          <Link href={`/${story["slug"]}`}>
            <div className="question-category Biotif-SemiBold">
              {story["headline"]}
            </div>
          </Link>
          <Link href={`/${story["slug"]}`}>
            <div className="author Biotif-Book">By {story["author-name"]}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default SectionStoryDisplay;
