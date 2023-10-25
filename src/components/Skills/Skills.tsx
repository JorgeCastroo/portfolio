import React from "react";

import * as S from "./styles";
import { useAppSelector } from "../../redux/hooks";
import node from "../../assets/nodejs.png";
import expo from "../../assets/expo.png";
import axios from "../../assets/axios.svg";
import redux from "../../assets/redux.png";
import typescript from "../../assets/typescript.png";
import react from "../../assets/react.png";
import git from "../../assets/git.png";
import jest from "../../assets/jest.png";
import reactnative from "../../assets/reactnative.png";
import firebase from "../../assets/firebase.png";
import sql from "../../assets/slq.png";
import aws from "../../assets/aws.png";

const Skills: React.FC = () => {
  const { language } = useAppSelector((state) => state.language);

  return (
    <S.Container>
      <S.Title>
        {language === "english"
          ? "Skills"
          : language === "portuguese"
          ? "Habilidades"
          : "Habilidades "}
      </S.Title>
      <S.GridProjects>
        <S.Skills src={redux} />
        <S.Skills src={react} />
        <S.Skills src={typescript} />
        <S.Skills src={git} />
        <S.Skills src={jest} />
        <S.Skills src={reactnative} />
        <S.Skills src={axios} width={300} />
        <S.Skills src={firebase} width={400} />
        <S.Skills src={node} width={400} />
        <S.Skills src={expo} width={300} />
        <S.Skills src={sql} width={250} />
        <S.Skills src={aws} width={250} />
      </S.GridProjects>
    </S.Container>
  );
};

export default Skills;
