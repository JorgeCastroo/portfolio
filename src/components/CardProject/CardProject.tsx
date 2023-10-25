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
  const { language } = useAppSelector((state) => state.language);

  return (
    <S.Container>
      <S.Image src={image} height={390} />
      <S.WrappedContent>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.WrappedContent>
      <S.WrappedRow>
        {tecnologies?.map((tecnologie) => (
          <Icon
            icon={tecnologie}
            width={
              tecnologie === "node"
                ? 100
                : tecnologie === "expo"
                ? 100
                : tecnologie === "sql"
                ? 100
                : tecnologie === "javascript"
                ? 70
                : 30
            }
            color={theme ? "black" : "white"}
          />
        ))}
      </S.WrappedRow>
      <S.WrappedRow>
        {link && (
          <Button
            label={
              language === "english"
                ? "View project"
                : language === "portuguese"
                ? "Ver projeto"
                : "Ver proyecto"
            }
            type="primary"
            onClick={() => window.open(link)}
          />
        )}
      </S.WrappedRow>
    </S.Container>
  );
};
