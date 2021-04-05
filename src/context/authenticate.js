import { createContext, useState, useEffect } from 'react';
import api from '../api';

import Loading from '../components/Loading';

const Context = createContext();


const Authenticate = ({ children }) => {
  const [authenticate, setAuthenticate] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const token = localStorage.getItem('navedex@token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticate(true);
    }

    setLoading(false);
  }, []);
  
  async function handleLogin({ email, password }) {
    const { data: { token } } = await api.post('users/login', {
      email,
      password
    });

    localStorage.setItem('navedex@token', JSON.stringify(token));
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setAuthenticate(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  function handleLogout() {
    setAuthenticate(false);
    localStorage.removeItem('navedex@token');
    api.defaults.headers.Authorization = undefined;
  }

  async function deleteNaver(id){
    const { data } = await api.delete(`naver/${id}`);

    return data;
  }

  if(loading){
    return <Loading />
  }

  return (
    <Context.Provider value={{ authenticate, handleLogin, handleLogout, deleteNaver }} >
      {children}
    </Context.Provider>
  )
}

export {
  Context,
  Authenticate
}