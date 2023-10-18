import styled from "styled-components";

interface Props {
  type: "primary" | "secondary";
}

export const Container = styled.button<Props>`
  cursor: pointer;
  width: fit-content;
  padding: 16px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.type === "primary" ? props.theme.colors.primary : "transparent"};
  border: 1px solid ${(props) => props.theme.colors.primary};
`;

export const Label = styled.text<Props>`
  color: ${(props) =>
    props.type === "primary"
      ? props.theme.colors.background
      : props.theme.colors.text};
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
`;
