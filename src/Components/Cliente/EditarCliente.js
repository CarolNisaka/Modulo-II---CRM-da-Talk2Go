import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

function EditarCliente () {

    const [clienteInfo, setClienteInfo] = useState({
        // id:"",
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

  function handleChange(event) {
    setClienteInfo({...clienteInfo, [event.target.name]: event.target.value});
  }

  const handleCreateClient = async(event) => {
    event.preventDefault();
  }

    return (
        <div>
         <div className="container">
           <div className="row">
               <div className="col-5">Editar Cliente
                 <div className="row g-3">
                   <div className="col">
                      <form onSubmit ={handleCreateClient} className="formCriaCliente">

                           <input 
                              className="form-control"
                              type='text'
                              name="foto"
                              placeholder="foto"
                              value={clienteInfo.foto}
                              onChange={handleChange}
                          />
                          {/* <span className="message error">Erro text Example</span>
                          <span className="message success">Ok</span> */}

                           <input 
                              className="form-control"
                              type='text'
                              name="apelido"
                              placeholder="apelido"
                              value={clienteInfo.apelido}
                              onChange={handleChange}
                          />
                          <input
                              className="form-control" 
                              type='text'
                              name="nome"
                              placeholder="nome completo"
                              value={clienteInfo.nome}
                              onChange={handleChange}
                          />

                           
                           <input 
                              className="form-control"
                              type='text'
                              name="celular"
                              placeholder="celular"
                              value={clienteInfo.celular}
                              onChange={handleChange}
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
                              value={clienteInfo.email}
                              onChange={handleChange}
                            />

                            <input 
                              className="form-control"
                              type='text'
                              name="nascimento"
                              placeholder="data de nascimento"
                              value={clienteInfo.email}
                              onChange={handleChange}
                            />

                           <input 
                              className="form-control"
                              type='text'
                              name="RG"
                              placeholder="RG"
                              value={clienteInfo.rg}
                              onChange={handleChange}
                          />

                           <input 
                              className="form-control"
                              type='text'
                              name="CPF"
                              placeholder="CPF"
                              value={clienteInfo.cpf}
                              onChange={handleChange}
                          />

                           <input 
                              className="form-control"
                              type='text'
                              name="Passaporte"
                              placeholder="Passaporte"
                              value={clienteInfo.passaporte}
                              onChange={handleChange}
                          />

                           <input 
                              className="form-control"
                              type='text'
                              name="ConsultorPrincipal"
                              placeholder="Consultor Principal "
                              value={clienteInfo.consultorPrincipal}
                              onChange={handleChange}
                          />


                        <button 
                           type="submit" 
                           className="btn btn-success"
                           >
                           Salvar Alterações
                        </button>

                        <button 
                           type="submit" 
                           className="btn btn-warning"
                           >
                           Deletar Cliente
                        </button>
                                                         
                      </form>
                          
                     
                   </div>
                   
                   </div>
               
               </div>
               
               
           </div>
       </div>
   </div>
    );
}

export default EditarCliente