import PageHeader from "@/shared/layout/page-header";
import { createStyles, TextInput, Button, Select } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import MyDocument from "@/shared/pdf";
import nodemailer from "nodemailer";

const useStyles = createStyles((theme) => ({
  input: {
    height: "auto",
    width: "90vw",
    paddingTop: 18,
  },

  button: {
    height: "auto",
    width: "90vw",
    padding: 15,
    marginTop: 20,
    backgroundColor: "#FEF106",
    color: "#000",
    fontWeight: 700,
    fontSize: 16,
    borderRadius: 5,
    border: "none",
    cursor: "pointer",

    ":hover": {
      backgroundColor: "#FEF106",
      color: "#000",
    },
  },

  label: {
    position: "absolute",
    pointerEvents: "none",
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  },
}));

const Form = () => {
  const { classes } = useStyles();
  const router = useRouter();
  const { cnpj, socialReason, checked } = router.query;

  const [formData, setFormData] = useState({
    q1: "",
    q2: "",
    q3: "",
  });
  const [pdf, setPdf] = useState(null);

  const verifyParams = () => {
    if (!cnpj || !socialReason || !checked) {
      router.push("/");
    }
  };

  //   useEffect(() => {
  //     verifyParams();
  //   }, []);

  const handleInputChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const pdfDocument: any = await MyDocument(formData);
    const pdfBlob = pdfDocument.toBlob();
    const pdfUrl = URL.createObjectURL(pdfBlob);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "seu_email@gmail.com",
        pass: "sua_senha",
      },
    });

    const mailOptions = {
      from: "seu_email@gmail.com",
      to: "destinatario_email@gmail.com",
      subject: "Assunto do e-mail",
      text: "Mensagem do e-mail",
      attachments: [
        {
          filename: "formulario.pdf",
          content: pdfBlob,
        },
      ],
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email enviado: " + info.response);
      }
    });

    router.push(`/pdf-viewer?url=${encodeURIComponent(pdfUrl)}`);
  };

  return (
    <>
      <PageHeader />
      <Container>
        <form onSubmit={handleSubmit}>
          <TextInput
            style={{ marginTop: 20, zIndex: 1 }}
            label="Qual a principal a atividade da contratada?"
            placeholder="Escreva aqui."
            classNames={classes}
            onChange={handleInputChange}
          />

          <Select
            style={{ marginTop: 20, zIndex: 2, maxHeight: 400 }}
            label="Qual o tipo de controle do capital da contratada?"
            data={["Capital aberto", "Capital fechado", "Capital misto"]}
            placeholder="Selecione 1"
            classNames={classes}
            onChange={handleInputChange}
          />

          <Select
            style={{ marginTop: 20, zIndex: 3 }}
            label="A contratada possui algum integrante da sua administração, seus familiares, incluindo (ex)cônjuges, (ex)companheiros, em linha reta, que atualmente trabalhem ou que já trabalharam na Casa e Vídeo ou nas empresas da Casa e Vídeo?"
            data={["Sim", "Não"]}
            placeholder="Selecione Sim ou Não"
            classNames={classes}
            onChange={handleInputChange}
          />

          <Button type="submit" className={classes.button}>
            Continuar
          </Button>
        </form>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90vw;
`;

export default Form;
