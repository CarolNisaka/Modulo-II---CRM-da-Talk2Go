

import './Home.css';
import { Link,  } from 'react-router-dom';
import NavBarInterna from './NavBarInterna';
import { Card } from 'react-bootstrap';
import {CardGroup} from "react-bootstrap";



function Home() {
    return(

            <div className="principal">

                <div>
                    <NavBarInterna/>
                </div>

            <div className="container">
            <div className="row">
                <div className="col-">
                <h4>Eventos dos meus clientes</h4>
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

                

                <div className="col-">
                <h4>Minhas tarefas</h4>
                
                <CardGroup>
                    <Card>
                        <Card.Body>
                        <Card.Title>Treinamento Cruzeiros</Card.Title>
                        <Card.Text>
                            <p>As 15:00 via zoom.</p>
                            <p>Programado por: Emily</p>
                            <p>Evento: Manual</p>
                            <Link to="#" className="btn btn-secondary">Ver tarefa</Link>
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                        <Card.Title>Pre-Embarque</Card.Title>
                        <Card.Text>
                            <p>Pre-embarque do Pedro Campos</p>
                            <p>Programado por: Michele</p>
                            <p>Evento: Automático</p>
                            <Link to="#" className="btn btn-secondary">Ver tarefa</Link>
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                        <Card.Title>Contato</Card.Title>
                        <Card.Text>
                            <p>Retornar ligação para Sr Luis Gomes </p>
                            <p>Programado por: Daniele </p>
                            <p>Evento: Manual</p>
                            <Link to="#" className="btn btn-secondary">Ver tarefa</Link>
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Card.Body>
                        <Card.Title>EUA</Card.Title>
                        <Card.Text>
                            <p>Verificar novas regras de entrada </p>
                            <p>Programado por: Michele</p>
                            <p>Evento: Manual</p>
                            <Link to="#" className="btn btn-secondary">Ver tarefa</Link>
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Card.Body>
                        <Card.Title>Follow Up</Card.Title>
                        <Card.Text>
                            <p>Follow up: 4 clientes</p>
                            <p>Programado por: Sistema</p>
                            <p>Evento: Automático</p>
                            <Link to="#" className="btn btn-secondary">Ver tarefa</Link>
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
                
                
                
                
                </div>
            </div>
            </div>
            
            
        </div>
    );
}

export default Home