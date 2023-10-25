import React, { useEffect, useState } from "react";

import * as S from "./styles";
import { CardProject } from "../CardProject/CardProject";
import juridika from "../../assets/juridika.png";
import iapcursos from "../../assets/iapcursos.jpg";
import boonsplanner from "../../assets/boonsplanner.jpg";
import odontovirtual from "../../assets/odontovirtual.png";
import gym from "../../assets/gymapp.png";

import { useAppSelector } from "../../redux/hooks";
import Text from "../../assets/text.json";

export const Projects: React.FC = () => {
  const { language } = useAppSelector((state) => state.language);
  const [text, setText] = useState<any>();

  useEffect(() => {
    if (language === "english") {
      setText(Text.english.projects);
    } else if (language === "portuguese") {
      setText(Text.portuguese.projects);
    } else {
      setText(Text.spanish.projects);
    }
  }, [language]);

  return (
    <S.Container>
      <S.Title>
        {language === "english"
          ? "Projects"
          : language === "portuguese"
          ? "Projetos"
          : "Proyectos"}
      </S.Title>
      {text && (
        <S.GridProjects>
          <CardProject
            title="Odonto Virtual"
            image={odontovirtual}
            description={text.odontovirtual.description}
            link="https://www.odontovirtual.com/"
            tecnologies={["react", "redux", "javascript", "next"]}
          />
          <CardProject
            image={boonsplanner}
            title="BoonsPlanner"
            description={text.boonsplanner.description}
            tecnologies={[
              "react",
              "redux",
              "expo",
              "node",
              "javascript",
              "sql",
            ]}
          />
          <CardProject
            title="IAP Cursos on-line"
            image={iapcursos}
            description={text.iap.description}
            link="https://www.iapcursosonline.com/"
            tecnologies={["react", "redux", "javascript", "next"]}
          />
          <CardProject
            image={juridika}
            title="Juridika"
            description={text.juridika.description}
            tecnologies={["react", "expo", "javascript"]}
          />

          <CardProject
            image={gym}
            title="Gym Fitness"
            description={text.gym.description}
            tecnologies={[
              "react",
              "redux",
              "javascript",
              "expo",
              "node",
              "sql",
            ]}
          />
        </S.GridProjects>
      )}
    </S.Container>
  );
};
