import styled from "styled-components";
import { FC } from "react";
import { FaLock, FaCheckCircle } from "react-icons/fa";
import { useRouter } from "next/router";

// TODO: Add translations
const CardHome: FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/onboarding");
  };

  return (
    <CardContainerStyle>
      <CardHeaderStyle>
        <IconHeaderFigureStyle>
          <FaLock color="#fff" />
        </IconHeaderFigureStyle>
        <CardHeaderText>Formulário Compliance Disponível</CardHeaderText>
      </CardHeaderStyle>
      <MotivatorsContainerStyle>
        <MotivatorsTextsStyle>
          <FaCheckCircle color="#04ce04" size={24} />
          <span>Tempo & duração: 20min.</span>
        </MotivatorsTextsStyle>
        <MotivatorsTextsStyle>
          <FaCheckCircle color="#04ce04" size={24} />
          <span>Segurança & Integridade.</span>
        </MotivatorsTextsStyle>
        <MotivatorsTextsStyle>
          <FaCheckCircle color="#04ce04" size={24} />
          <span>Tecnologia & Automação.</span>
        </MotivatorsTextsStyle>
      </MotivatorsContainerStyle>
      <Button onClick={handleClick}>Realizar</Button>
    </CardContainerStyle>
  );
};

const CardContainerStyle = styled.div`
  position: relative;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 450px;
  width: 30vw;
  border-radius: 8px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

const CardHeaderStyle = styled.div`
  width: 100%;
  height: 70px;
  background-color: #25232a;
  border-radius: 8px 8px 0 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const IconHeaderFigureStyle = styled.figure`
  margin: 0;
  padding-right: 10px;
`;

const CardHeaderText = styled.span`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
`;

const MotivatorsContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MotivatorsTextsStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 10px;

  span {
    font-size: 20px;
    font-weight: 600;
    color: #232229;
    margin-left: 10px;
  }
`;

const Button = styled.button`
  position: absolute;
  bottom: -30px;
  right: 120px;
  background-color: #fef106;
  border: none;
  border-radius: 8px;
  color: #000;
  font-size: 18px;
  font-weight: 600;
  padding: 20px 80px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  @media (max-width: 768px) {
    right: 40px;
  }
`;

export default CardHome;
