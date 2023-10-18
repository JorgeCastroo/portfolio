import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px;
  background-color: ${(props) => props.theme.colors.background};
  padding: 70px 120px;
  @media (max-width: 768px) {
    padding: 0px;
  }
`;
