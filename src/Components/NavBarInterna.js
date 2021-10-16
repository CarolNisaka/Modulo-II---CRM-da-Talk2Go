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
import {MdOutlineLocalLibrary} from "react-icons/md"



function NavBarInterna (props){
    return (
        <Nav defaultActiveKey="/home" className="flex-column">

            <Link 
            to="/home"
            >
             <AiFillHome size="35px"/>
            </Link>

           <br/>
            
            <Link 
            >
            <RiDashboardFill size="35px"/>
            </Link>

            <br/>
        
            <Link 
            className="cliente"
            to="/cliente"
            >
            <IoIosPeople size="35px"/>
            </Link>

            <br/>

            <Link 
            className="atender"
            to="/iniciarAtendimento"
            >
            <FaPeopleArrows size="35px" />
            </Link>

            <br/>

            <Link 
            >
            <FaFunnelDollar size="35px"/>
            </Link>

            <br/>

            <Link 
            >
            <GiJourney size="35px"/>
            </Link>

            <br/>

            <Link 
            >
            <MdOutlineAttachMoney size="35px"/>
            </Link>

            <br/>

            <Link 
            >
            <MdOutlineLocalLibrary size="35px"/>
            </Link>

            <br/>

            <Link 
            >
            <BsPersonCircle size="35px"/>
            </Link>
        </Nav>
    );
}

export default NavBarInterna