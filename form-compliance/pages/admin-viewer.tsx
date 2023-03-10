import { createPDF } from "@/services/create-pdf";
import Header from "@/shared/layout/header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

const AdminViewer = () => {
  const router = useRouter();

  const [pdf, setPdf] = useState<any>(null);

  const params = router.query;

  const generatePdf = async () => {
    const pdfGenerated = await createPDF(params);
    setPdf(pdfGenerated);
  };

  const handleClick = async () => {
    window.open(await pdf.output("bloburl"));
  };

  useEffect(() => {
    generatePdf().catch(console.error);
  });

  return (
    <>
      <Header lang="pt" />
      <ContainerStyle>
        <TitleStyle>
          Você está abrindo um Pdf Compliance deseja continuar?
        </TitleStyle>
        <ButtonStyle onClick={handleClick}>Seguir para PDF</ButtonStyle>
      </ContainerStyle>
    </>
  );
};

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const TitleStyle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #000000;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 300px;
  background-color: #fef106;
  border-radius: 8px;
  color: #000;
  border: 0;
  font-size: 24px;
  font-weight: 700;
  margin-top: 40px;
  cursor: pointer;
`;

export default AdminViewer;
