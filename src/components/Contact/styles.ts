import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  padding: 0px 120px;
  gap: 10px;
  align-items: center;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;
export const Title = styled.text`
  font-size: 56px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
`;

export const WrappedInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    padding: 20px;
  }
`;

export const SubTitle = styled.text`
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
`;

export const WrappedRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin-top: 10px;
`;
export const Description = styled.text`
  font-size: 22px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.text};
`;
export const GroupButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;
