import {Link} from 'react-router-dom';
import { Nav } from 'react-bootstrap';


function NavBar () {
    return (
        <Nav defaultActiveKey="/home" as="ul">

        <Nav.Item as="li">
          <Link to="/">Login</Link>
        </Nav.Item>

        <Nav.Item as="li">
          <Link 
          to="/sobremap2go"
          
          >Map2Go</Link>
        </Nav.Item>

        <Nav.Item as="li">
          <Link 
          to="/sobretalk2go"
          
          >Talk2Go</Link>
        </Nav.Item>

      </Nav>
    );
}

export default NavBar


