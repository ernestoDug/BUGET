import styled from '@emotion/styled';

// npm i @emotion/react
// npm i @emotion/styled @emotion/react


export const  H4NotTransactionStyle = styled.h4 `
   background-color: #fa921b;
border-radius: 7px;
border: 2px dashed #151414;
max-width: 450px;
padding: 20px;
text-align: center;
  max-width: 380px;
`;

export const  H4BalanceStyle = styled.h4 `
 padding: 20px;
  border-radius: 7px;
  /* ось колір в залежності від пропсів 
  хочь і лається але працює 
  */
  background: #74ed4f;
  max-width: 450px;
  box-shadow: 0px 4px 4px rgba(67, 66, 66, 0.04);
  border: 2px dashed #151414;
`



H4NotTransactionStyle.displayName = 'H4NotTransactionStyle';
H4BalanceStyle.displayName ='H4BalanceStyle.displayName';

