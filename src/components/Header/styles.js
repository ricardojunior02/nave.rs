import styled from 'styled-components';

export const Container = styled.div``;

export const Head = styled.header`
  display: flex;
  justify-content: space-between;

  max-width: 1280px;
  margin: 0 auto;
  padding: 15px 15px;

  img {
    width: 260px;
    height: auto;
  }

  button {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 14px;
    font-weight: 24px;
    border: none;
    color: #000;

    background: transparent;

    cursor: pointer;

    transition: 1.5s;
  }

  button:hover {
    transform: scale(1.5);
  }

  @media (max-width: 1024px){

  }
`;