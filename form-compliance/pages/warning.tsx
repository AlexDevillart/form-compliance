import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  UnstyledButton,
  Checkbox,
  Text,
  createStyles,
  Button,
} from "@mantine/core";
import HeaderForm from "@/shared/layout/header-form";
import { getField, getLanguage } from "@/i18n";

interface Props {}

const Warning: React.FC<Props> = () => {
  const router = useRouter();
  const { classes, cx } = useStyles();

  const [lang, setLang] = useState("pt");
  const [value, handleChange] = useState(false);

  const { cnpj, socialReason } = router.query;

  const verifyParams = () => {
    if (!cnpj || !socialReason) {
      router.push("/");
    }
  };

  useEffect(() => {
    verifyParams();
    setLang(getLanguage());
  }, []);

  const handleContinue = () => {
    router.push({
      pathname: "/form",
      query: { cnpj, socialReason, checked: value },
    });
  };

  return (
    <>
      <HeaderForm />
      <Container>
        <Header>
          <Title>{getField("pages.warning.title", lang)}</Title>
          <Subtitle>{getField("pages.warning.caption", lang)}</Subtitle>

          <p>{getField("pages.warning.paragraph1", lang)}</p>

          <ol>
            <li>{getField("pages.warning.paragraph1.iten1", lang)}</li>
            <br />
            <li>{getField("pages.warning.paragraph1.iten2", lang)}</li>
            <br />
            <li>{getField("pages.warning.paragraph1.iten3", lang)}</li>
          </ol>

          <p>{getField("pages.warning.paragraph2", lang)}</p>

          <p>
            {getField("pages.warning.paragraph3", lang)}{" "}
            <a href="www.casaevideo.com.br" style={{ color: "blue" }}>
              www.casaevideo.com.br
            </a>
            .
          </p>

          <p>{getField("pages.warning.paragraph4", lang)}</p>

          <p>
            {getField("pages.warning.paragraph5", lang)}{" "}
            <a href="www.casaevideo.com.br" style={{ color: "blue" }}>
              www.casaevideo.com.br
            </a>
          </p>

          <UnstyledButton
            onClick={() => handleChange(!value)}
            className={cx(classes.button, { [classes.checked]: value })}
          >
            <Checkbox
              checked={value}
              onChange={() => handleChange(!value)}
              tabIndex={-1}
              size="md"
              mr="xl"
              styles={{ input: { cursor: "pointer" } }}
            />

            <div>
              <Text weight={500} mb={7} sx={{ lineHeight: 1 }}>
                {getField("pages.warning.check.title", lang)}
              </Text>
              <Text size="sm" color="dimmed">
                {getField("pages.warning.check.text", lang)}
              </Text>
            </div>
          </UnstyledButton>
          <Button
            disabled={!value}
            onClick={handleContinue}
            className={classes.continue}
          >
            {getField("pages.warning.button.name", lang)}
          </Button>
        </Header>
      </Container>
    </>
  );
};

const useStyles: any = createStyles((theme) => ({
  button: {
    display: "flex",
    width: "100%",
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,
    borderRadius: theme.radius.sm,
    padding: theme.spacing.lg,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[0],
    },
  },

  checked: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[9]
        : theme.colors.gray[0],
  },

  continue: {
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
    marginBottom: 20,

    ":hover": {
      backgroundColor: "#FEF106",
      color: "#000",
    },
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

export default Warning;
