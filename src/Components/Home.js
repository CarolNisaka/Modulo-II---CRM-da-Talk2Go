

import './Home.css';
import { Link,  } from 'react-router-dom';


function Home() {
    return(
        <div>
      
      <div className="container">
        <div className="row">
            <div className="col-9">

                <div className="clientevent">
                    <div className="card" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ47ayerDev610_07WrSdOAbbc_UBaBn6OTA&usqp=CAU" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h1 className="card-title">Joao </h1>
                            <Link to="#" className="btn btn-primary">Ver evento</Link>
                        </div>
                        </div>
                    
                        <div className="card" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIK5C5Y4rk-oVsDtchBPhn_9GxHuMtWhJ32Q&usqp=CAU" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h1 className="card-title">Maria</h1>
                            <Link to="#" className="btn btn-primary">Ver evento</Link>
                        </div>
                        </div>

                        <div className="card" >
                        <img src="https://img.ibxk.com.br/2019/02/17/17124052466014.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h1 className="card-title">Pedro</h1>
                            <Link to="#" className="btn btn-primary">Ver evento</Link>
                        </div>
                        </div>

                        <div className="card" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFt_e13xM_ZU-vB5qDjsgD_q1AkZEpU9m7w&usqp=CAU" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h1 className="card-title">Joana</h1>
                            <Link to="#" className="btn btn-primary">Ver evento</Link>
                        </div>
                        </div>
                </div>
            </div>

            <div className="col-4">
                <ul className="nav flex-column">
                   
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Meu perfil</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="#">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="#">Meu DashBoard</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/iniciarAtendimento">Atender</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/cliente">Cliente</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="#">Funil de vendas</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="#">Jornada do Cliente</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="#">Financeiro</Link>
                    </li>
                   
                </ul>
            </div>

            <div className="col-6">AQUI VAI UM DASHBOARD</div>
        </div>
        </div>

        </div>
    );
}

export default Home