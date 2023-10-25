import React from "react";

import * as S from "./styles";
import { useAppSelector } from "../../redux/hooks";

const Footer: React.FC = () => {
  const { language } = useAppSelector((state) => state.language);

  return (
    <S.Container>
      {language === "english"
        ? "© Coded by Jorge Castro"
        : language === "portuguese"
        ? "© Desenvolvido por Jorge Castro"
        : "© Desarrollado por Jorge Castro"}
    </S.Container>
  );
};

export default Footer;
