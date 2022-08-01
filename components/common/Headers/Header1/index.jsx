import NavBar1 from "../../Navbar/Navbar1";
import StyleWrapper from "./style";

function Header() {
  return (
    <StyleWrapper>
      <div style={{ position: "relative" }}>
        <div className="ptbp-1 header-background-1">
          <div>
            <div>
              <NavBar1 />
            </div>
          </div>
        </div>
      </div>
    </StyleWrapper>
  );
}
export default Header;
