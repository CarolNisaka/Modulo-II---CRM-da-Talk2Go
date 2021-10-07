import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function DetalhesDoCliente (props) {
    const [clienteInfo, setClienteInfo] = useState({
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

    useEffect(() => {
        axios
        .get(`https://ironrest.herokuapp.com/talk2go/${props.match.params.id}`)
        .then((response) => {
            setClienteInfo({...response.data});
        })
        .catch((err) => console.log(err));

    },[props.match.params.id]);

    return (
        <div>
            <img
                className="img-fluid"
                src={clienteInfo.foto}
                alt={clienteInfo.nome}
                style={{maxWidth:"150px"}}
            />
            <h1>{clienteInfo.nome}</h1>
            <h2>{clienteInfo.email}</h2>
        </div>
    );
}

export default DetalhesDoCliente