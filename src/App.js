import Banner from './Componentes/Banner/Banner';
import Contato from './Componentes/Contato/Contato';
import Menu from './Componentes/Menu/Menu';
import NossoEstoque from './Componentes/NossoEstoque/NossoEstoque';
import RedesSociais from './Componentes/RedesSociais/RedesSociais';
import SobreNos from './Componentes/SobreNos/SobreNos';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
  font-family: 'Inter', sem serifa;
  margin: 0;
  background-color: #000;
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

}
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <Menu/>
      <Banner/>
      <SobreNos/>
      <NossoEstoque/>
      <Contato/>
      <RedesSociais/>
    
    </>
  );
}

export default App;
