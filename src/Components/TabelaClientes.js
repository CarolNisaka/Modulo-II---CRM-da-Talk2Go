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
            // setListaCliente([...response.data])
        }).catch((err) => console.log(err));
        
    }, []);
   

    // GET - SALVA NO OBJETO RESPONSE - INFO VAI ESTAR DENTRO DE RESPONSE.DATA - COLOCA ESSAS INFO DENTRO DO MEU STATE
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Apelido</th>
                    <th scope="col">Foto</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Celular</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Nascimento</th>
                    <th scope="col">RG</th>
                    <th scope="col">CPF</th>
                    <th scope="col">Passaporte</th>
                    <th scope="col">Consultor Principal</th>
                </tr>
            </thead>
                <tbody>
                    <tr className="linha-cliente">
                        <th scope="row">1</th>
                        
                            <td></td>
                            <td><img src="" alt="foto do cliente"/></td>
                            <td>Joao Melo</td>
                            <td>11 989548455</td>
                            <td>joao@gmail.com</td>
                            <td>25/10/1981</td>
                            <td>32.555.385-4</td>
                            <td>219.835.118-81</td>
                            <td>FU 14584</td>
                            <td>Michele dos Santos</td>
                    </tr>
                        {/* vou chamar aqui os clientes do banco de dados -com props e map? AULA DE FORMA 00:22:20 e em 00:33:21 */}
                </tbody>
        </table>
    );
}
export default TabelaClientes





   
    
    