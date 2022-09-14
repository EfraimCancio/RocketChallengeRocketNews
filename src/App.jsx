import Logo from '../src/components/Logo/Logo';
import Advertising from '../src/components/Advertising/Advertising'
import Form from '../src/components/Form/Form';
import PreviewLink from './components/PreviewLink/PreviewLink';

import BackGroundImg from '../src/assets/images/background-image-t.png';
import './App.css';

function App() {
 

  return (
    <div className="App">
      <div className="app-container">
        <div className="content-container">
          <Logo />
          <Advertising/>
          <Form/>
          <PreviewLink/>
        </div>
        <div className="image-container">
          <img src={BackGroundImg} alt="Imagem de Fundo"/>
        </div>
      </div>
    </div>
  )
}

export default App
