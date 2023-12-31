import styled from "styled-components";

export const Container = styled.div`
  max-width: 777px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.boxShadow.primary};
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
`;

export const WrappedContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

export const Title = styled.text`
  color: ${(props) => props.theme.colors.text};
  font-size: 28px;
  font-weight: 700;
`;

export const Description = styled.text`
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  font-weight: 400;
  text-align: justify;
`;

export const WrappedRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding: 10px;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;
