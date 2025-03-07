import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
     justify-content: space-between;
     align-items: center;
     max-width: 100%;
     padding: 1rem;
     /* position: fixed;
     top: 0; */
     background-color: #fff;
     z-index: 1;
     box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
`;

export const ImageLogo = styled.img`
    width: 8rem;
     height: 3.5rem;
     object-fit: cover;
     cursor: pointer;
`;

export const InputSpace = styled.div`
    position: relative;
  width: 200px;
  display: flex;
  align-items: center; 

  input {
    outline: none;
    font-size: 1rem;
    padding: 0.6rem;
    background-color: #f5f5f5;
    border: none;
    width: 100%;
    border-radius: 0.3rem;

    &:focus {
      border: 1px solid #0bade3;
    }
  }
`;


export const Button = styled.button`
  outline: none;
  font-size: 1rem;
  padding: 0.4rem;
  color: #fff;
  border: none;
  background-color: #0bade3;
  border-radius: 0.3rem;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 0.1rem;
  transition: all 0.4s ease-in-out;
  font-family: Roboto, arial;
  text-transform: uppercase;

 &:hover{
    background-color: #0a86af;
 }
`;