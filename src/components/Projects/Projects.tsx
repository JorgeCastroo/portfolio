import React from "react";

import * as S from "./styles";
import { CardProject } from "../CardProject/CardProject";
import juridika from "../../assets/juridika.png";
import iapcursos from "../../assets/iapcursos.jpg";
import boonsplanner from "../../assets/boonsplanner.jpg";

export const Projects: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Projects</S.Title>
      <S.GridProjects>
        <CardProject
          title="IAP Cursos on-line"
          image={iapcursos}
          description="Trata-se de um site de e-learning dedicado ao estudo para concursos públicos, onde participei ativamente no desenvolvimento. Este projeto oferece uma plataforma abrangente para estudantes e profissionais que buscam se preparar para concursos, proporcionando acesso a uma variedade de recursos educacionais e ferramentas úteis."
          link="https://www.iapcursosonline.com/"
          tecnologies={["react", "typescript", "next"]}
        />
        <CardProject
          image={juridika}
          title="Juridika"
          description="     Trata-se de um aplicativo dedicado ao estudo do direito, uma
          iniciativa na qual assumi a responsabilidade por todos os aspectos do
          desenvolvimento. Este aplicativo oferece uma plataforma abrangente
          para estudantes e profissionais da área jurídica, fornecendo acesso a
          uma variedade de recursos educacionais e ferramentas úteis."
          tecnologies={["react", "expo", "typescript"]}
        />
        <CardProject
          image={boonsplanner}
          title="BoonsPlanner"
          description="     Trata-se de um aplicativo dedicado a saúde pessoal e familiar, uma
          iniciativa na qual assumi a responsabilidade por todos os aspectos do
          desenvolvimento. Desde a idealização ao desenvolvimento e publicação. Este aplicativo oferece funcionalidades abrangentes para o usuário ter um controle melhor sobre sua saúde."
          tecnologies={["react", "expo", "node", "typescript"]}
        />
      </S.GridProjects>
    </S.Container>
  );
};
