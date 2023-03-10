import { getLanguage } from "@/i18n";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { createPDF } from "@/services/create-pdf";
import { createStyles, Text, Title, Button, Image } from "@mantine/core";
import image from "@/public/assets/arte-email.svg";
import HeaderForm from "@/shared/layout/header-form";

const Action = () => {
  const router = useRouter();
  const { classes } = useStyles();

  const [lang, setLang] = useState("pt");
  const [pdf, setPdf] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const params = router.query;

  const verifyParams = () => {
    if (!params.cnpj || !params.socialReason || !params.checked || !params.q1) {
      router.push("/");
    }
  };

  const generatePdf = async () => {
    const pdfGenerated = await createPDF(params);
    setPdf(pdfGenerated);
  };

  const sendEmail = async () => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify({
          pdfUrl:
            window.location.origin +
            "/redirect?url=" +
            router.asPath
              .replace("&finishForm=true", "")
              .replace("action", "admin-viewer"),
        }),
      });
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response}`);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    verifyParams();

    if (!loading) {
      return;
    }

    generatePdf()
      .then(() => {
        sendEmail()
          .then(() => setLoading(false))
          .catch(console.error);
      })
      .catch(console.error);

    setLang(getLanguage());
  }, []);

  return (
    <>
      <HeaderForm />
      {loading && <p>Carregando...</p>}
      {!loading && (
        <div className={classes.wrapper}>
          <div className={classes.body}>
            <Title className={classes.title}>
              Seu Formulário foi enviado com sucesso!
            </Title>
            <Text fw={500} fz="lg" mb={5}>
              Agora apenas aguarde
            </Text>
            <Text fz="sm" c="dimmed">
              Em breve você receberá um email de nosso departamento, por agora
              pode escolher entre visualizar seu pdf ou baixa-lo.
            </Text>

            <div className={classes.controls}>
              <Button
                className={classes.control}
                onClick={() => window.open(pdf.output("bloburl"), "_blank")}
              >
                Visualisar
              </Button>
              <Button
                className={classes.control}
                onClick={() => pdf.save("Compliance")}
              >
                Baixar
              </Button>
            </div>
          </div>
          <Image src={image.src} className={classes.image} />
        </div>
      )}
    </>
  );
};

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    margin: "30px",
    padding: `calc(${theme.spacing.xl} * 2)`,
    borderRadius: theme.radius.md,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    border: `solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column-reverse",
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: "40%",

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  body: {
    paddingRight: `calc(${theme.spacing.xl} * 4)`,
    margin: "30px",

    [theme.fn.smallerThan("sm")]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: "flex",
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: "100%",
    flex: "1",
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    marginRight: "20px",
  },
}));

export default Action;
