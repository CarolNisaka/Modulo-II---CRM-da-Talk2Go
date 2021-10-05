import CriarCliente from "./CriarCliente";


function NovaViagem () {
    return (
        <div className="container">
        <div className='row'>
        <div className="col-7">
            <section >
                {/* Onclick da Nova Viagem */}
                    <h3>Nome da viagem</h3>
                    <form>
                            <input 
                            type='text'
                            name='name'
                            placeholder='de um nome para a viagem do cliente'
                            // value={name}
                            // onChange={(event) => setName(event.target.value)}
                            
                    />
                    </form>
                </section>

                <section>
                    <h3>Oportunidades</h3>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                            <label className="form-check-label" for="inlineCheckbox1">Aereo</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                            <label className="form-check-label" for="inlineCheckbox2">Hotel</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                            <label className="form-check-label" for="inlineCheckbox2">Transfer</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                            <label className="form-check-label" for="inlineCheckbox2">Passeios</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                            <label className="form-check-label" for="inlineCheckbox2">Seguro</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                            <label className="form-check-label" for="inlineCheckbox2">Cruzeiro</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                            <label className="form-check-label" for="inlineCheckbox2">Outros</label>
                        </div>

                        <form class="form-floating">
                            <input type="email" class="form-control" id="floatingInputValue" placeholder="descreva o que o cliente quer" value=""/>
                            <label for="floatingInputValue">Comentarios</label>
                        </form>
                </section>

                <section>
                    <h3>Sobre a Oportunidade</h3>

                    <form className="row gx-3 gy-2 align-items-center">
                        <div className="col-sm-3">
                            <label className="visually-hidden" for="specificSizeInputName">Valor Estimado</label>
                            <input type="text" className="form-control" id="specificSizeInputName" placeholder="valor estimado"/>
                        </div>
                        <div className="col-sm-3">
                            <label className="visually-hidden" for="specificSizeInputName">Rentabilidade Estimada</label>
                            <input type="text" className="form-control" id="specificSizeInputName" placeholder="rentabilidade estimada"/>
                        </div>
                        <div className="col-sm-3">
                            <label className="visually-hidden" for="specificSizeSelect">Preference</label>
                            <select className="form-select" id="specificSizeSelect">
                            <option selected>Ação</option>
                            <option value="1">Criar Proposta</option>
                            <option value="2">Prospeçcao</option>
                            <option value="3">Follow Up</option>
                            <option value="4">Venda</option>
                            <option value="5">Desistencia</option>
                            </select>
                        </div>
                        <div className="col-auto">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="autoSizingCheck2"/>
                            <label className="form-check-label" for="autoSizingCheck2">
                                Remember me
                            </label>
                            </div>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Criar</button>
                        </div>
                        </form>
                </section>
                </div>
            <div className="col-5">
                <p>O Joao (apelido) é o ?</p>
                    <div class="input-group mb-3">
                    <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Joao Silva Tel: (11) 95454-4027" 
                    // value={} trazer sugestao da lista de clientes pelo apelido
                    />
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Sim</button>
                    </div>

                    <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Joao Souza Tel: (11) 95214-3028" />
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Sim</button>
                    </div>      

                <p>Ou esse é um novo cliente?</p>     
                <button>Criar Cliente</button>
                <p>fazer via route ou trazer o componente aqui?</p>
                       
                    

            </div>
            </div>
        </div>
    );
}

export default NovaViagem