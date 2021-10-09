import Nav from "react-bootstrap/Nav";

function NavBarInterna (props){
    return (
        <Nav defaultActiveKey="/home" className="flex-column">

            <Nav.Link 
            eventKey="/home"
            href="/home"
            >
            Home
            </Nav.Link>

            <Nav.Link 
            eventKey="">
            Meu perfil
            </Nav.Link>
            
            <Nav.Link 
            eventKey="">
            Meu DashBoard
            </Nav.Link>
        
            <Nav.Link 
            eventKey="/cliente"
            href="/cliente"
            >
            Clientes
            </Nav.Link>

            <Nav.Link 
            eventKey="/iniciarAtendimento"
            href="/iniciarAtendimento"
            >
            Atender
            </Nav.Link>

            <Nav.Link 
            eventKey="">
            Funil de Vendas
            </Nav.Link>

            <Nav.Link 
            eventKey="">
            Jornada do Cliente
            </Nav.Link>

            <Nav.Link 
            eventKey="">
            Financeiro
            </Nav.Link>
        </Nav>
    );
}

export default NavBarInterna