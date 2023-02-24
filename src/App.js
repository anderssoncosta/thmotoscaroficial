import './App.css';
import Banner from './Componentes/Banner/Banner';
import Contato from './Componentes/Contato/Contato';
import Menu from './Componentes/Menu/Menu';
import NossoEstoque from './Componentes/NossoEstoque/NossoEstoque';
import RedesSociais from './Componentes/RedesSociais/RedesSociais';
import SobreNos from './Componentes/SobreNos/SobreNos';

function App() {
  return (
    <>
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
