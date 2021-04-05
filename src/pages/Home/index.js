import { useEffect, useState} from 'react';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import FeedBackModal from '../../components/FeedBackModal';

import { Link } from 'react-router-dom';

import Card from '../../components/Card';

import api from '../../api';

import { Container, Nav, Main } from './styles.js';

const Home = () => {
  const [navers, setNavers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [idNaver, setIdNaver ] = useState('');
  const [loading, setLoading] = useState(true);
  const [loadApi, setLoadApi] = useState(true);

  const openModal = (id) => {
    setIdNaver(id)
    setShowModal(true);
  };

  const openModalDelete = (id) => {
    setIdNaver(id)
    setShowModalDelete(true);
  };

  async function deleteNaver(id){
    const data = await api.delete(`navers/${id}`);

    if(data.status === 200){
      setLoading(false);
    }
  }


  useEffect(() => {
    async function loadNavers(){
      const response = await api.get('navers');
      return setNavers(response.data);
    }
    loadNavers();
    setLoadApi(false)
  }, [loadApi])

  return (
    <>
      <Header />
      <Container>
        <Nav>
          <h2>Navers</h2>
          <Link to="/create-naver">
            Adicionar Naver
          </Link>
        </Nav>
        <Main> 
          <ul>
            {navers.map(naver => (
              <Card
                key={naver.id}
                naver={naver}
                openModal={openModal}
                openModalDelete={openModalDelete}
              />  
            ))}
          </ul>
        </Main> 
        {loading ? (
          <FeedBackModal showModalDelete={showModalDelete} setShowModalDelete={setShowModalDelete} 
          deleteNaver={deleteNaver} 
          data={{
            warning: 'Excluir Naver',
            message: 'Tem certeza que deseja excluir este Naver?'
          }} del={idNaver}
        />
        ) : (
          <FeedBackModal showModalDelete={showModalDelete} setShowModalDelete={setShowModalDelete}
            setLoading={setLoading}
            setLoadApi={setLoadApi}
            data={{
            warning: 'Naver excluído',
            message: 'Naver excluido com sucesso'
          }}
        />
        )}
        <Modal showModal={showModal} setShowModal={setShowModal} deleteNaver={deleteNaver}
          showModalDelete={showModalDelete} setShowModalDelete={setShowModalDelete}
          naverid={idNaver}
          setLoading={setLoading}
          setLoadApi={setLoadApi}
        />
      </Container>
    </>
  )
}


export default Home;