import styled from "styled-components";

const StyleWrapper = styled.div`

.nav-1-main-div{
  padding-left:10px;
  padding-right:10px;
  background-color: rgb(255, 0, 61);
}
.search-div{
  border: none;
  width:20px;
}

.search-div > img{
  width:100%;
}
.drawer-icon-view-div{
  width:20px;
}
.drawer-icon-view-div > img{
  width:100%;
}

.ant-drawer-content {
  position: relative;
  z-index: 1;
  overflow: auto;
  background-color: #ff003d !important;
  background-clip: padding-box;
  border: 0;
}
/* .search-div {
  .ant-drawer-content{
    position: relative;
    z-index: 1;
    overflow: auto;
    background-color: #fff !important;
    background-clip: padding-box;
    border: 0;
  }
} */
.search-bar-drawer{
  border : none !important;
}
.text-underline {
  text-decoration: underline !important;
}
  .border-black {
    border: 2px solid black;
  }
  .footer-text {
    font-size: 15px;
  }
  .email-text {
    font-size: 30px;
  }
  .input-text {
    font-size: 28px;
  }
  .icon-height {
    height: 40px;
  }
  .the-established{
    font-weight: 700;
    color: #e63554;
  }
  .sub-established{
    display:flex;
    font-size:22px;
  }
  .style-margin{
    margin-left:0%
  }

  @media (min-width: 970px) and (max-width: 1900px) {
    .footer-pad {
      padding-top: 45px;
    }
  }
  @media (min-width: 970px) and (max-width: 1900px) {
    .footer-pad-new {
      padding-top: 45px;
    }
  }
  @media (min-width: 970px) and (max-width: 1235px) {
    .footer-text {
      font-size: 19px;
    }
  }
  @media (max-width: 970px) {
    .padding-bottom {
      padding-bottom: 15px;
    }
    .footer-text {
      font-size: 17px;
    }
    .email-text {
      font-size: 20px;
    }
  }
  @media (max-width: 992px) {
    .footer {
      margin-top: 2%;
      margin-bottom: 2%;
    }

    .texts {
      text-align: center !important;
    }
  }
  @media (max-width: 745px) {
    .text-list {
      flex-direction: column;
      text-align: center;
    }
    .remove-padding {
      padding-right: 0px !important;
    }
  }


  @media(min-width:320px) and (max-width:375px){
    .the-established{
      font-weight: 700;
      color: #ff003d;
      text-align:center
    }
    .sub-established{
      display:flex;
      justify-content:center;
      font-size:12px;
    }
  }
  @media(min-width:375px) and (max-width: 500px) {
    .the-established{
      font-weight: 700;
      color: #ff003d;
      text-align:center;

    }
    .sub-established{
      display:flex;
      justify-content:center;
      font-size:14px;
    }
  }
  @media(min-width:500px) and (max-width: 768px) {
    .the-established{
      font-weight: 700;
      color: #ff003d;
      text-align:center;
    }
    .sub-established{
      display:flex;
      justify-content:center;
      font-size:19px;
    }
  }

  @media(min-width:768px) and (max-width:970px){
    .the-established{
      font-weight: 700;
      color: #ff003d;
      text-align:center
    }
    .sub-established{
      display:flex;
      justify-content:center;
      font-size:30px;
    }
  }
  @media(min-width:1024px) and (max-width:1200px){
    .the-established{
      font-weight: 700;
      color: #ff003d;
    }
    .sub-established{
      display:flex;
      font-size:19px;
    }
  }
  @media(min-width:1200px) and (max-width:1400px){
    .the-established{
      font-weight: 700;
      color: #ff003d;
    }
    .sub-established{
      display:flex;
      font-size:23px;
    }
  }
  @media(min-width:1400px) and (max-width: 1500px){
    .the-established{
      font-weight: 700;
      color: #ff003d;
    }
    .sub-established{
      display:flex;
      font-size:28px;
    }
  }
  .modern-drawer {
    position: absolute !important;
    top: 120px !important;
    height: 430px !important;
    overflow: hidden;
  }
  .search-result-div:hover {
    color: #ff003d !important;
  }
  @media (min-width: 250px) and (max-width: 480px) {
    .modern-drawer {
      top: 100% !important;
      height: 250px !important;
    }
    .form__group-1 {
      width: 95%;
    }
    .form__field-1 {
      font-size: 16px;
    }
    .search-result-div {
      font-size: 15px;
    }
    .theestdfulllogo {
      position: relative !important;
      min-height: 0% !important;
      width: 75% ! important;
      height: 25px !important;
  }
  }
  @media (min-width: 481px) and (max-width: 768px) {
    .modern-drawer {
      top: 40px !important;
      height: 225px !important;
    }
    .form__group-1 {
      width: 95%;
    }
    .form__field-1 {
      font-size: 0.9rem;
    }
    .search-result-div {
      font-size: 0.9rem;
    }
    .theestdfulllogo {
      position: relative !important;
      min-height: 0% !important;
      width: 50% ! important;
      height: 25px !important;
  }
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    .modern-drawer {
      top: 50px !important;
      height: 240px !important;
    }
    .form__group-1 {
      width: 95%;
    }
    .form__field-1 {
      font-size: 1rem;
    }
    .search-result-div {
      font-size: 1rem;
    }
    .theestdfulllogo {
      position: relative !important;
      min-height: 0% !important;
      width: 50% ! important;
      height: 26px !important;
  }
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
    .modern-drawer {
      top: 60px !important;
      height: 280px !important;
    }
    .form__group-1 {
      width: 95%;
    }
    .form__field-1 {
      font-size: 1.15rem;
    }
    .search-result-div {
      font-size: 1.15rem;
    }
    .theestdfulllogo {
      position: relative !important;

      min-height: 0% !important;
      width: 50% ! important;
      height: 36px !important;
  }
  }
  @media (min-width: 1201px) and (max-width: 1440px) {
    .modern-drawer {
      top: 70px !important;
      height: 330px !important;
    }
    .form__group-1 {
      width: 95%;
    }
    .form__field-1 {
      font-size: 1.3rem;
    }
    .search-result-div {
      font-size: 1.3rem;
    }
    .theestdfulllogo {
      position: relative !important;
      min-height: 0% !important;
      width: 50% !important;
      height: 44px !important;
  }
  }
  @media (min-width: 1441px) and (max-width: 3000px) {
    .modern-drawer {
      position: absolute !important;
      top: 90px !important;
      height: 350px !important;
      overflow: hidden;
    }
    .form__group-1 {
      width: 95%;
    }
    .form__field-1 {
      font-size: 1.3rem;
    }
    .search-result-div {
      font-size: 1.3rem;
    }
    .theestdfulllogo {
      position: relative !important;
      min-height: 0% !important;
      width: 50% ! important;
      height: 60px !important;
  }
  }


`;

export default StyleWrapper;
