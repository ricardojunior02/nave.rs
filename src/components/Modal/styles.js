import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Background = styled.div`
  height: 100vh;
  background: #21212190;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  
  position: fixed;
  top: 0;	
  bottom: 0;	
  right: 0;	
  left: 0;

  @media (max-width: 414px){
    height: 100%;
    background: #21212190;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    z-index: 2;

    padding: 15px 15px;

    position: fixed;
    top: 0;	
    bottom: 0;	
    right: 0;	
    left: 0;
  }
`;

export const ModalWrapper = styled.div`
  width: 1006px;
  height: 503px;
  box-shadow: 0 5px 16px #21212110;
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 2;


  @media (max-width: 768px){
    width: 750px;
    height: 375px;
    box-shadow: 0 5px 16px #21212110;
    background: #ffffff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 2;
  }

  @media (max-width: 414px){
    width: 300px;
    height: 600px;
    box-shadow: 0 5px 16px #21212110;
    background: #ffffff;
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    position: relative;
    
    z-index: 2;
  }
`;

export const ModalImg = styled.img`
  width: 100%;
  height: auto;
  background: #212121;

  z-index: 2;

  @media (max-width: 414px){
    height: 100%;
    background: #212121;

    z-index: 2;
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  line-height: 1.8;
  padding-left: 5px; 
  color: #141414;
  z-index: 2;

  h2, p, h3 {
    font-family: "Montserrat", sans-serif;
  }

  h2, h3 {
    font-weight: 600;
  }

  p {
    margin-bottom: 5px;
    font-weight: 400;
  }

  @media (max-width: 414px){
    background: #fff;
    z-index: 2;
  }
`;


export const Buttons = styled.div`
  position: absolute;
  bottom: 20px;

  button {
    border: none;
    cursor: pointer;
    background: transparent;
  }

  a {
    margin-left: 10px;
  }

  @media (max-width: 414px){
    position: relative;
    bottom: 0;

    button {
      border: none;
      cursor: pointer;
    }

    a {
      margin-left: 10px;
    }
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 2;
`;


