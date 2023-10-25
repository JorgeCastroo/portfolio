import React from "react";

import * as S from "./styles";
import { Header } from "./components/Header/Header";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Projects } from "./components/Projects/Projects";
import GlobalStyle from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { useAppSelector } from "./redux/hooks";

import darkTheme from "./styles/darkTheme.ts";
import light from "./styles/lightTeam.ts";
import Footer from "./components/Footer/Footer.tsx";
import Contact from "./components/Contact/Contact.tsx";
import Skills from "./components/Skills/Skills.tsx";

export const App: React.FC = () => {
  const { theme } = useAppSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme ? light : darkTheme}>
      <GlobalStyle />
      <S.Container>
        <Header />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </S.Container>
    </ThemeProvider>
  );
};
