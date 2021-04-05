import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ProfileData, Avatar, Footer} from './styles';

import { MdDelete, MdEdit } from 'react-icons/md';

const Card = ({ naver, openModal, openModalDelete }) => {
  return (
    <Container>
        <Avatar onClick={() => openModal(naver.id)}>
          <img src={naver.url} alt={`${naver.name}-image_profile`}/>
        </Avatar>
        <ProfileData >
          <strong>{naver.name}</strong>
          <p>{naver.job_role}</p>
        </ProfileData>
        <Footer>
          <button onClick={() => openModalDelete(naver.id)} >
            <MdDelete size={20}/>
          </button>
          <Link to={`update-naver/${naver.id}`}>
            <MdEdit size={20}/>
          </Link>     
        </Footer>
    </Container>
  )
}

export default Card;