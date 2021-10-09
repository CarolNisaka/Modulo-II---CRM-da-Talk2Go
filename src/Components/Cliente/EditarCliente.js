import { useState } from "react";
import { useEffect } from "react";
import { useParams, useHistory } from "react-router";
import axios from "axios";
import "./EditarCliente.css";


function EditarCliente () {

    const [clienteEdit, setClienteEdit] = useState({
       
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
    const history =useHistory()

    useEffect(() => {
        axios
        .get(`https://ironrest.herokuapp.com/talk2go/${id}`)
        .then((response) => {
            setClienteEdit({...response.data});
        })
        .catch((err) => console.error(err));

    },[id]);

  function handleChange(event) {
    setClienteEdit({...clienteEdit, [event.target.name]: event.target.value});
  }

  function handleEditClient (event) {
    event.preventDefault();

    delete clienteEdit._id;

    axios
    .put(`https://ironrest.herokuapp.com/talk2go/${id}`,clienteEdit)
    .then(() => history.push(`/cliente/detalhedocliente/${id}`))
    .catch((err)=> console.error(err));
  }



    return (
        <div>
         <div className="container">
           <div className="row">
               <div className="col-5">Editar Cliente
                 <div className="row g-3">
                   <div className="col">
                      <form onSubmit ={handleEditClient} className="formCriaCliente">

                            <input 
                              className="form-control"
                              type='text'
                              name="foto"
                              placeholder="foto"
                              value={clienteEdit.foto}
                              onChange={handleChange}
                            />
                          {/* <span className="message error">Erro text Example</span>
                          <span className="message success">Ok</span> */}

                            <input 
                              className="form-control"
                              type='text'
                              name="apelido"
                              placeholder="apelido"
                              value={clienteEdit.apelido}
                              onChange={handleChange}
                            />
                            <input
                              className="form-control" 
                              type='text'
                              name="nome"
                              placeholder="nome completo"
                              value={clienteEdit.nome}
                              onChange={handleChange}
                            />

                           
                            <input 
                              className="form-control"
                              type='text'
                              name="celular"
                              placeholder="celular"
                              value={clienteEdit.celular}
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
                              value={clienteEdit.email}
                              onChange={handleChange}
                            />

                            <input 
                              className="form-control"
                              type='text'
                              name="nascimento"
                              placeholder="data de nascimento"
                              value={clienteEdit.nascimento}
                              onChange={handleChange}
                            />

                            <input 
                              className="form-control"
                              type='text'
                              name="RG"
                              placeholder="RG"
                              value={clienteEdit.rg}
                              onChange={handleChange}
                            />

                            <input 
                              className="form-control"
                              type='text'
                              name="CPF"
                              placeholder="CPF"
                              value={clienteEdit.cpf}
                              onChange={handleChange}
                            />

                            <input 
                              className="form-control"
                              type='text'
                              name="Passaporte"
                              placeholder="Passaporte"
                              value={clienteEdit.passaporte}
                              onChange={handleChange}
                            />

                            <input 
                              className="form-control"
                              type='text'
                              name="ConsultorPrincipal"
                              placeholder="Consultor Principal "
                              value={clienteEdit.consultorPrincipal}
                              onChange={handleChange}
                            />

                        <div className="botoes">
                          <button 
                            type="submit" 
                            className="btn btn-success"
                            >
                            Salvar Alterações
                          </button>

                          <button 
                            className="btn btn-secondary"
                            onClick={() => {
                              history.goBack();
                              }}
                          >Voltar
                          </button>

                          
                        </div>                                  
                      
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


