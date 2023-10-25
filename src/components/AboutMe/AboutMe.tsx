import React, { useState, useEffect } from "react";

import * as S from "./styles";
import Background from "../../assets/background.png";
import Me from "../../assets/developer.jpg";

import { Button } from "../Button/Button";
import { FileDown, Github, Linkedin } from "lucide-react";
import Text from "../../assets/text.json";
import curriculum from "../../assets/cvJorgecastro.pdf";

import { useAppSelector } from "../../redux/hooks";

export const AboutMe: React.FC = () => {
  const { language } = useAppSelector((state) => state.language);
  const [text, setText] = useState<any>();

  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = curriculum;
    link.download = "cvjorgecastro.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (language === "english") {
      setText(Text.english.aboutMe);
    } else if (language === "portuguese") {
      setText(Text.portuguese.aboutMe);
    } else {
      setText(Text.spanish.aboutMe);
    }
  }, [language]);

  return (
    <S.Container>
      <S.WrappedInfos>
        {text && (
          <>
            <S.Title>{text.title}</S.Title>
            <S.SubTitle>{text.subtitle}</S.SubTitle>
            <S.Description>{text.description}</S.Description>
          </>
        )}
        <S.WrappedButton>
          <Button
            type="primary"
            asIcon={<Github color="black" />}
            onClick={() => window.open("https://github.com/JorgeCastroo")}
          />
          <Button
            type="primary"
            asIcon={<Linkedin color="black" />}
            onClick={() =>
              window.open("https://www.linkedin.com/in/jorge-castro-930996207/")
            }
          />
          <Button
            type="primary"
            asIcon={<FileDown color="black" />}
            onClick={handleDownloadClick}
          />
        </S.WrappedButton>
      </S.WrappedInfos>
      <S.WrappedImage>
        <S.BackgroundMe width={450} src={Background} />
        <S.Me src={Me} width={250} />
      </S.WrappedImage>
    </S.Container>
  );
};
