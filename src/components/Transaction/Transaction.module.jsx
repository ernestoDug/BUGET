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
  width: 30%;
  box-shadow: 0px 4px 4px rgba(67, 66, 66, 0.04);
`;
