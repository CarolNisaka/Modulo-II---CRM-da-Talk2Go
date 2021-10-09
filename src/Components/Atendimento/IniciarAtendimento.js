import { useState } from 'react';
import './IniciarAtendimento.css';
import ShowCanais from './ShowCanais';
import ShowCanaisDigitais from './ShowCanaisDigitais';
import {Link} from 'react-router-dom';
import Play from './Play';
import  Container  from 'react-bootstrap/Container';
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import  Form  from 'react-bootstrap/Form';
import  Button from 'react-bootstrap/Button';
import NavBarInterna from '../NavBarInterna';


function IniciarAtendimento () {

    const loja = 'Metropole'

    const [inicioAtedLoja, setInicioAtedLoja] = useState(false);
    const [inicioHotSite, setInicioHotSite] = useState(false);
    const [inicioAgaxtur, setInicioAgaxtur] = useState(false);
    const [inicioPlay, setPlay] = useState(false);


    return (

        <div className="Principal">
            <div>
                <NavBarInterna/>
            </div>
            <div>
                
                <Row className="Inicial">
                <h3>Canais de Atendimento</h3>
                    <Col>
                    <button className="button-inicial" id='loja' onClick={(event) => setInicioAtedLoja(!inicioAtedLoja)} > Loja {loja}</button>
                    {inicioAtedLoja && <ShowCanais/> }
                    </Col>
                    <Col>
                    <button className="button-inicial" id='hotsite' onClick={(Event) => setInicioHotSite(!inicioHotSite)} > HotSite {loja}</button>
                    {inicioHotSite && <ShowCanaisDigitais/>}
                    </Col>
                    <Col>
                    <button className="button-inicial" id='siteAgaxtur' onClick={(event) => setInicioAgaxtur(!inicioAgaxtur)}> Agaxtur</button>
                    {inicioAgaxtur && <ShowCanaisDigitais/>}
                    </Col>
                </Row>

                <Row>
                <h3>Sobre o atendimento</h3>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Identificação do cliente</Form.Label>
                            <Form.Control 
                            type="name" 
                            placeholder="Digite um nome proviśorio" />
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Pedido inicial</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="o que o cliente deseja" />
                        </Form.Group>
                       
                        <Button 
                        variant="success" 
                        type="submit"
                        onClick={(Event) => setPlay(!inicioPlay)}
                        href="/play"
                        >
                            Iniciar
                        </Button>

                        <Button variant="danger" type="submit">
                            Declinar
                        </Button>
                    </Form>
                </Row>

                {/* <Row>
                <h2>Ação</h2>
                    <Col>Play</Col>
                    <Col>Declinar</Col>
                    
                </Row> */}
            </div> 
         </div>
//         <div className="Inicial">
//             <h1>NOSSOS CANAIS DE ATENDIMENTO</h1>


//             <section>
//                 <button className="button-inicial" id='loja' onClick={(event) => setInicioAtedLoja(!inicioAtedLoja)} > Loja {loja}</button>
//                 {inicioAtedLoja && <ShowCanais/> }
//             </section>
            
//             <section>
//                 <button className="button-inicial" id='hotsite' onClick={(Event) => setInicioHotSite(!inicioHotSite)} > HotSite {loja}</button>
//                 {inicioHotSite && <ShowCanaisDigitais/>}
//             </section>

//             <section>
//                 <button className="button-inicial" id='siteAgaxtur' onClick={(event) => setInicioAgaxtur(!inicioAgaxtur)}> Agaxtur</button>
//                 {inicioAgaxtur && <ShowCanaisDigitais/>}
//             </section>

//     <h1>O CLIENTE </h1>

//     <div className="col-5">
//         <div className="col-md">
//             <div className="form-floating">
//             <input type="text" className="form-control" id="floatingInputGrid" placeholder="Jose amigo da Rose"  />
//             <label for="floatingInputGrid">Apelido</label>
//             </div>
//         </div>


//         <div className="form-floating">
//             <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
//             <label for="floatingTextarea2">Comentarios</label>
//         </div>
//     </div>

//     {/* Colocar link para Play */}
//     <div>
//     <button type="button" className="btn btn-primary btn-lg" onClick={(Event) => setPlay(!inicioPlay)} >PLAY</button> 
//         {inicioPlay && <Link to='/play'>{Play}play</Link>}
   
//     </div>
//     {/* colocar caixa de dialogo para registro simples */}
//     <button type="button" className="btn btn-secondary btn-lg">Declinar</button>
    












  
// </div>
)
}

export default IniciarAtendimento