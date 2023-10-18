import React from "react";

import * as S from "./styles";
import Background from "../../assets/background.svg";
import Me from "../../assets/developer.jpeg";

import { Button } from "../Button/Button";
import { Github, Linkedin } from "lucide-react";

export const AboutMe: React.FC = () => {
  return (
    <S.Container>
      <S.WrappedInfos>
        <S.Title>Hi,I'm Jorge Castro</S.Title>
        <S.SubTitle>Full-Stack Developer</S.SubTitle>
        <S.Description>
          Developer focused on front-end and mobile.
        </S.Description>

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
        </S.WrappedButton>
      </S.WrappedInfos>
      <S.WrappedImage>
        <S.BackgroundMe width={450} src={Background} />
        <S.Me src={Me} width={250} />
      </S.WrappedImage>
    </S.Container>
  );
};
