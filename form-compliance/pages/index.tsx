import CardHome from "@/shared/layout/card-home";
import Header from "@/shared/layout/header";
import styled from "styled-components";
import { getField, getLanguage } from "@/i18n";
import { useEffect, useState } from "react";

const Home = () => {
  const [lang, setLang] = useState("pt");

  useEffect(() => {
    setLang(getLanguage());
  });

  return (
    <PageStyle>
      <Header lang={lang} />
      <ContainerCentral>
        <TitleContainerStyle>
          <TitleStyle>{getField("pages.home.title", lang)}</TitleStyle>
        </TitleContainerStyle>
        <SectionStyle>
          <HomeArt1Style src="/assets/art1.png" />
          <CardHome />
          <HomeArt2Style src="/assets/art2.png" />
        </SectionStyle>
      </ContainerCentral>
    </PageStyle>
  );
};

const PageStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
  margin: 0;
`;

const SectionStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ContainerCentral = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70%;
  width: 100vw;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const TitleContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60vw;

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

const TitleStyle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: "#232229";
  margin-bottom: 5vh;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const HomeArt1Style = styled.img`
  margin-right: 5vw;
  height: 400px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const HomeArt2Style = styled.img`
  margin-left: 5vw;
  height: 400px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Home;
