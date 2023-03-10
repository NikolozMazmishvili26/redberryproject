import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Landing from "./pages/Landing Page/Landing";
import Create from "./pages/Create Laptop Page/Create";
import Success from "./pages/Success Page/Success";
import List from "./pages/Recorded List Page/List";
import Unique from "./pages/Unique Page/Unique";

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Helvetica Neue';
    src: url('../HelveticaNeue.ttc') format('truetype');
    }

    * {
      margin:0px;
      padding: 0px;
      box-sizing: border-box;
    }

    body{
      background: #F7F7F7 !important;
    }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Helvetica Neue';
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* reset input type radio default styles */

  input[type=radio] {
    border: 2px solid #4d9ac3;
    height: 20px;
    width: 20px;
  }

  input[type=radio] {
    -webkit-appearance: none;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
  }

  input[type=radio]:checked {
  background-color: #4d9ac3;
}


  /* global css variables */

  :root{
    /* btn color variables */
    --btn-color :#62A1EB;
    --btn-hover-color : #1A5DAB;

    /* input colors */
    --input-bg-color : #EBEBEB;
    --border-color : #8AC0E2;
    --label-color : #000000;
    --placeholder-color : rgba(0, 0, 0, 0.6);

    /* counter title colors */
    --counter-title-color : #232323;
    --counter-color : #898989;
    --container-bg:#FFFFFF;

    /* general colors */
    --arrow-bg-color:#D9D9D9;
    --error-color : #E52F2F;
    --hover-color:#E7F0F8;
    --blue-color: #4386A9;
    --error-bg-color : #FFEDED;

    /* card colors */
    --card-bg-color :#EAFAFF;
    --card-text-color: #2E2E2E;

    /* radious variables */
    --border-radius : 8px;
    --large-border-radius:18px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/create" element={<Create />} />
          <Route path="/success" element={<Success />}></Route>
          <Route path="/list" element={<List />}></Route>
          <Route path="/list/laptop/:laptopId" element={<Unique />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
