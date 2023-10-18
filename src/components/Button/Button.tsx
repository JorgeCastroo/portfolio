import React, { ReactElement } from "react";

import * as S from "./styles";

type ButtonProps = {
  type: "primary" | "secondary";
  label?: string;
  asIcon?: ReactElement;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  type,
  asIcon,
  onClick,
}) => {
  return (
    <S.Container type={type} onClick={onClick}>
      {!asIcon && <S.Label type={type}>{label}</S.Label>}
      {asIcon && asIcon}
    </S.Container>
  );
};
