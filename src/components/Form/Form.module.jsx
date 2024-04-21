
import styled from '@emotion/styled';
// npm i @emotion/react
// npm i @emotion/styled @emotion/reactn


export const  FormStyle = styled.form `
max-width: 350px;
  margin:  0;
  padding: 20px;
  border-radius: 7px;
  /* градиенто стрички  */
  background: repeating-linear-gradient(-30deg, #291810, #291810 8px, #FAAB1B 10px, #FAAB1B 14px);
width: 30%;
  box-shadow: 0px 4px 4px rgba(67, 66, 66, 0.04);  
  font-family: 'Oswald', sans-serif;
  `

  export const InputStyle = styled.input `
    
    padding: 12px;
   background-color: #FAAB1B;
   border-width: 0;
   text-transform: uppercase;
   cursor: pointer;
   border-radius: 7px;
  `


export const ButtonStyle = styled.button`
     display: inline-block;
   padding: 5px 10px;
   background-color: #FAAB1B;
   margin-left: 12px;
   border-radius: 7px;
box-shadow: 0px 4px 4px rgba(67, 66, 66, 0.04);

transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 200ms cubic-bezier(0.6, 0, 0.4, 1);
  transition: border 200ms cubic-bezier(0.6, 0, 0.4, 1);
  transition: transform 200ms cubic-bezier(0.6, 0, 0.4, 1);

  :hover,
  :focus {
    color: #f3f2ed;
    border: 2px dashed  #FAAB1B;
    transform: scale(1.1);
    background-image: none;
    background-color:#121111;
  }
`