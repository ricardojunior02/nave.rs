import { useEffect, useState } from 'react';
import  {Background, ModalContent, ModalImg, ModalWrapper, CloseModalButton, Buttons } from './styles.js';
import { useSpring, animated } from 'react-spring';
import moment from 'moment';

import FeedBackModal from '../FeedBackModal';

import { MdDelete, MdEdit} from 'react-icons/md'

import { Link } from 'react-router-dom';
import api from '../../api.js';


const Modal = ({ showModal, setShowModal, naverid, deleteNaver, showModalDelete, setShowModalDelete, setLoading, setLoadApi}) => {
  const [naver, setNaver] = useState({});

  useEffect(() => {
    (async () => {
      const { data } = await api.get(`navers/${naverid}`);
      setNaver(data);
    })()
  }, [naverid]);


  function age(year, month){
    const getYear = new Date().getFullYear();
    const getMonth = new Date().getMonth();

    if(month > getMonth){
     const y = (getYear - year) - 1;

     return y;
    }

    const y = getYear - year;

    return y;
  }

  function homeAge(admission_date){
     const year = Math.floor(moment(new Date()).diff(moment(admission_date, 'YYYY-MM-DD'), 'years', true));
     if(year === 1){
       return `${year} ano`;
     }else if(year > 1){
      return `${year} anos`;
     }else{
       const months = Math.floor(moment(new Date()).diff(moment(admission_date, 'YYYY-MM-DD'), 'months', true));
       return `${months} meses`;
     }
  }

  const toString = String(naver.birthdate);
  const toStringAdmission = String(naver.admission_date);

  
  const birthdate = toString.split('T')[0];
  const dates = birthdate.split('-');

  const admission_date = toStringAdmission.split('T')[0];

  const ageNaver = age(dates[0], dates[1]);
  
  const homeNaver = homeAge(admission_date);


  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });


  const buttonDelete = async (id) => {
    setShowModal(false);
    setShowModalDelete(true)
  }

  return (
    <>
      {showModal ? (
        <Background >
          <animated.div style={animation}>
            <ModalWrapper>
              <ModalImg src={naver.url}  alt={`${naver.name}-image_profile`}/>
              <ModalContent>
                <h2>{naver.name}</h2>
                <p>{naver.job_role}</p>
                <h3>Idade</h3>
                <p>{ageNaver} anos</p>
                <h3>Tempo de empresa</h3>
                <p>{homeNaver}</p>
                <h3>Projetos que participou</h3>
                <p>{naver.project}</p>
                <Buttons>
                  <button onClick={() => buttonDelete(naverid)}>
                    <MdDelete size={20} color="#212121" />
                  </button>
                  <Link to={`/update-naver/${naver.id}`}>
                    <MdEdit size={20} color="#212121" />
                  </Link>
                </Buttons>
              </ModalContent>
              <CloseModalButton
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
          {showModalDelete ? (
          <FeedBackModal showModalDelete={showModalDelete} setShowModalDelete={setShowModalDelete} 
            deleteNaver={deleteNaver} 
            data={{
              warning: 'Excluir Naver',
              message: 'Tem certeza que deseja excluir este Naver?'
            }} del={naver.id}
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
        </Background>
      ) : null}
    </>
  );
}


export default Modal;