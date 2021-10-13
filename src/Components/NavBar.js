// import {Link} from 'react-router-dom';
import { Nav } from 'react-bootstrap';
// import "./Login.css";

function NavBar () {
    return (
        <Nav defaultActiveKey="/home" as="ul">

        <Nav.Item as="li">
          <Nav.Link href="/">Login</Nav.Link>
        </Nav.Item>

        <Nav.Item as="li">
          <Nav.Link 
          href="/sobremap2go"
          eventKey="/sobremap2go"
          >Map2Go</Nav.Link>
        </Nav.Item>

        <Nav.Item as="li">
          <Nav.Link 
          href="/sobretalk2go"
          eventKey="/sobretalk2go"
          >Talk2Go</Nav.Link>
        </Nav.Item>

      </Nav>
    );
}

export default NavBar


