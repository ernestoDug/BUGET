import styled from '@emotion/styled';
// npm i @emotion/react
// npm i @emotion/styled @emotion/reactn


export const  UlStyle = styled.ul `
    
display: flex;
flex-flow: column nowrap;
gap: 6px;
padding-left:0;

`;
// це щоб в реат дев тул в компонентс замість лістайлед було кокнртне імя 
// використ для тестів щбо зручніше назви вказувати 
UlStyle.displayName = 'UlStyle';
