

import './Home.css';
import { Link,  } from 'react-router-dom';
import NavBarInterna from './NavBarInterna';
import { Card } from 'react-bootstrap';
import {CardGroup} from "react-bootstrap";
import "./Cliente/TabelaClientes";
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';


function Home(props) {

    const [listaClientes, setListaClientes] = useState([]);

    useEffect(() => {
        axios
        .get("https://ironrest.herokuapp.com/talk2go")
        .then((response) => {
            console.log(response.data);
            setListaClientes([...response.data])
        }).catch((err) => console.log(err));
        
    }, []);
    return(

    <div className="principal">

        <div>
            <NavBarInterna/>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-">
                    <h4>Eventos dos meus clientes</h4>
                     <div className="clientevent">
                
                        {listaClientes.map(clientes => (
                            clientes.nome === "Julia Roberts" || 
                            clientes.nome === "Brad Pitt" || 
                            clientes.nome === "Roberto Carlos"
                            ?
                            <div className="card" >
                                    <img src={clientes.foto}
                                        className="card-img-top" 
                                        alt="..."
                                        style={{maxHeight:"130px"}}
                                    />
                                    <div className="card-body">
                                        <Link to={`/cliente/detalhedocliente/${clientes._id}`} className="btn btn-primary">{clientes.nome}</Link>
                                    </div>

                        </div> : null
                ))}
                   
                        
                    </div>
                </div>

                {/* <div>
                    <h4>Metas</h4>
                    <h6>Meta mês</h6>
                    <h6>Meta dia</h6>
                </div> */}

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
                        {/* <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
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
                        {/* <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
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
                        {/* <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
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
                        {/* <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
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
                        {/* <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>
                </CardGroup>
                
                
                
                
                </div>
            </div>
        </div>
            
            
    </div>
    );
}

export default Home