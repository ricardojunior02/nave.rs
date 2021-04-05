import React, { useContext } from 'react';
import { Context } from '../../context/authenticate';

import logo from '../../assets/logo.svg';

import { Container, Head} from  './styles.js';
import { Link } from 'react-router-dom';

function Header() {
  const { handleLogout} = useContext(Context);

  return (
    <Container>
      <Head>
        <Link to="/home">
          <img src={logo} alt="nave.rs"/>
        </Link>
        <button onClick={() => handleLogout()}>Sair</button>
      </Head> 
    </Container>
  )
}

export default Header;