import styled from "@emotion/styled";
// npm i @emotion/react
// npm i @emotion/styled @emotion/reactn

export const UlNavigateStyle = styled.ul`
display: flex;
gap: 7px;

`


// це щоб в реат дев тул в компонентс замість лістайлед було кокнртне імя 
// використ для тестів щбо зручніше назви вказувати 

UlNavigateStyle.displayName = "UlNavigateStyle"
