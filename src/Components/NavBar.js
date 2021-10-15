import {Link} from 'react-router-dom';
import logoMap from '../logoMap.jpeg';


function NavBar () {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logoMap} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
          </Link>

          <div class="container-md">
            <Link class="navbar-brand" to="/sobremap2go">Map2go</Link>
            <Link class="navbar-brand" to="/sobretalk2go">Talk2Go</Link>
          </div>
        </div>
      </nav>
    );
}

export default NavBar


