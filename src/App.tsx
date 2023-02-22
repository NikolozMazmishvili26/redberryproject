import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Landing from "./pages/Landing Page/Landing";
import Create from "./pages/Create Laptop Page/Create";

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

  /* global classess */

  :root{
    /* color variables */
    --btn-color :#62A1EB;
    --input-bg-color : #EBEBEB;
    --border-color : #8AC0E2;
    --btn-hover-color : #1A5DAB;
    --counter-title-color : #232323;
    --counter-color : #898989;
    --arrow-bg-color:#D9D9D9;
    --container-bg:#FFFFFF;
    --label-color : #000000;
    --placeholder-color : rgba(0, 0, 0, 0.6);
    --error-color : #E52F2F;
    --hover-color:#E7F0F8;
    --blue-color: #4386A9;
    --error-bg-color : #FFEDED;

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
