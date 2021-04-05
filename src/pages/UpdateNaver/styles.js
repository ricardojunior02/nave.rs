import styled from 'styled-components';


export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  padding: 0 15px;

  @media (max-width: 414px) {
    max-width: 360px;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
  }


  nav {
    display: flex;
    align-items: center;

    margin-top: 30px;
    padding: 15px 15px;
  }

  nav img {
    width: 15px;
    height: 20px;
  }

  nav h3 {
    margin-left: 25px;
  }

  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;

    position: relative;
  }

  @media (max-width: 414px) {
    form {
      display: flex;
      flex-direction: column;
    }
  }

  form label {
    display: flex;
    flex-direction: column;
    font-weight: 600;
    line-height: 18px;
    font-size: 14px;
    margin-bottom: 5px;
  }

  form label,
  input,
  button {
    font-family: "Montserrat", sans-serif;
  }

  form label input {
    height: 40px;
    border: 1px solid #424242;
    padding: 5px;
    outline: none;
  }

  @media (max-width: 414px) {
    form label input {
      width: 100%;
      border: 1px solid #424242;
      padding: 5px;
      outline: none;
    }
  }

  form button {
    width: 150px;
    height: 40px;
    border: none;
    background: #212121;
    color: #ffffff;

    margin-top: 5px;

    cursor: pointer;

    position: absolute;
    right: 0;

    transition: 1.2s;
  }

  form button:hover {
    opacity: 0.8;
  }

  @media (max-width: 414px) {
    form button {
      width: 100%;
      border: none;
      background: #212121;
      color: #ffffff;

      margin-top: 5px;

      cursor: pointer;

      position: absolute;
      right: 0;

      transition: 1.2s;
    }

    form button:hover {
      opacity: 0.8;
    }
  }
`;


