import React, { useEffect } from "react";
import './TabelaClientes.css';
import { useState } from "react";
import axios from "axios";

const TabelaClientes = props => {

    const [listaClientes, setListaCliente] = useState([]);

    useEffect(() => {
        axios
        .get("https://ironrest.herokuapp.com/talk2go")
        .then((response) => {
            console.log(response.data);
            setListaCliente([...response.data])
        }).catch((err) => console.log(err));
        
    }, []);
   
    
    // invocar aqui o setListaCliente
    //GET - SALVA NO OBJETO RESPONSE - INFO VAI ESTAR DENTRO DE RESPONSE.DATA - COLOCA ESSAS INFO DENTRO DO MEU STATE
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Foto</th>
                    <th scope="col">Apelido</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Celular</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Nascimento</th>
                    <th scope="col">RG</th>
                    <th scope="col">CPF</th>
                    <th scope="col">Passaporte</th>
                    <th scope="col">Consultor Principal</th>
                    <th scope="col">Ação</th>
                </tr>
            </thead>
                <tbody>
                    {listaClientes.map(clientes => (
                    <tr className="linha-cliente">
                        
                        
                            <td>{clientes._id}</td>
                            <td><img src={clientes.foto} alt="foto do cliente"/></td>
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
                            <button>Editar</button>
                            <button>Deletar</button>
                            </td>
                    </tr>
                    ))}   {/* vou chamar aqui os clientes do banco de dados -com props e map? AULA DE FORMA 00:22:20 e em 00:33:21 */}
                </tbody>
        </table>
    );
}
export default TabelaClientes





   
    
    