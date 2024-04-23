import styled from "@emotion/styled";
// npm i @emotion/react
// npm i @emotion/styled @emotion/reactn

export const LiStyle = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  padding: 20px;
  border-radius: 7px;
  /* ось колір в залежності від пропсів 
  хочь і лається але працює 
  */
  background: ${({value}) => value <= 0 ? "#e06311" : "#FAAB1B"};
  max-width: 450px;
  box-shadow: 0px 4px 4px rgba(67, 66, 66, 0.04);
  border: 2px dashed #151414;

`;

// це щоб в реат дев тул в компонентс замість лістайлед було кокнртне імя 
// використ для тестів щбо зручніше назви вказувати 
LiStyle.displayName = 'TransactionLiStyle';
