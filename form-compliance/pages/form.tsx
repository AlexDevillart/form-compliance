import PageHeader from "@/shared/layout/page-header";
import { createStyles, TextInput, Button, Select } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import jsPDF from "jspdf";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { cnpj, socialReason, checked } = router.query;

  const [q4, setQ4] = useState(false);
  const [q25, setQ25] = useState(false);

  // const verifyParams = () => {
  //   if (!cnpj || !socialReason || !checked) {
  //     router.push("/");
  //   }
  // };

  //   useEffect(() => {
  //     verifyParams();
  //   }, []);

  const onSubmit = async (data: any) => {
    const doc = new jsPDF();
    doc.text(`Qual a principal a atividade da contratada?`, 10, 10);
    doc.text(data.q1, 10, 20);
    doc.text(data.q2, 10, 30);
    doc.text(data.q3, 10, 40);
    doc.text(data.q4, 10, 50);
    doc.text(data.q4a, 10, 60);
    doc.text(data.q25, 10, 70);
    doc.text(data.q25a, 10, 80);

    const pdfBase64 = doc.output("datauristring");

    const serviceId = "service_yioei57";
    const templateId = "template_2l5sbq1";
    const userId = "gu0684zbTebD4OmaR";

    const emailData = {
      to_email: "contato.joaoluccars@gmail.com",
      from_name: "Alex Devillart",
      from_email: "adevillart@gmail.com",
      subject: "Teste",
      url: pdfBase64,
    };

    emailjs
      .send(serviceId, templateId, emailData, userId)
      .then(() => {
        // window.open(pdfBase64);
        window.open(pdfBase64);
      })
      .catch((err) => {
        console.error("Erro ao enviar email", err);
      });
  };

  return (
    <>
      <PageHeader />
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Question>
            {errors.q1 && <span>Esse campo é obrigatório</span>}
            <Label>Qual a principal atividade da contratada?</Label>
            <Input
              defaultValue="test"
              {...register("q1", { required: true })}
            />
          </Question>

          <Question>
            {errors.q2 && <span>Esse campo é obrigatório</span>}
            <Label>Qual o tipo de controle do capital da contratada?</Label>
            <SelectInput {...register("q2", { required: true })}>
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="Capital Aberto">Capital Aberto</option>
              <option value="Capital Fechado">Capital Fechado</option>
              <option value="Capital Misto">Capital Misto</option>
            </SelectInput>
          </Question>

          <Question>
            {errors.q3 && <span>Esse campo é obrigatório</span>}
            <Label>Qual a origem do capital da contratada?</Label>
            <SelectInput {...register("q3", { required: true })}>
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="Brasileira">Brasileira</option>
              <option value="Estrangeira">Estrangeira</option>
            </SelectInput>
          </Question>

          <Question>
            {errors.q4 && <span>Esse campo é obrigatório</span>}
            <Label>
              A contratada possui algum integrante da sua administração, seus
              familiares, incluindo (ex)cônjuges, (ex)companheiros, em linha
              reta, que atualmente trabalhem ou que já trabalharam na Casa e
              Vídeo ou nas empresas da Casa e Vídeo?
            </Label>
            <SelectInput
              {...register("q4", { required: true })}
              onChange={(e: any) => {
                setQ4(e.target.value === "Sim");
              }}
            >
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </SelectInput>
          </Question>

          {q4 && (
            <Question>
              {errors.q4a && <span>Esse campo é obrigatório</span>}
              <Label>Caso Positivo, informar grau de parentesco: </Label>
              <Input
                defaultValue="test"
                {...register("q4a", { required: true })}
              />
            </Question>
          )}

          {/* Questao 25 */}
          <Question>
            {errors.q25 && <span>Esse campo é obrigatório</span>}
            <Label>
              25) A contratada possui conhecimento de que integrantes da
              administração, funcionários e/ou seus familiares em linha reta
              e/ou qualquer outro pertencente ao mesmo grupo econômico e
              terceirizados já ofereceram, pagaram, prometeram pagar,
              autorizaram o pagamento, direta ou indiretamente, ou foram
              acusados de oferecer, pagar, prometer pagar ou autorizar o
              pagamento, direta ou indiretamente, de qualquer dinheiro ou
              qualquer coisa de valor a qualquer pessoa natural ou jurídica que
              exerça cargo, emprego ou função pública, bem como à consultores,
              representantes, parceiros, ou quaisquer terceiros com a finalidade
              de influenciar qualquer ato ou decisão do agente ou do governo, ou
              direcionar negócios?
            </Label>
            <SelectInput
              {...register("q25", { required: true })}
              onChange={(e: any) => {
                setQ25(
                  e.target.value === "Sim. Eu mesmo." ||
                    e.target.value ===
                      "Sim. Conheço alguém que já realizou estas práticas na empresa."
                );
              }}
            >
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="Sim. Eu mesmo.">Sim. Eu mesmo.</option>
              <option value="Sim. Conheço alguém que já realizou estas práticas na empresa.">
                Sim. Conheço alguém que já realizou estas práticas na empresa.
              </option>
              <option value="Não.">Não.</option>
            </SelectInput>
          </Question>

          {q25 && (
            <Question>
              {errors.q25a && <span>Esse campo é obrigatório</span>}
              <Label>Caso Positivo, informar o caso:: </Label>
              <Input
                defaultValue="test"
                {...register("q25a", { required: true })}
              />
            </Question>
          )}

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

const Question = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 90vw;
  margin-top: 20px;
`;

const Label = styled.label`
  pointer-events: none;
  font-size: 18px;
  padding-top: 5px;
  z-index: 1;
`;

const Input = styled.input`
  height: auto;
  width: 90vw;
  padding: 18px;
  border: 1px solid #000;
  border-radius: 5px;
  margin-top: 10px;
`;

const SelectInput = styled.select`
  height: auto;
  width: 90vw;
  padding: 18px;
  border: 1px solid #000;
  border-radius: 5px;
  margin-top: 10px;
`;

export default Form;
