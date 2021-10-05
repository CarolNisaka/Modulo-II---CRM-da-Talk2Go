import { useState } from "react";
import "./CriarCliente.css";
import TabelaClientes from "./TabelaClientes";
import axios from "axios";

function CriarCliente () {

    
    const [foto, setFoto] = useState('');
    const [apelido, setApelido] = useState('');
    const [nome, setNome] = useState('');
    const [celular, setCelular] = useState('');
    const [email, setEmail] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('');
    const [passaporte, setPassaporte] = useState('');
    const [consutorPrincipal, setConsultorPrincipal] = useState('');

    

   const handleCreateClient = async(event) => {
       event.preventDefault();

       try{
        const response = await axios.post("https://ironrest.herokuapp.com/talk2go",
        {
            
            foto: foto,
            apelido: apelido,
            nome: nome,
            celular: celular,
            email: email,
            nascimento: nascimento,
            rg: rg,
            cpf: cpf,
            passaporte: passaporte,
            consultorPrincipal: consutorPrincipal
        }

        )
        console.log(response.data.ops);
        
       }catch(err){
        console.log(err)
       }

   }
//    axios.post(url, OBJETO)
    return (
        <div>
             <div className="container">
                <div className="row">
                    <div className="col-5">Criar Cliente
                    <div className="row g-3">
                        <div className="col">
                           <form onSubmit ={handleCreateClient} className="formCriaCliente">

                                <input 
                                   className="form-control"
                                   type='text'
                                   name="foto"
                                   placeholder="foto"
                                   value={foto}
                                   onChange={(event) => setFoto(event.target.value)}
                               />
                               {/* <span className="message error">Erro text Example</span>
                               <span className="message success">Ok</span> */}

                                <input 
                                   className="form-control"
                                   type='text'
                                   name="apelido"
                                   placeholder="apelido"
                                   value={apelido}
                                   onChange={(event)=> setApelido(event.target.value)}
                               />
                               <input
                                   className="form-control" 
                                   type='text'
                                   name="nome"
                                   placeholder="nome completo"
                                   value={nome}
                                   onChange={(event) => setNome(event.target.value)}
                               />

                                
                                <input 
                                   className="form-control"
                                   type='text'
                                   name="celular"
                                   placeholder="celular"
                                   value={celular}
                                   onChange={(event) => setCelular(event.target.value)}
                               />
                                    <fieldset className="row mb-3">
                                        <legend className="col-form-label col-sm-8 pt-0"> Contato por WhatsApp</legend>
                                        <div className="col-sm-10">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                                            <label className="form-check-label" >
                                            Sim
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                                            <label className="form-check-label" >
                                            Não
                                            </label>
                                        </div>
                                        
                                        </div>
                                    </fieldset>

                                <input 
                                   className="form-control"
                                   type='text'
                                   name="email"
                                   placeholder="e-mail"
                                   value={email}
                                   onChange={(event) => setEmail(event.target.value)}
                               />

                                <input 
                                   className="form-control"
                                   type='text'
                                   name="nascimento"
                                   placeholder="data de nascimento"
                                   value={nascimento}
                                   onChange={(event)=> setNascimento(event.target.value)}
                               />

                                <input 
                                   className="form-control"
                                   type='text'
                                   name="RG"
                                   placeholder="RG"
                                   value={rg}
                                   onChange={(event) => setRg(event.target.value)}
                               />

                                <input 
                                   className="form-control"
                                   type='text'
                                   name="CPF"
                                   placeholder="CPF"
                                   value={cpf}
                                   onChange={(event) => setCpf(event.target.value)}
                               />

                                <input 
                                   className="form-control"
                                   type='text'
                                   name="Passaporte"
                                   placeholder="Passaporte"
                                   value={passaporte}
                                   onChange={(event) => setPassaporte(event.target.value)}
                               />

                                <input 
                                   className="form-control"
                                   type='text'
                                   name="ConsultorPrincipal"
                                   placeholder="Consultor Principal "
                                   value={consutorPrincipal}
                                   onChange={(event) => setConsultorPrincipal(event.target.value)}
                               />


                            <button 
                                type="submit" 
                                className="btn btn-success"
                                >
                                Criar Cliente
                           </button>

                                                              
                           </form>

                          
                        </div>
                        
                        </div>
                    
                    </div>
                    
                    <div className="col-7">
                    <h1>Lista de Clientes</h1>
                    <TabelaClientes/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CriarCliente