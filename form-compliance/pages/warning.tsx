import PageHeader from "@/shared/layout/page-header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

import {
  UnstyledButton,
  Checkbox,
  Text,
  createStyles,
  Button,
} from "@mantine/core";

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

const Warning = () => {
  const router = useRouter();
  const { cnpj, socialReason } = router.query;
  const { classes, cx } = useStyles();
  const [value, handleChange] = useState(false);

  const verifyParams = () => {
    if (!cnpj || !socialReason) {
      router.push("/");
    }
  };

  useEffect(() => {
    verifyParams();
  }, []);

  const handleContinue = () => {
    router.push({
      pathname: "/form",
      query: { cnpj, socialReason, checked: value },
    });
  };

  return (
    <>
      <PageHeader />
      <Container>
        <Header>
          <Title>Aviso Legal</Title>
          <Subtitle>Confirme após a leitura</Subtitle>

          <p>
            Paras as modalidades de revenda de produtos, não é permitido
            anunciar ou revender nos canais da Casa & Vídeo:
          </p>

          <ol>
            <li>
              Produtos e/ou conteúdo que violem ou com indícios de violação às
              leis de marcas, direitos autorais, patentes, modelos e/ou desenhos
              industriais, indicações geográficas ou denominações de origem e/ou
              qualquer outra norma relacionada a direitos de propriedade
              intelectual e industrial, sem a autorização do titular;
            </li>
            <br />
            <li>
              Produtos e/ou conteúdo com indícios de fraude e/ou em
              desconformidade com autorizações e/ou homologações governamentais,
              autarquias, agências reguladoras ou qualquer outro órgão
              normativo;
            </li>
            <br />
            <li>
              Produtos e/ou conteúdo com informações e/ou indícios e/ou
              conotações discriminatórias, de raça/cor, etnia, sexo, gênero,
              status ou condição social, posição política ou religiosa;
            </li>
          </ol>

          <p>
            Em qualquer hipótese, a Casa & Vídeo, a seu exclusivo critério, se
            reserva no direito de remover o anuncio e/ou conteúdo e /ou retirar
            produtos de venda, sem prévio aviso, sem que para isso cause
            qualquer dano direto ou indireto, se responsabilizando o anunciante,
            de forma exclusiva, por quaisquer consequências decorrentes do seu
            anuncio ou produtos. Em todos os casos de revenda ou de prestação de
            serviços, a contratada se compromete em observar todas as leis,
            regras, regulamentos, acordos e convenções aplicáveis, em especial
            de defesa da concorrência e de combate à lavagem de dinheiro e à
            corrupção, bem como a agir com honestidade, lealdade, integridade e
            boa-fé, obrigando-se a observar e respeitar o Código de Conduta
            disponível no website www.casaevideo.com.br. Sem prejuízo da
            legislação aplicável.
          </p>

          <p>
            Em todos os casos de revenda ou de prestação de serviços, a
            contratada se compromete em observar todas as leis, regras,
            regulamentos, acordos e convenções aplicáveis, em especial de defesa
            da concorrência e de combate à lavagem de dinheiro e à corrupção,
            bem como a agir com honestidade, lealdade, integridade e boa-fé,
            obrigando-se a observar e respeitar o Código de Conduta disponível
            no website{" "}
            <a href="www.casaevideo.com.br" style={{ color: "blue" }}>
              www.casaevideo.com.br
            </a>
            .
          </p>

          <p>
            Sem prejuízo da legislação aplicável, em todos os casos de revenda
            ou prestação de serviços, a contratada se obriga a não dar ou
            receber, oferecer ou solicitar, direta ou indiretamente, a quem quer
            que seja, pagamento ou benefício que constitua vantagem indevida ou,
            ainda, prática ilegal ou qualquer benefício pessoal de entes ou
            pessoas que tenha por finalidade um resultado indevido ou
            inapropriado, que não ocorreriam se não fosse pela vantagem
            indevida.
          </p>

          <p>
            Quaisquer violações das legislações aplicáveis às atividades deverão
            ser denunciadas pelo Canal Confidencial no website
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
                Selecione para confirmar que leu e concorda com o aviso legal.
              </Text>
              <Text size="sm" color="dimmed">
                Ao clicar em Continuar, você concorda que leu e está ciente dos
                avisos legais.
              </Text>
            </div>
          </UnstyledButton>
          <Button
            disabled={!value}
            onClick={handleContinue}
            className={classes.continue}
          >
            Continuar
          </Button>
        </Header>
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

export default Warning;
