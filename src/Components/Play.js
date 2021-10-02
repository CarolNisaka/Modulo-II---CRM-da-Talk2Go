import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import NovaViagem from "./NovaViagem";


function Play () {
    const [novaViagem, setNovaViagem] = useState(false);
    const [comprarMais, setComprarMais] = useState(false);
    const [alterarViagem, setAlterarViagem] = useState(false);
    const [cancelarViagem, setCancelarViagem] = useState(false);

    return (
        <div>
       
            <div>
                <button type="button" className="btn btn-primary" onClick={(event) => setNovaViagem(!novaViagem)}>Nova Viagem</button>
                {novaViagem && <NovaViagem/>}
                <button type="button" className="btn btn-secondary">Comprar mais</button>
                <button type="button" className="btn btn-success">Alterar Viagem</button>
                <button type="button" className="btn btn-danger">Cancelar Viagem</button>
                <button type="button" className="btn btn-warning">Outros</button>
            </div>

            
        </div>
    );
}

export default Play