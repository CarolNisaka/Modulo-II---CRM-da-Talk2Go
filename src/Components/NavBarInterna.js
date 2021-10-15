import Nav from "react-bootstrap/Nav";
import "./NavBarInterna.css";
import { Link } from "react-router-dom";
import {AiFillHome} from "react-icons/ai";
import {BsPersonCircle} from "react-icons/bs"
import {RiDashboardFill} from "react-icons/ri"
import {IoIosPeople} from "react-icons/io"
import {FaPeopleArrows} from "react-icons/fa"
import {FaFunnelDollar} from "react-icons/fa"
import {GiJourney} from "react-icons/gi"
import {MdOutlineAttachMoney} from "react-icons/md"



function NavBarInterna (props){
    return (
        <Nav defaultActiveKey="/home" className="flex-column">

            <Link 
            
            to="/home"
            >
             <AiFillHome size="40px"/>
            </Link>

           
            
            <Link 
            >
            <RiDashboardFill size="40px"/>
            </Link>
        
            <Link 
            className="cliente"
            to="/cliente"
            >
            <IoIosPeople size="40px"/>
            </Link>

            <Link 
            className="atender"
            to="/iniciarAtendimento"
            >
            <FaPeopleArrows size="40px" />
            </Link>

            <Link 
            >
            <FaFunnelDollar size="40px"/>
            </Link>

            <Link 
            >
            <GiJourney size="40px"/>
            </Link>

            <Link 
            >
            <MdOutlineAttachMoney size="40px"/>
            </Link>

            <Link 
            >
            <BsPersonCircle size="40px"/>
            </Link>
        </Nav>
    );
}

export default NavBarInterna