import { BrowserRouter,Route } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Home from './Home';
import SobreTalk2Go from './SobreTalk2Go';
import NavBar from './NavBar';
import Login from './Login';
import IniciarAtendimento from './IniciarAtendimento';
import Play from './Play';
import NovaViagem from './NovaViagem';
import CriarCliente from './CriarCliente';
import EditarCliente from './EditarCliente';


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
        <Route exact path="/editarcliente" component={EditarCliente} />
       
      </BrowserRouter>
    </div>
  );
}

export default App;
