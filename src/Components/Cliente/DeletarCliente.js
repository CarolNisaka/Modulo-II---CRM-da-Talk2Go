import { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import axios from "axios";

function DeletarCliente () {

    const {id} = useParams();
    const history = useHistory();

    useEffect(() => {
        axios
        .delete(`https://ironrest.herokuapp.com/talk2go/${id}`)
        .then(() => history.push(`/cliente`))
        .catch(err => console.error(err))
    }, [history, id])

    return(
        <div>Excluindo Cliente </div>
    );
}

export default DeletarCliente