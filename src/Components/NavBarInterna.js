import Nav from "react-bootstrap/Nav";
import "./NavBarInterna.css";
import { Link } from "react-router-dom";


function NavBarInterna (props){
    return (
        <Nav defaultActiveKey="/home" className="flex-column">

            <Link 
            
            to="/home"
            >
            Home
            </Link>

            <Link 
            >
            Meu perfil
            </Link>
            
            <Link 
            >
            Meu DashBoard
            </Link>
        
            <Link 
            
            to="/cliente"
            >
            Clientes
            </Link>

            <Link 
            // eventKey="/iniciarAtendimento"
            to="/iniciarAtendimento"
            >
            Atender
            </Link>

            <Link 
            >
            Funil de Vendas
            </Link>

            <Link 
            >
            Jornada do Cliente
            </Link>

            <Link 
            >
            Financeiro
            </Link>
        </Nav>
    );
}

export default NavBarInterna