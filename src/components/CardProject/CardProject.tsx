import React from "react";

import * as S from "./styles";

import { Icon } from "../Icon/Icon";
import { Button } from "../Button/Button";
import { useAppSelector } from "../../redux/hooks";

type CardProjectProps = {
  image: string;
  title: string;
  description: string;
  link?: string;
  tecnologies?: string[];
};

export const CardProject: React.FC<CardProjectProps> = ({
  image,
  title,
  description,
  link,
  tecnologies,
}) => {
  const { theme } = useAppSelector((state) => state.theme);

  return (
    <S.Container>
      <S.Image src={image} height={390} />
      <S.WrappedContent>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.WrappedContent>
      <S.WrappedRow>
        {tecnologies?.map((tecnologie) => (
          <Icon icon={tecnologie} size={30} color={theme ? "black" : "white"} />
        ))}
      </S.WrappedRow>
      <S.WrappedRow>
        <Button
          label="View demo"
          type="primary"
          onClick={() => window.open(link)}
        />
      </S.WrappedRow>
    </S.Container>
  );
};
