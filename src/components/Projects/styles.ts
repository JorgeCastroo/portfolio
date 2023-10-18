import styled from "styled-components";

export const Container = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 170px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Title = styled.text`
  font-size: 56px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
`;
export const GridProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
