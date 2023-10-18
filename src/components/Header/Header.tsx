import React from "react";

import * as S from "./styles";
import { Moon, Globe2, Sun } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setTheme } from "../../redux/reducer/theme/theme";

import Language from "../Language/Language";
import { setLanguage } from "../../redux/reducer/language/language";

export const Header: React.FC = () => {
  const { theme } = useAppSelector((state) => state.theme);
  const { language } = useAppSelector((state) => state.language);
  console.log(language);

  const dispatch = useAppDispatch();
  return (
    <S.Container>
      <S.Icon>
        <Language
          side="bottom"
          trigger={
            <Globe2 color={theme ? "black" : "white"} width={24} height={24} />
          }
          content={
            <>
              <div onClick={() => dispatch(setLanguage("portuguese"))}>
                Portugues
              </div>
              <div onClick={() => dispatch(setLanguage("english"))}>Ingles</div>
              <div onClick={() => dispatch(setLanguage("spanish"))}>
                Espanhol
              </div>
            </>
          }
        />
      </S.Icon>
      <S.Icon>
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
