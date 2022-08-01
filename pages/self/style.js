import styled from 'styled-components';

const SectionWrapper = styled.div`
.main-cat-div{
    margin-top:10%;
}
.common-title{
    font-size: 300px;
    color: #ff003d;
    font-family: 'InterstateCompressed-Bold';
    letter-spacing: 46.5px;
    text-align:center;
    text-indent:46.5px;
}
.common-community-title{
    font-size: 300px;
    color: #ff003d;
    font-family: 'InterstateCompressed-Bold';
    letter-spacing: 26.5px;
    text-align:center;
    text-indent:26.5px;
}

.common-self-title{
    font-size: 300px;
    color: #ff003d;
    letter-spacing: 46.5px;
    text-align: center;
    text-indent: 46.5px;
    font-family: 'InterstateCompressed-Bold';
}

.grid-view{
    display:grid;
    grid-template-columns:1fr 1fr;
    background:#fff;
    grid-column-gap:100px;
}
.sub-category-1{
    color: #ff003d;
    font-size:16px;
    line-height:1;
    padding-top:15px;
}
.question-category-1{
    font-size:40px;
    padding-top:15px;
    line-height:1.06;
}
.author-1{
    font-size:18px;
    color:#ff003d;
    line-height:1;
    padding-top:15px;
}

.sub-category{
    color: #ff003d;
    font-size:15px;
    line-height:1;
    padding-top:15px;
}
.question-category{
    font-size:30px;
    padding-top:15px;
    line-height:1.06;
}
.author{
    font-size:16px;
    color:#ff003d;
    line-height:1;
    padding-top:15px;
}
.pink-border {
    border-bottom: 2px solid #ff003d;
    margin-bottom: 5%;
    margin-left: 6%;
    margin-right: 6%;
  }
  .grid-new-1{
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    background:#fff;
    grid-column-gap:30px;
}
.read-more-btn {
    font-size: 16px;
    background: #ff003d;
    color: #fff;
    padding: 10px 20px 10px 20px;
    border: 1px solid #ff003d;
  }
  

@media(min-width:320px) and (max-width:480px){
    .grid-new-1{
        margin-left: 5% !important;
        margin-right: 5% !important;
      }
      .grid-view{
        margin-left: 5% !important;
        margin-right: 5% !important;
      }
    .main-cat-div{
        margin-top:15%;
    }
    .read-more-btn {
      font-size: 10px;
      padding: 7px 12px;
    }


.grid-view{
    display:grid;
    grid-template-columns:auto;
    background:#fff;
}
.grid-new-1{
    display:grid;
    grid-template-columns:auto;
    background:#fff;
}
    .common-title{
        font-size:50px;
        letter-spacing: 26.5px;
        text-indent:26.5px;
    }
    .common-community-title{
        font-size:50px;
        letter-spacing: 10px;
        text-indent:10px;
    }
    .common-self-title{
        font-size: 50px;
        letter-spacing: 46.5px;
        text-align: center;
        text-indent: 46.5px;
    }
    .sub-category{
        font-size:13px;
        padding-top:10px;
    }
    .question-category{
        font-size:18px;
        line-height:1.3;
        padding-top:10px;
    }
    .author{
        font-size:13px;
        padding-top:10px;
        margin-bottom:10%
    }
    .sub-category-1{
        font-size:10px;
        padding-top:10px;
    }
    .question-category-1{
        font-size:15px;
        padding-top:7px;
    }
    .author-1{
        font-size:10px;
        padding-top:7px;
        margin-bottom:10%
    }
}
@media(min-width:481px) and (max-width:768px){
    .grid-view{
        display:grid;
        grid-template-columns:auto;
        background:#fff;
    }
    .grid-new-1{
        display:grid;
        grid-template-columns:auto;
        background:#fff;
    }
    .common-title{
        font-size:80px;
        letter-spacing: 26.5px;
        text-indent:26.5px;
    }
    .common-community-title{
        font-size:80px;
        letter-spacing: 26.5px;
        text-indent:26.5px;
    }
    .common-self-title{
        font-size: 80px;
        letter-spacing: 46.5px;
        text-indent: 46.5px;
    }
    .sub-category{
        padding-top:10px;
        font-size:12px;
    }
    .question-category{
        padding-top:7px;
        font-size:20px;
    }
    .author{
        padding-top:7px;
        font-size:12px;
        margin-bottom:10%;
    }
    .sub-category-1{
        font-size:12px;
        padding-top:10px;
    }
    .question-category-1{
        font-size:20px;
        padding-top:7px;
    }
    .author-1{
        font-size:12px;
        padding-top:7px;
        margin-bottom:10%
    }
    .read-more-btn {
      font-size: 10px;
      padding: 7px 12px;
    }
}
@media(min-width:769px) and (max-width:1024px){
    .grid-view{
        display:grid;
        grid-template-columns:1fr 1fr;
        background:#fff;
    }
    .grid-new-1{
        display:grid;
        grid-template-columns:1fr 1fr 1fr;
        background:#fff;
    }
    .common-title{
        font-size:100px;
        letter-spacing: 26.5px;
        text-indent:26.5px;
    }
    .common-community-title{
        font-size:100px;
        letter-spacing: 26.5px;
        text-indent:26.5px;
    }
    .common-self-title{
        font-size: 100px;
    }
    .sub-category{
        padding-top:10px;
        font-size:10px;
    }
    .question-category{
        padding-top:7px;
        font-size:16px;
    }
    .author{
        padding-top:7px;
        font-size:10px;
        margin-bottom:10%;
    }
    .sub-category-1{
        font-size:12px;
        padding-top:10px;
    }
    .question-category-1{
        font-size:18px;
        padding-top:7px;
    }
    .author-1{
        font-size:12px;
        padding-top:7px;
        margin-bottom:10%
    }
    .read-more-btn {
      font-size: 10px;
      padding: 7px 12px;
    }
}

@media(min-width:1025px) and (max-width:1200px){
    .common-title{
        font-size:200px;
        letter-spacing:46.5px;
        text-indent:46.5px;
    }
    .common-community-title{
        font-size:200px;
        letter-spacing: 26.5px;
        text-indent:26.5px;
    }
    .sub-category{
        font-size:12px;
        padding-top:15px;
    }
    .question-category{
        font-size:20px;
        padding-top:15px;
    }
    .author{
        font-size:14px;
        padding-top:15px;
    }
    .sub-category-1{
        font-size:15px;
        padding-top:15px;
    }
    .question-category-1{
        font-size:25px;
        padding-top:15px;
    }
    .author-1{
        font-size:16px;
        padding-top:15px;
    }
    .read-more-btn {
      font-size: 12px;
      padding: 7px 12px;
    }
}

@media(min-width:1201px) and (max-width:1440px){
    .common-title{
        font-size:200px;
        letter-spacing:46.5px;
        text-indent:46.5px;
    }
    .common-community-title{
        font-size:200px;
        letter-spacing: 26.5px;
        text-indent:26.5px;
    }
    .sub-category{
        font-size:12px;
        padding-top:15px;
    }
    .question-category{
        font-size:20px;
        padding-top:15px;
    }
    .author{
        font-size:14px;
        padding-top:15px;
    }
    .sub-category-1{
        font-size:12px;
        padding-top:15px;
    }
    .question-category-1{
        font-size:20px;
        padding-top:15px;
    }
    .author-1{
        font-size:14px;
        padding-top:15px;
    }
    .read-more-btn {
      font-size: 15px;
      padding: 7px 12px;
    }
}
@media(min-width:1441px) and (max-width:1700px){
    .sub-category{
        font-size:12px;
        padding-top:15px;
    }
    .question-category{
        font-size:20px;
        padding-top:15px;
    }
    .author{
        font-size:14px;
        padding-top:15px;
    }
    .sub-category-1{
        font-size:14px;
        padding-top:15px;
    }
    .question-category-1{
        font-size:25px;
        padding-top:15px;
    }
    .author-1{
        font-size:16px;
        padding-top:15px;
    }
    .read-more-btn {
      font-size: 15px;
      padding: 7px 12px;
    }
}

`;

export default SectionWrapper;
