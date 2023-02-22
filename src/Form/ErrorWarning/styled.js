import styled from "styled-components";

export const Frame = styled.div`
  font-family: "Roboto Mono", monospace;
  max-width: 600px;
  max-height: 400px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.bonJour};
  margin: 10px;
`;

export const Text = styled.p`
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
  color: black;
`;
