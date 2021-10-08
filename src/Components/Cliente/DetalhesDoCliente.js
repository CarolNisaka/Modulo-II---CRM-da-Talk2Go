import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

function DetalhesDoCliente (props) {
    const [clienteInfo, setClienteInfo] = useState({
        id:"",
        foto: "",
        apelido: "",
        nome: "",
        celular: "",
        email: "",
        nascimento: "",
        rg: "",
        cpf: "",
        passaporte: "",
        consultorPrincipal: ""
    });

    const {id} = useParams()
    useEffect(() => {
        axios
        .get(`https://ironrest.herokuapp.com/talk2go/${id}`)
        .then((response) => {
            setClienteInfo({...response.data});
        })
        .catch((err) => console.log(err));

    },[id]);

    return (
        <div>
            <img
                className="img-fluid"
                src={clienteInfo.foto}
                alt={clienteInfo.nome}
                style={{maxWidth:"150px"}}
            />
            <h4>{clienteInfo._id}</h4>
            <h1>{clienteInfo.nome}</h1>
            <h2>{clienteInfo.email}</h2>

            <Link to={`cliente/editarcliente/${clienteInfo._id}`}>Editar Cliente</Link>
        </div>
    );
}
// cliente/editarcliente/:id
export default DetalhesDoCliente