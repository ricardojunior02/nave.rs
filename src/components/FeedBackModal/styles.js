import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Container = styled.div`
  background: #21212190;
  display: flex;
  justify-content: center;
  align-items: center;
  
  position: fixed;
  top: 0;	
  bottom: 0;	
  right: 0;	
  left: 0;

  z-index: 2;
`;

export const Content = styled.div`
  width:  592px;
  height: ${props => props.del ? 233 : 160};
  background: #ffffff;

  display: flex;
  flex-direction: column;
  flex: 1;
  
  position: relative;

  h1, p {
    padding: 20px;
    font-family: "Montserrat", sans-serif;
  }

  h1 {
    font-weight: 600;
  }

  p {
    font-weight: 400;
  }

  @media (max-width: 414px){
    width: 300px;
    height: auto;
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


export const CloseModalButton = styled(MdClose)`
  background: transparent;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;

  opacity: ${(props) => props.del ? 0 : 1};

  @media (max-width: 414px){
    background: transparent;
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 8px;
    width: 32px;
    height: 32px;

    opacity: ${(props) => props.del ? 0 : 1};
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;

  padding: 10px;

  button {
    width: 176px;
    height: 40px;
    background: transparent;
    color: #212121;
    
    border: 1px solid #212121;

    cursor: pointer;
  }

  button + button {
    width: 176px;
    height: 40px;
    background: #212121;
    color: #ffffff;
    
    border: none;

    margin-left: 5px;

    cursor: pointer;
  }

  @media (max-width: 414px){
    button {
      width: 140px;
      height: 40px;
      background: transparent;
      color: #212121;
      
      border: 1px solid #212121;

      cursor: pointer;
    }

    button + button {
      width: 140px;
      height: 40px;
      background: #212121;
      color: #ffffff;
      
      border: none;

      margin-left: 5px;

      cursor: pointer;
    }
  }
`;




