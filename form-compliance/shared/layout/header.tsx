import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { FC, SyntheticEvent } from "react";
import { getField } from "@/i18n";

interface HeaderProps {
  lang: string;
}

const Header: FC<HeaderProps> = ({ lang }) => {
  const router = useRouter();

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    router.push("/onboarding");
  };

  return (
    <HeaderStyle>
      <ContainerStyle>
        <ContentLeftStyle>
          <Link href="/">
            <FigureStyle>
              <img
                src="/assets/logo-casa-e-video.png"
                alt="Logo Casa & Video"
              />
            </FigureStyle>
          </Link>
          <LinksHeaderStyle>
            <Link href="/about">
              {getField("components.header.link.about", lang)}
            </Link>
            <Link href="/purpose">
              {getField("components.header.link.purpose", lang)}
            </Link>
            <Link href="/credits">
              {getField("components.header.link.credits", lang)}
            </Link>
          </LinksHeaderStyle>
        </ContentLeftStyle>
        <ButtonStyle onClick={handleClick}>
          {getField("components.header.button", lang)}
        </ButtonStyle>
      </ContainerStyle>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 86px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const ContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 140px;
  margin-right: 140px;
  height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const ContentLeftStyle = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const FigureStyle = styled.figure`
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0;
`;

const LinksHeaderStyle = styled.div`
  display: flex;
  align-items: center;
  color: "#86929";

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin-left: 30px;
    text-decoration: none;
    font-size: 14px;
    transition: all 0.2s ease-in-out;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100px;
  background-color: #dad9e0;
  color: #000;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #fef106;
  }
`;

export default Header;
