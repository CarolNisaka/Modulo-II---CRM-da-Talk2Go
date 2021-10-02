import { useState } from 'react';
import logoMap from '../logoMap.jpeg';
import './Home.css';
import {Link, useHistory} from 'react-router-dom';


function Login () {

    const [name, setName] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();

    const handleLogin = () => {
       
       
        history.push('/home');
        
    }
    return (

        <div className="Home">
            <header className="App-header">
                <img src={logoMap} className="App-logo" alt="logo" />
                <p>
                Bem vindo a Map2Go.
                </p>
                <form onSubmit={handleLogin}>
                    <input 
                    type='text'
                    name='name'
                    placeholder='Digite seu e-mail'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    
                    />

                    <input 
                    type='text'
                    name='senha'
                    placeholder='Digite sua senha'
                    value={senha}
                    onChange={(event) => setSenha(event.target.value)}
                    />

                    <button type="submit">Entrar
                    
                    </button>
                   
                </form>
            
            </header>

        
            
        </div>
    );
}

export default Login