import styled from "styled-components";

const StyleWrapper = styled.div`
.header-background-1 {
  background-color: #ff003d;
  width: 100%;
  position: fixed;
  z-index: 100;
  top:0;
}
  .close {
    display: flex;
    justify-content: flex-end;
    padding: 20px;
  }
  .promo {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 70px;
    margin-top: 90px;
  }
  .header-text {
    font-size: 58px;
  }
  .margin {
    margin-top: 12%;
    margin-bottom: 12%;
  }

  @media (min-width: 440px) and (max-width: 900px) {
    .padding-right {
      padding-right: 25px;
    }
  }
  @media (max-width: 440px) {
    .header-text {
      font-size: 30px;
    }
    .padding-right {
      padding-right: 15px;
    }
    .margin {
      margin-top: 0%;
      margin-bottom: 0%;
    }
  }
  .user-image {
    object-fit: contain;
    width: 50px;
    border-radius: 50px;
  }
  .cart-item-count {
    position: absolute;
    top: 1px;
    right: 9px;
    color: darkorange;
    font-weight: 1000;
    font-family: monospace;
  }
`;

export default StyleWrapper;
