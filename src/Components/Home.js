

import './Home.css';
import { Link,  } from 'react-router-dom';
import NavBarInterna from './NavBarInterna';



function Home() {
    return(

            <div className="principal">

                <div>
                    <NavBarInterna/>
                </div>

            <div className="container">
            <div className="row">
                <div className="col-9">
                {/* //fazer um MAP aqui com eventos do cliente */}
                    <div className="clientevent">
                        <div className="card" >
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ47ayerDev610_07WrSdOAbbc_UBaBn6OTA&usqp=CAU" 
                                className="card-img-top" 
                                alt="..."
                                style={{maxHeight:"130px"}}
                            />
                            <div className="card-body">
                                <h1 className="card-title">Joao </h1>
                                <Link to="#" className="btn btn-primary">Ver evento</Link>
                            </div>
                        </div>
                        
                        <div className="card" >
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIK5C5Y4rk-oVsDtchBPhn_9GxHuMtWhJ32Q&usqp=CAU"
                                className="card-img-top" 
                                alt="..."
                                style={{maxHeight:"130px"}}
                            />
                            <div className="card-body">
                                <h1 className="card-title">Maria</h1>
                                <Link to="#" className="btn btn-primary">Ver evento</Link>
                            </div>
                        </div>

                        <div className="card" >
                            <img src="https://img.ibxk.com.br/2019/02/17/17124052466014.jpg"
                                className="card-img-top" 
                                alt="..."
                                style={{maxHeight:"130px"}}
                            />
                            <div className="card-body">
                                <h1 className="card-title">Pedro</h1>
                                <Link to="#" className="btn btn-primary">Ver evento</Link>
                            </div>
                        </div>

                        <div className="card" >
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFt_e13xM_ZU-vB5qDjsgD_q1AkZEpU9m7w&usqp=CAU" 
                                className="card-img-top" 
                                alt="..."
                                style={{maxHeight:"130px"}}
                            />
                            <div className="card-body">
                                <h1 className="card-title">Joana</h1>
                                <Link to="#" className="btn btn-primary">Ver evento</Link>
                            </div>
                        </div>
                    </div>
                </div>

                

                <div className="col-6">AQUI VAI UM DASHBOARD</div>
            </div>
            </div>
            
            
        </div>
    );
}

export default Home