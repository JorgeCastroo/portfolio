import React from "react";

import * as S from "./styles";
import { useAppSelector } from "../../redux/hooks";
import { Mail, PhoneCall } from "lucide-react";
import { Button } from "../Button/Button";

const Contact: React.FC = () => {
  const { language } = useAppSelector((state) => state.language);

  return (
    <S.Container id="contact">
      <S.Title>
        {language === "english"
          ? "Contact"
          : language === "portuguese"
          ? "Contato"
          : "Contacto"}
      </S.Title>
      <S.WrappedInfos>
        <S.Description>
          {language === "english"
            ? "Interested in closing a partnership? Contact:"
            : language === "portuguese"
            ? "Se interessou em fechar uma parceria ? Entre em contato:"
            : "¿Interesado en cerrar una sociedad? Entre en contacto:"}
        </S.Description>
      </S.WrappedInfos>
      <S.WrappedRow>
        <S.GroupButton>
          <Button type="primary" asIcon={<Mail color="black" />} />
          <S.SubTitle>jorgeeduardo27007@gmail.com</S.SubTitle>
        </S.GroupButton>
        <S.GroupButton>
          <Button type="primary" asIcon={<PhoneCall color="black" />} />
          <S.SubTitle>(71) 9 8316-4820</S.SubTitle>
        </S.GroupButton>
      </S.WrappedRow>
    </S.Container>
  );
};

export default Contact;
