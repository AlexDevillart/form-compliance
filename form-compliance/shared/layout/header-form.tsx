import Link from "next/link";
import styled from "styled-components";
import logoCasaEVideo from "@/public/assets/logo-casa-e-video.png";
import { FC } from "react";

const HeaderForm: FC = () => {
  return (
    <HeaderStyle>
      <Link href="/onboarding">
        <img src={logoCasaEVideo.src} alt="Logo of Casa&Video" />
      </Link>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  display: flex;
  width: 100vw;
  height: 56px;
  background-color: #fef106;
  border-bottom: 0;
  justify-content: center;
  align-items: center;
`;

export default HeaderForm;
