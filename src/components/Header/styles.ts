import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 20px;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 20px;
  }
`;
export const Icon = styled.div`
  :hover {
    cursor: pointer;
  }
`;
