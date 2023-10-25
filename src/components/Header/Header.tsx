import React, { useEffect, useState } from "react";

import * as S from "./styles";
import { Moon, Globe2, Sun } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setTheme } from "../../redux/reducer/theme/theme";

import Language from "../Language/Language";
import { setLanguage } from "../../redux/reducer/language/language";
import { Button } from "../Button/Button";

export const Header: React.FC = () => {
  const { theme } = useAppSelector((state) => state.theme);
  const { language } = useAppSelector((state) => state.language);

  const [text, setText] = useState<any>();

  useEffect(() => {
    if (language === "english") {
      setText({
        english: "English",
        portuguese: "Portuguese",
        spanish: "Spanish",
      });
    } else if (language === "portuguese") {
      setText({
        english: "Inglês",
        portuguese: "Português",
        spanish: "Espanhol",
      });
    } else {
      setText({
        english: "Inglés",
        portuguese: "Portugués",
        spanish: "Español",
      });
    }
  }, [language]);

  const dispatch = useAppDispatch();

  const handleScroll = () => {
    const targetElement = document.getElementById("contact");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <S.Container>
      <Button
        label={
          language === "english"
            ? "Contact"
            : language === "portuguese"
            ? "Contato"
            : "Contacto"
        }
        type="primary"
        onClick={handleScroll}
      />
      <S.Icon>
        <Language
          side="bottom"
          trigger={
            <Globe2 color={theme ? "black" : "white"} width={24} height={24} />
          }
          content={
            <>
              <S.ItemList onClick={() => dispatch(setLanguage("portuguese"))}>
                {text && text.portuguese}
              </S.ItemList>
              <S.ItemList onClick={() => dispatch(setLanguage("english"))}>
                {text && text.english}
              </S.ItemList>
              <S.ItemList onClick={() => dispatch(setLanguage("spanish"))}>
                {text && text.spanish}
              </S.ItemList>
            </>
          }
        />
      </S.Icon>
      <S.Icon right>
        {theme ? (
          <Moon
            color={"black"}
            width={24}
            height={24}
            onClick={() => dispatch(setTheme(!theme))}
          />
        ) : (
          <Sun
            color={"white"}
            width={26}
            height={26}
            onClick={() => dispatch(setTheme(!theme))}
          />
        )}
      </S.Icon>
    </S.Container>
  );
};
