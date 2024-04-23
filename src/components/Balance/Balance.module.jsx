import styled from '@emotion/styled';
// npm i @emotion/react
// npm i @emotion/styled @emotion/reactn


export const  H4BancrotStyle = styled.h4 `

background-color: #e06311;
max-width: 450px;
text-align: center;
padding: 20px;
  border-radius: 7px;
  box-shadow: 0px 4px 4px rgba(67, 66, 66, 0.04);  
  border: 2px dashed #151414;



`;


// це щоб в реат дев тул в компонентс замість лістайлед було кокнртне імя 
// використ для тестів щбо зручніше назви вказувати 
H4BancrotStyle.displayName = 'BalanceH4Style';