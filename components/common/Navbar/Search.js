import Image from "next/image";
import {useState} from "react"
import SearchIcon from "../../../public/images/search.svg";
import ModernDrawer from "./ModernDrawer";

function Search() {
  const [searchVisible, setSearchVisible] = useState(false);
  const onShowDrawerSearch = () => {
    setSearchVisible(true);
  };
  const onCloseSearch = () => {
    setSearchVisible(false);
  };
  return (
    <div className="search-div">
      <Image
        onClick={onShowDrawerSearch}
        className="cursor-pointer"
        src={SearchIcon}
        alt="search-icon"
      />
        <div className="search-bar-drawer">
        <ModernDrawer searchVisible={searchVisible} onCloseSearch={onCloseSearch} />
          </div>
    </div>
  );
}
export default Search;
 