import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px;

  h1 {
   font-family: "Montserrat", sans-serif;
   font-size: 40px;
   line-height: 48px;
   font-weight: 600;
  }

  a {
   width: 176px;
   height: 40px;
   text-decoration: none;
   font-family: "Montserrat", sans-serif;
   font-weight: 600;
   color: #ffffff;
   background: #212121;

   display: flex;
   justify-content: center;
   align-items: center;

   transition: 1.5s;
 }

  a:hover {
   opacity: 0.8;
 }
`;

export const Main = styled.main`
  max-width: 1280px;
  margin-top: 50px;

  ul {
   display: flex;
   flex-wrap: wrap;
  }

 @media (max-width: 414px){
   ul {
    display: flex;
    justify-content: center;
    padding: 10px;
   }
  }
  
`;
