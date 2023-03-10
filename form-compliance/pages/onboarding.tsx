import { createStyles, TextInput, Button, Select } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import HeaderForm from "@/shared/layout/header-form";
import { getField, getLanguage, setLanguage } from "@/i18n";
import validateCnpj from "@/services/validate-cnpj";
import formatCnpj from "@/services/format-cnpj";

interface Props {}

const Onboarding: React.FC<Props> = () => {
  const { classes } = useStyles();
  const router = useRouter();

  const [lang, setLang] = useState("pt");
  const [valid, setValid] = useState(false);
  const [socialReason, setSocialReason] = useState("");
  const [cnpj, setCnpj] = useState("");

  const handleSocialReason = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSocialReason(e.target.value);

    if (validateCnpj(cnpj) && e.target.value.length > 0) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const handleCnpj = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCnpj(e.target.value);

    if (validateCnpj(e.target.value) && socialReason.length > 0) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const processData = () => {
    const cnpjFormated = formatCnpj(cnpj);

    router.push({
      pathname: "/warning",
      query: { socialReason, cnpj: cnpjFormated },
    });
  };

  const handleLanguageChange = (value: string) => {
    setLang(value);
    setLanguage(value);
  };

  useEffect(() => {
    setLang(getLanguage());
  });

  return (
    <>
      <HeaderForm />
      <Container>
        <Header>
          <Title>{getField("pages.index.title", lang)}</Title>
          <Subtitle>{getField("pages.index.caption", lang)}</Subtitle>
        </Header>

        <Select
          disabled={true}
          mt="md"
          withinPortal
          data={["pt", "en"]}
          placeholder="Selecione uma"
          label={getField("pages.index.select.language", lang)}
          classNames={classes}
          onChange={handleLanguageChange}
        />

        <TextInput
          style={{ marginTop: 20, zIndex: 1 }}
          label={getField("pages.index.corporate.name", lang)}
          placeholder="Minha Empresa LTDA"
          classNames={classes}
          value={socialReason}
          onChange={handleSocialReason}
        />

        <TextInput
          style={{ marginTop: 20, zIndex: 2 }}
          label={getField("pages.index.corporate.cnpj", lang)}
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
          {getField("pages.index.button.name", lang)}
        </Button>
      </Container>
    </>
  );
};

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
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

export default Onboarding;
