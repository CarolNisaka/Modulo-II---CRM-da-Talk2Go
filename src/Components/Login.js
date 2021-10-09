import { useState } from 'react';
import logoMap from '../logoMap.jpeg';
import './Login.css';
import { useHistory} from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



function Login () {

    const [name, setName] = useState('');
    const [senha, setSenha] = useState('');
    const [lembrar, setLembrar] = useState('');

    const history = useHistory();

    const handleLogin = () => {      
        history.push('/home');
    }
    return (

        <div className="Login">
            <header className="App-header">
          
                <img src={logoMap} className="App-logo" alt="logo" />
               
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label></Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Digite seu e-mail"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                       
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label></Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="digite sua senha" 
                            value={senha}
                            onChange={(event) => setSenha(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check 
                            type="checkbox" 
                            label="Lembrar" 
                            value={lembrar}
                            onChange={(event) => setLembrar(event.target.value)}

                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Entrar
                    </Button>
                    </Form>
               
            
            </header>

        
            
        </div>
    );
}

export default Login

