import styled from 'styled-components';

export const Container = styled.li`
  width: calc(25% - 20px);
  height: 420px;

  display: flex;
  flex-direction: column;
  position: relative;

  margin: 10px;

  @media (max-width: 414px) {
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    position: relative;

    margin: 10px;
  }
`;

export const Avatar = styled.div`
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }
`;

export const ProfileData = styled.a`
  font-family: "Montserrat", sans-serif;
  line-height: 1.5em;

  position: absolute;
  bottom: 50px;
  left: 0;
`;

export const Footer = styled.footer`
  padding: 10px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  position: absolute;
  bottom: 0;
  left: 0;

  button {
    border: none;
    background: transparent;
    color: #212121;
    
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #212121;
  }
`;