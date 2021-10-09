import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link} from "react-router-dom";
import ModalConfirmacao from "../ModaldeConfirmação";
import { useHistory } from "react-router";


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

    const {id} = useParams();
    useEffect(() => {
        axios
        .get(`https://ironrest.herokuapp.com/talk2go/${id}`)
        .then((response) => {
            setClienteInfo({...response.data});
        })
        .catch((err) => console.log(err));

    },[id]);

    //DELETAR UM CLIENTE!!!
    const [showModal, setShowModal] = useState(false);

    const history = useHistory();

    function handleModalOpen () {
        setShowModal(true);
    }

    function handleModalClose () {
        setShowModal(false);
    }


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

            <button className="btn btn-warning">
                <Link to={`/cliente/editarcliente/${clienteInfo._id}`}>Editar Cliente</Link>
            </button>
            
            {/* No onClick de deletar, abre o modal de confirmaçao */}
            <button 
                onClick={(event) => {
                    event.preventDefault();
                    handleModalOpen();
                    }}
                type="submit" 
                className="btn btn-danger"
                >
                Deletar Cliente
            </button>
                
                {/* No modal, se cliecar em deletar, redireciona para rota de deletar */}
            <ModalConfirmacao 
                show={showModal} 
                handleClose={handleModalClose}
                handleAction={() => history.push(`/cliente/deletarcliente/${clienteInfo._id}`)}

            />
        </div>
    );
}

export default DetalhesDoCliente