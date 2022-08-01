import useSWR from "swr";
import Image from "next/image";
import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import styles from "./ModernDrawer.module.css";
import SearchIcon from "../../../public/images/Search-test.png";
function ModernDrawer({ searchVisible, onCloseSearch }) {
  const [inputValue, setInputValue] = useState("");

  const trendFetcher = async () => {
    const response = await fetch(`/api/v1/collection/breaking-news`);
    const data = await response.json();
    return data;
  };
  const { data : trendResponse } = useSWR(
    "TrendData",
    trendFetcher
  );
  console.log("trendResponse",trendResponse?.items)
  const fetcher = async () => {
    console.log("CalIING API .......")
    const response = await fetch(`/api/v1/search/${inputValue}`);
    const data = await response.json();
    return data;
  };
  const { data: searchResponse, error } = useSWR(inputValue.length > 0 ? inputValue : null, fetcher );
  console.log("data", searchResponse);
  return (
    <>
      <Drawer
        className="modern-drawer"
        style={{ background: "black" }}
        direction="top"
        open={searchVisible}
        onClose={onCloseSearch}
      >
        <div className="input-field-view plp-5 d-flex">
          <div className={styles.insideSearchTag}>
            <Image src={SearchIcon} alt="search" width={20} height={20} />
          </div>
          <div className="form__group-1 d-flex">
            <input
              style={{ borderBottom: "1px solid white" }}
              autoComplete="off"
              //  onKeyPress={(e) => handleEnter(e)}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="input"
              className="form__field-1 plp-1 Biotif-Regular"
              placeholder="Search"
              name="search"
              id="search"
            />
          </div>
        </div>
        <div className="plp-2 ptp-2 fs-30">
                {inputValue !== ""
                  ? searchResponse?.results?.stories.slice(0, 5).map((item,index) => (
                      <div
                          key={index}
                        // onClick={() => {
                        //   handleIndividualStory(item);
                        // }}
                        className="text-white search-result-div plp-5 prp-5 cursor-pointer Biotif-SemiBold pbp-1"
                      >
                        {item.headline}
                      </div>
                    ))
                  : trendResponse?.items?.slice(0, 5).map((item,index) => (
                      <div
                        key={index}
                        // onClick={() => {
                        //   handleTrendingStory(item);
                        // }}
                        className="text-white search-result-div plp-5 cursor-pointer Biotif-SemiBold pbp-1"
                      >
                        {item.story.headline}
                      </div>
                    ))}
              </div>
      </Drawer>
    </>
  );
}

export default ModernDrawer;
