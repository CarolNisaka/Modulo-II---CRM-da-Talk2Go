import { BrowserRouter,Route } from 'react-router-dom';
import { Switch } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Home from './Home';
import SobreMap2Go from './SobreMap2Go';
import SobreTalk2Go from './SobreTalk2Go';
import NavBar from './NavBar';
import Login from './Login';
import IniciarAtendimento from './Atendimento/IniciarAtendimento';
import Play from './Atendimento/Play';
import NovaViagem from './Atendimento/NovaViagem';
import CriarCliente from './Cliente/CriarCliente';
import DetalhesDoCliente from './Cliente/DetalhesDoCliente';
import EditarCliente from './Cliente/EditarCliente';
import DeletarCliente from './Cliente/DeletarCliente';


function App() {
  return (
    <div>
      
      <BrowserRouter>
        <NavBar/>
        
          
          <Route exact path="/" component={Login}/> 
          
          <Route exact path="/sobretalk2go" component={SobreTalk2Go} />
          <Route exact path="/sobremap2go" component={SobreMap2Go} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/iniciaratendimento" component={IniciarAtendimento} />
          <Route exact path="/play" component={Play} />
          <Route exact path="/novaviagem" component={NovaViagem} />

          <Switch>
            <Route exact path="/cliente" component={CriarCliente} />
            <Route exact path="/cliente/editarcliente/:id" component={EditarCliente} />
            <Route exact path="/cliente/deletarcliente/:id" component={DeletarCliente} />
            <Route exact path="/cliente/detalhedocliente/:id" component={DetalhesDoCliente} />
            
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
