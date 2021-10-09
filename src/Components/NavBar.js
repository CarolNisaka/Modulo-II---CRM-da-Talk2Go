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


{/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
    <Link className="navbar-brand" to="/">Login</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
        {/* <Link className="nav-link active"  to="/">Home</Link> */}
//         <Link className="nav-link" to="/sobretalk2go">Sobre Talk2Go</Link>
//         <Link className="nav-link" to="/sobremap2go">Sobre Map2Go</Link>
        
//     </div>
//     </div>
// </div>
// </nav> */}