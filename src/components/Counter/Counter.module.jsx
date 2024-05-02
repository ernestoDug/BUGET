import styled from "@emotion/styled";
// npm i @emotion/react
// npm i @emotion/styled @emotion/reactn

export const FormStyleStatisttics = styled.form`
  max-width: 350px;
  display: flex;
  flex-flow: column nowrap;
  gap: 12px;
  margin: 0;
  padding: 20px;
  border-radius: 7px;
  /* градиенто стрички  */
  background: repeating-linear-gradient(
    -30deg,
    #291810,
    #291810 8px,
    #6ab1d7 10px,
    #6ab1d7 14px
  );
  max-width: 450px;
  box-shadow: 0px 4px 4px rgba(67, 66, 66, 0.04);
  font-family: "Oswald", sans-serif;
`;



export const H4StepStyle = styled.h4`
  background-image: linear-gradient(
    45deg,
    #33d9de 0%,
    #002878 50%,
    #6ab1d7 100%
  );
  color: #f4f3f0;
  max-width: 200px;
  margin-left: 12%;
  text-align: center;
  padding: 10px;
  border-radius: 7px;
  box-shadow: 0px 4px 4px rgba(67, 66, 66, 0.04);
`;


export const H5StepStyle = styled.h5`
  background-image: linear-gradient(
    45deg,
    #002878 0%,
    #33d9de 50%,
    #6ab1d7 100%
  );
  color: #f4f3f0;
  max-width: 450px;
  text-align: center;
  padding: 20px;
  border-radius: 7px;
  box-shadow: 0px 4px 4px rgba(67, 66, 66, 0.04);
`;




export const ButtonStepStyle = styled.button`
  text-decoration: none;
  display: inline-block;
  padding: 12px 40px;
  margin: 10px 20px;
  border-radius: 30px;
  background-image: linear-gradient(
    45deg,
    #6ab1d7 0%,
    #33d9de 50%,
    #002878 100%
  );
  background-position: 100% 0;
  background-size: 200% 200%;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: 300;
  color: white;
  box-shadow: 0 16px 32px 0 rgba(0, 40, 120, 0.35);
  transition: 0.5s;

  :hover,
  :focus {
    box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);
    background-position: 0 0;
  }
`;

export const InputStatisticsStyle = styled.input`
  padding: 12px;
  background-color: #6ab1d7;
  border-width: 0;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 7px;
`;

// це щоб в реат дев тул в компонентс замість лістайлед було кокнртне імя
// використ для тестів щбо зручніше назви вказувати
H4StepStyle.displayName = "H4StepStyle";
ButtonStepStyle.displayName = "ButtonStepStyle";
FormStyleStatisttics.displayName = "FormStyleStatisttics";
InputStatisticsStyle.displayName = "InputStatisticsStyle";
