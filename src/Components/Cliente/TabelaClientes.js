import React, { useEffect } from "react";
import './TabelaClientes.css';
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';

const TabelaClientes = () => {

    const [listaClientes, setListaClientes] = useState([]);

    useEffect(() => {
        axios
        .get("https://ironrest.herokuapp.com/talk2go")
        .then((response) => {
            console.log(response.data);
            setListaClientes([...response.data])
        }).catch((err) => console.log(err));
        
    }, []);
   
    
    
    //GET - SALVA NO OBJETO RESPONSE - INFO VAI ESTAR DENTRO DE RESPONSE.DATA - COLOCA ESSAS INFO DENTRO DO MEU STATE
    return (
        <Table responsive striped bordered hover size="sm">
            <thead>
                <tr>
                    {/* <th scope="col">Id</th> */}
                    <th >Foto</th>
                    <th >Apelido</th>
                    <th >Nome</th>
                    <th >Celular</th>
                    <th >E-mail</th>
                    <th >Nascimento</th>
                    <th >RG</th>
                    <th >CPF</th>
                    <th >Passaporte</th>
                    <th >Consultor Principal</th>
                    <th >Ação</th>
                </tr>
            </thead>
                <tbody>
                    {listaClientes.map(clientes => (
                    <tr key={clientes._id} className="linha-cliente">
                        
                       
                            {/* <td>{clientes._id}</td> */}
                            <td>
                                <img 
                                src={clientes.foto} 
                                alt={clientes.nome}
                                style={{maxHeight:"100px"}}
                                />
                            </td>
                            <td>{clientes.apelido}</td>
                            <td>{clientes.nome}</td>
                            <td>{clientes.celular}</td>
                            <td>{clientes.email}</td>
                            <td>{clientes.nascimento}</td>
                            <td>{clientes.rg}</td>
                            <td>{clientes.cpf}</td>
                            <td>{clientes.passaporte}</td>
                            <td>{clientes.consultorPrincipal}</td>
                            <td>
                            <Link to={`/cliente/detalhedocliente/${clientes._id}`} className="btn btn-primary">Detalhe do cliente</Link>
                           
                            </td>
                    </tr>
                    ))}   
                </tbody>
        </Table>
    );
}
export default TabelaClientes





   
    
    