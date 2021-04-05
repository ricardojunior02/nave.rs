import styled from 'styled-components';


export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 448px;
  height: 408px;
  border: 1px solid #212121;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 235.34px;
    height: 60px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-top: 30px;
  } 

  form label {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.8em;
    margin-bottom: 4px;
 

    text-align: left;
  }

  form input {
    width: 384px;
    height: 40px;
    border: 1px solid #424242;
    padding: 5px;
    outline: none;
    font-family: "Montserrat", sans-serif;
  }

  form input::placeholder {
    color: #212121;
  }

  form button {
    width: 384px;
    height: 40px;
    color: #ffffff;
    background: #212121;
    border: none;
    margin-top: 20px;

    font-family: "Montserrat", sans-serif;
    font-weight: 600;

    transition: 0.3s;

    cursor: pointer;
  }

  form button:hover {
    opacity: 0.8;
  }
`;
