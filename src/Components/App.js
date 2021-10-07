import { BrowserRouter,Route } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Home from './Home';
import SobreTalk2Go from './SobreTalk2Go';
import NavBar from './NavBar';
import Login from './Login';
import IniciarAtendimento from './Atendimento/IniciarAtendimento';
import Play from './Atendimento/Play';
import NovaViagem from './Atendimento/NovaViagem';
import CriarCliente from './Cliente/CriarCliente';
import DetalhesDoCliente from './Cliente/DetalhesDoCliente';


function App() {
  return (
    <div>
      
      <BrowserRouter>
        <NavBar/>
        
          
        <Route exact path="/" component={Login}/> 
         
        <Route exact path="/sobretalk2go" component={SobreTalk2Go} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/iniciaratendimento" component={IniciarAtendimento} />
        <Route exact path="/play" component={Play} />
        <Route exact path="/novaviagem" component={NovaViagem} />
        <Route exact path="/cliente" component={CriarCliente} />
        <Route exact path="/editarcliente/:id" component={DetalhesDoCliente} />
       
      </BrowserRouter>
    </div>
  );
}

export default App;
