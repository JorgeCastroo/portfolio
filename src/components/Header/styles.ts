import styled from "styled-components";

interface Props {
  right?: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  justify-content: flex-end;
  height: 70px;
  gap: 20px;
  position: fixed;
  z-index: 99;
  box-shadow: ${(props) => props.theme.boxShadow.primary};
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  @media (max-width: 768px) {
    height: 50px;
  }
`;
export const Icon = styled.div<Props>`
  margin-right: ${(props) => (props.right ? "50px" : "0px")};

  :hover {
    cursor: pointer;
  }
`;

export const ItemList = styled.div`
  padding: 8px 5px;
  :hover {
    cursor: pointer;
  }
`;
