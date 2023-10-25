import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  gap: 20px;
  box-shadow: ${(props) => props.theme.boxShadow.primary};
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  color: ${(props) => props.theme.colors.textSecondary};
  margin-top: 50px;
`;
