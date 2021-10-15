import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link} from "react-router-dom";
import ModalConfirmacao from "../ModaldeConfirmação";
import { useHistory } from "react-router";
import { Card } from "react-bootstrap";


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

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={clienteInfo.foto}/>
        <Card.Body>
            <Card.Title>{clienteInfo.nome}</Card.Title>
            <Card.Text>
            <p>Apelido: {clienteInfo.apelido}</p>
            <p>Celular:{clienteInfo.celular}</p>
            <p>E-mail:{clienteInfo.email}</p>
            <p>Data de nascimento:{clienteInfo.nascimento}</p>
            <p>RG: {clienteInfo.rg}</p>
            <p>CPF: {clienteInfo.cpf}</p>
            <p>Passaporte: {clienteInfo.passaporte}</p>
            <p>Consultor Principal: {clienteInfo.consultorPrincipal}</p>
            </Card.Text>
        
        </Card.Body>
        </Card>
            
        
       

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