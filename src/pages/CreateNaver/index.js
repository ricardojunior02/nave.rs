import { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import FeedBackModal from '../../components/FeedBackModal';

import { Container } from './styles';

import api from '../../api';
const Naver = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [project, setProject] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [admissionDate, setAdmissionDate] = useState('');
  const [url, setUrl] = useState('');
  const [showModal, setShowModal] = useState(false);

  const ageSplit = age.split('-');
  const admissionDateSplit = admissionDate.split('-');

  const newAge = `${ageSplit[2]}-${ageSplit[1]}-${ageSplit[0]}`;
  const newAdmissionDate = `${admissionDateSplit[2]}-${admissionDateSplit[1]}-${admissionDateSplit[0]}`;


  const data = {
    name,
    birthdate: newAge,
    job_role: jobRole,
	  admission_date: newAdmissionDate,
    url,
    project
  }

  async function handleSubmit(e){
    e.preventDefault();

    try {
      const response = await api.post('navers', data);
      if(response.data.id){
        setShowModal(true);
      }
    } catch (error) {
      alert('Preencha todos os campos');
    } 
  }

  const text = {
    warning: 'Naver criado',
    message: 'Naver criado com sucesso'
  }

  return (
    <>
    <Header />
    <Container>
      <nav>
        <Link to="/home">
          <MdKeyboardArrowLeft size={25} color="#212121" />
        </Link>
        <h3>Adicionar Naver</h3>
      </nav>
  
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nome
              <input type="text" name="name" id="name" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
            </label>

            <label htmlFor="project">Projeto que participou
              <input type="text" name="project" id="project" placeholder="Projeto que participou" value={project} onChange={e => setProject(e.target.value)} />
            </label>

            <label htmlFor="time">Data de admissão
              <input type="date" name="time" id="time" placeholder="Data de admissão" value={admissionDate} onChange={e => setAdmissionDate(e.target.value)} />
            </label>
          </div>
          
          <div>
            <label htmlFor="age">Aniversário
            <input type="date" name="age" id="age" placeholder="Data de aniversário" value={age} onChange={e => setAge(e.target.value)} />
            </label>
            

            <label htmlFor="job_role">Cargo
              <input type="text" name="job_role" id="job_role" placeholder="Cargo" value={jobRole} onChange={e => setJobRole(e.target.value)} />
            </label>


            <label htmlFor="url">URL da foto do Naver
              <input type="text" name="url" id="url" placeholder="URL da foto do Naver" value={url} onChange={e => setUrl(e.target.value)} />
            </label>

            <button type="submit">Salvar</button>
          </div>
        </form>
      <FeedBackModal showModal={showModal} setShowModal={setShowModal} data={text} />
    </Container>
    </>
  )
}


export default Naver;