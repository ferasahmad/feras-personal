import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'MajorMonoDisplay';
    src: url('../fonts/MajorMonoDisplay.ttf') format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('../fonts/Roboto.ttf') format('truetype');
    font-weight: 400;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend, hr,
  table, caption, tbody, tfoot, thead, tr, th, td,
  input,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video
  button {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
    transition: 0.3s;
  }

  body {
    font-family: 'SF Pro Display';
    box-sizing: border-box;
    height: 100%;
    padding: 0;
    margin: 0;
  }

  #__next {
    height: 100%;
  }

  html {
    height: 100%;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
