import styled from "styled-components";

export const Container = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
  padding: 0px 120px;
  @media (max-width: 768px) {
    padding: 0px 20px;
  }
`;

export const Title = styled.text`
  font-size: 56px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
`;
export const GridProjects = styled.div`
  display: grid;
  margin: 0 auto;

  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Skills = styled.img`
  @media (max-width: 768px) {
    width: 30%;
  }
`;
