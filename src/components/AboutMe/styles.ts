import styled from "styled-components";

export const Container = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 120px;
  gap: 10px;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 0px;
  }
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

export const Title = styled.text`
  font-size: 56px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
`;

export const SubTitle = styled.text`
  font-size: 32px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
`;

export const Description = styled.text`
  font-size: 24px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.text};
`;

export const WrappedButton = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const WrappedImage = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const BackgroundMe = styled.img`
  position: absolute;
  z-index: 2;
  @media (max-width: 768px) {
    width: 200px;
  }
`;
export const Me = styled.img`
  z-index: 10;
  border-radius: 100%;
  @media (max-width: 768px) {
    width: 90px;
    height: 90px;
  }
`;
