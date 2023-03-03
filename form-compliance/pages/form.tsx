import PageHeader from "@/shared/layout/page-header";
import { createStyles, TextInput, Button, Select } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

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

  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");

  const verifyParams = () => {
    if (!cnpj || !socialReason || !checked) {
      router.push("/");
    }
  };

  //   useEffect(() => {
  //     verifyParams();
  //   }, []);

  const processData = () => {};

  return (
    <>
      <PageHeader />
      <Container>
        <TextInput
          style={{ marginTop: 25, zIndex: 1 }}
          label="Qual a principal a atividade da contratada?"
          placeholder="Escreva aqui."
          classNames={classes}
          //value={socialReason}
          onChange={(e) => setQ1(e.target.value)}
        />

        <Select
          style={{ marginTop: 25, zIndex: 2 }}
          label="Qual o tipo de controle do capital da contratada?"
          data={["Capital aberto", "Capital fechado", "Capital misto"]}
          placeholder="Selecione 1"
          classNames={classes}
        />

        <Select
          style={{ marginTop: 25, zIndex: 3 }}
          label="A contratada possui algum integrante da sua administração, seus familiares, incluindo (ex)cônjuges, (ex)companheiros, em linha reta, que atualmente trabalhem ou que já trabalharam na Casa e Vídeo ou nas empresas da Casa e Vídeo?"
          data={["Sim", "Não"]}
          placeholder="Selecione Sim ou Não"
          classNames={classes}
        />
        
        <Select
          style={{ marginTop: 25, zIndex: 4 }}
          label="4.	A contratada possui algum integrante da sua administração, seus familiares , incluindo (ex)cônjuges, (ex)companheiros, em linha reta, que atualmente trabalhem ou que já trabalharam na Casa e Vídeo ou nas empresas da Casa e Vídeo?"
          data={["Sim", "Não"]}
          placeholder="Selecione Sim ou Não"
          classNames={classes}
        />
        
        <Select
          style={{ marginTop: 25, zIndex: 5 }}
          label=" A contratada possui algum integrante da sua administração, seus familiares, incluindo (ex)cônjuges, (ex)companheiros, em linha reta, que ocupe, já ocupou ou é candidato na Administração Pública Federal, Distrital, Estadual e/ou Municipal há menos de 6 (seis) meses?"
          data={["Sim", "Não"]}
          placeholder="Selecione Sim ou Não"
          classNames={classes}
        />


        <Button onClick={processData} className={classes.button}>
          Continuar
        </Button>
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

const Title = styled.h1`
  font-size: 28px;
  font-weight: 900;
  margin: 0;
  padding: 0;
  color: #000;
`;

const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  color: #000;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  flex-direction: column;
`;

export default Form;
