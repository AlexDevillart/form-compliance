import PageHeader from "@/shared/layout/page-header";
import { createStyles, TextInput, Button } from "@mantine/core";
import { useRouter } from "next/router";
import { useState } from "react";
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

const ContainedInputs = () => {
  const { classes } = useStyles();
  const [socialReason, setSocialReason] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [valid, setValid] = useState(false);
  const router = useRouter();

  const validateCNPJ = (cnpj: string) => {
    cnpj = cnpj.replace(/[^\d]+/g, "");

    if (cnpj == "") return false;

    if (cnpj.length != 14) return false;

    // Elimina CNPJs invalidos conhecidos
    if (
      cnpj == "00000000000000" ||
      cnpj == "11111111111111" ||
      cnpj == "22222222222222" ||
      cnpj == "33333333333333" ||
      cnpj == "44444444444444" ||
      cnpj == "55555555555555" ||
      cnpj == "66666666666666" ||
      cnpj == "77777777777777" ||
      cnpj == "88888888888888" ||
      cnpj == "99999999999999"
    )
      return false;

    // Valida DVs
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += Number(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) pos = 9;
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != Number(digitos.charAt(0))) return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += Number(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != Number(digitos.charAt(1))) return false;

    return true;
  };

  const formatarCnpj = (cnpj: string) => {
    // Remove os caracteres especiais
    cnpj = cnpj.replace(/[^\d]+/g, "");

    // Formata o CNPJ
    cnpj = cnpj.replace(/^(\d{2})(\d)/, "$1.$2");
    cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    cnpj = cnpj.replace(/\.(\d{3})(\d)/, ".$1/$2");
    cnpj = cnpj.replace(/(\d{4})(\d)/, "$1-$2");

    return cnpj;
  };

  const handleSocialReason = (e: any) => {
    e.preventDefault();
    setSocialReason(e.target.value);

    if (validateCNPJ(cnpj) && e.target.value.length > 0) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const handleCnpj = (e: any) => {
    e.preventDefault();
    setCnpj(e.target.value);

    if (validateCNPJ(e.target.value) && socialReason.length > 0) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const processData = () => {
    const cnpjFormated = formatarCnpj(cnpj);

    router.push({
      pathname: "/warning",
      query: { socialReason, cnpj: cnpjFormated },
    });
  };

  return (
    <>
      <PageHeader />
      <Container>
        <Header>
          <Title>Questionário de Compliance</Title>
          <Subtitle> Anexo ao contrato </Subtitle>
        </Header>

        <TextInput
          style={{ marginTop: 20, zIndex: 1 }}
          label="Razão Social"
          placeholder="Minha Empresa LTDA"
          classNames={classes}
          value={socialReason}
          onChange={handleSocialReason}
        />

        <TextInput
          style={{ marginTop: 20, zIndex: 2 }}
          label="CNPJ:"
          placeholder="XX.XXX.XXX/0001-XX."
          classNames={classes}
          value={cnpj}
          onChange={handleCnpj}
        />

        <Button
          disabled={!valid}
          onClick={processData}
          className={classes.button}
        >
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
  width: 90vw;
  flex-direction: column;
`;

export default ContainedInputs;
