import { useState, useContext } from 'react';
import { Context } from '../../context/authenticate';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { Container, Content } from './styles';


const LogIn = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const history = useHistory();

  const { handleLogin } = useContext(Context);


  async function handleSubmit(e){
    e.preventDefault();
    try {
      await handleLogin({ email, password});
       history.push('/home') 
    } catch (error) {
      alert('Erro ao fazer login, verifique os campos')
    }
  }
  return (
    <Container>
      <Content>
        <img src={logo} alt="nave.rs"/>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <input type="text" id="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />

          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />

          <button type="submit">Entrar</button>
        </form>
      </Content>
    </Container>
  )
}

export default LogIn;