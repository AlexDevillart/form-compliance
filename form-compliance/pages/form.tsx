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
  const [q5, setQ5] = useState(false);
  const [q6, setQ6] = useState(false);
  const [q7, setQ7] = useState(false);
  //const [q8, setQ8] = useState(false);
  //const [q9, setQ9] = useState(false);
  //const [q10, setQ10] = useState(false);
  //const [q11, setQ11] = useState(false);
  const [q12, setQ12] = useState(false);
  const [q13, setQ13] = useState(false);
  const [q14, setQ14] = useState(false);
  const [q15, setQ15] = useState(false);
  const [q16, setQ16] = useState(false);
  const [q17, setQ17] = useState(false);
  const [q18, setQ18] = useState(false);
  const [q19, setQ19] = useState(false);
  const [q20, setQ20] = useState(false);
 // const [q21, setQ21] = useState(false);
 // const [q22, setQ22] = useState(false);
  //const [q23, setQ23] = useState(false);
  //const [q24, setQ24] = useState(false);
  const [q25, setQ25] = useState(false);
  const [q26, setQ26] = useState(false);
  const [q27, setQ27] = useState(false);
  const [q28, setQ28] = useState(false);
  const [q29, setQ29] = useState(false);
  const [q30, setQ30] = useState(false);

   const verifyParams = () => {
     if (!cnpj || !socialReason || !checked) {
       router.push("/");
     }
   };
   useEffect(() => {
     verifyParams();
   }, []);

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
            <Label>1. Qual a principal atividade da contratada?</Label>
            <Input
              defaultValue="test"
              {...register("q1", { required: true })}
            />
          </Question>

          <Question>
            {errors.q2 && <span>Esse campo é obrigatório</span>}
            <Label>2. Qual o tipo de controle do capital da contratada?</Label>
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
            <Label>3. Qual a origem do capital da contratada?</Label>
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
            <Label>4. A contratada possui algum integrante da sua administração, seus
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

          <Question>
            {errors.q5 && <span>Esse campo é obrigatório</span>}
            <Label>5.	A contratada possui algum integrante da sua administração, 
              seus familiares, incluindo (ex)cônjuges, (ex)companheiros, em linha reta, que ocupe, 
              já ocupou ou é candidato na Administração Pública Federal, Distrital, 
              Estadual e/ou Municipal há menos de 6 (seis) meses?
            </Label>
            <SelectInput
              {...register("q5", { required: true })}
              onChange={(e: any) => {
                setQ5(e.target.value === "Sim");
              }}
            >
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </SelectInput>
          </Question>

          {q5 && (
            <Question>
              {errors.q5a && <span>Esse campo é obrigatório</span>}
              <Label>Caso Positivo, informar grau de parentesco: </Label>
              <Input
                defaultValue="test"
                {...register("q5a", { required: true })}
              />
            </Question>
          )}

          <Question>
            {errors.q6 && <span>Esse campo é obrigatório</span>}
            <Label>6.	A contratada possui algum integrante da administração, seus familiares, 
              incluindo (ex)cônjuges, (ex)companheiros, em linha reta, que tenha relação com Pessoas Politicamente Expostas (PPE) 
              que desempenham ou tenham desempenhado, nos últimos 5 anos, no Brasil ou em países, territórios e dependências estrangeiros, cargos, 
              empregos ou funções públicas relevantes?
            </Label>
            <SelectInput
              {...register("q6", { required: true })}
              onChange={(e: any) => {
                setQ6(e.target.value === "Sim");
              }}
            >
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </SelectInput>
          </Question>

          {q6 && (
            <Question>
              {errors.q6a && <span>Esse campo é obrigatório</span>}
              <Label>Caso Positivo, informar grau de parentesco: </Label>
              <Input
                defaultValue="test"
                {...register("q6a", { required: true })}
              />
            </Question>
          )}

          <Question>
            {errors.q7 && <span>Esse campo é obrigatório</span>}
            <Label>7.	A contratada possui algum integrante da administração, seus familiares, incluindo (ex)cônjuges, 
              (ex)companheiros, em linha reta, que tenha se candidatado à algum cargo público, nos últimos 5 anos, no Brasil ou em países, 
              territórios e dependências estrangeiros?
            </Label>
            <SelectInput
              {...register("q7", { required: true })}
              onChange={(e: any) => {
                setQ7(e.target.value === "Sim");
              }}
            >
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </SelectInput>
          </Question>

          {q7 && (
            <Question>
              {errors.q7a && <span>Esse campo é obrigatório</span>}
              <Label>Caso Positivo, informar cargo:  </Label>
              <Input
                defaultValue="test"
                {...register("q7a", { required: true })}
              />
            </Question>
          )}

        <Question>
            {errors.q8 && <span>Esse campo é obrigatório</span>}
            <Label>8.	Qual a relevância dos negócios realizados com a Administração Pública no resultado da contratada?</Label>
            <SelectInput
              {...register("q8", { required: true })}
            //  onChange={(e: any) => {
            //   setQ6(e.target.value === "Sim");
            //  }}
            >
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="Muito Importante">Muito Importante</option>
              <option value="Moderadamente Importante">Moderadamente Importante</option>
              <option value="Importante">Importante</option>
              <option value="Pouco Importante">Pouco Importante</option>
              <option value="Não possui contratação com a Administração Pública.">Não possui contratação com a Administração Pública.</option>
            </SelectInput>
          </Question>

          <Question>
            {errors.q9 && <span>Esse campo é obrigatório</span>}
            <Label>9.	A contratada ou qualquer outra pertencente ao mesmo grupo econômico possui alguma filial, matriz, coligadas ou controladas situada no exterior com a qual mantém relações comerciais?</Label>
            <SelectInput
              {...register("q9", { required: true })}
            //  onChange={(e: any) => {
            //   setQ6(e.target.value === "Sim");
            //  }}
            >
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="Sim.">Sim.</option>
              <option value="Não.">Não.</option>
            </SelectInput>
          </Question>

          <Question>
            {errors.q10 && <span>Esse campo é obrigatório</span>}
            <Label>10.	A contratada ou qualquer outra pertencente ao mesmo grupo econômico já foi declarada inidônea para contratar com a Administração Pública nos últimos 5 (cinco) anos?</Label>
            <SelectInput
              {...register("q10", { required: true })}
            //  onChange={(e: any) => {
            //   setQ6(e.target.value === "Sim");
            //  }}
            >
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="Sim.">Sim.</option>
              <option value="Não.">Não.</option>
            </SelectInput>
          </Question>

          <Question>
            {errors.q11 && <span>Esse campo é obrigatório</span>}
            <Label>11.	 A contratada ou qualquer outra pertencente ao mesmo grupo econômico e os integrantes de suas administrações já foram autuados por 
              dificultar atividade de investigação e/ou fiscalização de Órgão Público no últimos 5 (cinco) anos?</Label>
            <SelectInput
              {...register("q11", { required: true })}
            //  onChange={(e: any) => {
            //   setQ6(e.target.value === "Sim");
            //  }}
            >
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="Sim.">Sim.</option>
              <option value="Não.">Não.</option>
            </SelectInput>
          </Question>

          <Question>
            {errors.q12 && <span>Esse campo é obrigatório</span>}
            <Label>12.	A contratada ou qualquer outra pertencente ao mesmo grupo econômico e os integrantes de suas administrações já foram acusados, 
              investigados, presos, processados ou condenados por fraude ou corrupção nos últimos 10 anos?
            </Label>
            <SelectInput
              {...register("q12", { required: true })}
              onChange={(e: any) => {
                setQ12(e.target.value === "Sim");
              }}
            >
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </SelectInput>
          </Question>

          {q12 && (
            <Question>
              {errors.q12a && <span>Esse campo é obrigatório</span>}
              <Label>Se afirmativo, explique as circunstâncias do fato ocorrido:</Label>
              <Input
                defaultValue="test"
                {...register("q12a", { required: true })}
              />
            </Question>
          )}

          <Question>
            {errors.q13 && <span>Esse campo é obrigatório</span>}
            <Label>13.	A contratada possui algum integrante da administração ou de qualquer outra pertencente ao mesmo grupo econômico 
              que sofre ou já sofreu algum procedimento, ou ainda, qualquer decisão condenatória que verse ou tenha versado sobre práticas 
              contrárias à Lei n.º 12.846/13 Lei de Anticorrupção em face da sua empresa ou qualquer outra do mesmo grupo econômico?
            </Label>
            <SelectInput
              {...register("q13", { required: true })}
              onChange={(e: any) => {
                setQ13(e.target.value === "Sim");
              }}
            >
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </SelectInput>
          </Question>

          {q13 && (
            <Question>
              {errors.q13a && <span>Esse campo é obrigatório</span>}
              <Label>Caso Positivo, favor especificar:</Label>
              <Input
                defaultValue="test"
                {...register("q13a", { required: true })}
              />
            </Question>
          )}

          <Question>
            {errors.q14 && <span>Esse campo é obrigatório</span>}
            <Label>14.	A contratada ou qualquer outra pertencente ao mesmo grupo econômico e os integrantes de suas administrações sofrem ou já 
              sofreram algum processo por assédio moral e/ou sexual?
            </Label>
            <SelectInput
              {...register("q14", { required: true })}
              onChange={(e: any) => {
                setQ14(e.target.value === "Sim");
              }}
            >
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </SelectInput>
          </Question>

          {q14 && (
            <Question>
              {errors.q14a && <span>Esse campo é obrigatório</span>}
              <Label>Caso Positivo, favor especificar:</Label>
              <Input
                defaultValue="test"
                {...register("q14a", { required: true })}
              />
            </Question>
          )}

         <Question>
            {errors.q15 && <span>Esse campo é obrigatório</span>}
            <Label>15.	A contratada ou qualquer outra pertencente ao mesmo grupo econômico emprega ou contrata empresas que utilizam práticas de trabalho
               análogo ao escravo, ou mão de obra infantil e do menor de 18 (dezoito) anos, salvo em situação e jovem aprendiz, seja direta ou indiretamente?
            </Label>
            <SelectInput
              {...register("q15", { required: true })}
              onChange={(e: any) => {
                setQ15(e.target.value === "Sim");
              }}
            >
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </SelectInput>
          </Question>

          {q15 && (
            <Question>
              {errors.q15a && <span>Esse campo é obrigatório</span>}
              <Label>Caso Positivo, favor especificar:</Label>
              <Input
                defaultValue="test"
                {...register("q15a", { required: true })}
              />
            </Question>
          )}

         <Question>
            {errors.q16 && <span>Esse campo é obrigatório</span>}
            <Label>16.	A contratada ou qualquer outra pertencente ao mesmo grupo econômico utiliza práticas de discriminação negativa e limitativa 
              ao acesso na relação de emprego ou a sua manutenção, tais como, em razão de sexo, origem, raça, cor, condição física e/ou social, religião, estado civil e idade?
            </Label>
            <SelectInput
              {...register("q16", { required: true })}
              onChange={(e: any) => {
                setQ16(e.target.value === "Sim");
              }}
            >
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </SelectInput>
          </Question>

          {q16 && (
            <Question>
              {errors.q16a && <span>Esse campo é obrigatório</span>}
              <Label>Caso Positivo, favor especificar:</Label>
              <Input
                defaultValue="test"
                {...register("q16a", { required: true })}
              />
            </Question>
          )}

        <Question>
            {errors.q17 && <span>Esse campo é obrigatório</span>}
            <Label>17.	A contratada possui Código de Conduta Ética?</Label>
            <SelectInput
              {...register("q17", { required: true })}
              onChange={(e: any) => {
                setQ17(e.target.value === "Sim");
              }}
            >
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="Sim">Sim</option>
              <option value="Não possui, mas pretende criá-lo nos próximos dois anos.">Não possui, mas pretende criá-lo nos próximos dois anos.</option>
              <option value="Não possui e não pretende criá-lo nos próximos dois anos.">Não possui e não pretende criá-lo nos próximos dois anos.</option>
            </SelectInput>
          </Question>

          <Question>
            {errors.q18 && <span>Esse campo é obrigatório</span>}
            <Label>18.	A contratada possui um programa de Compliance?
            </Label>
            <SelectInput
              {...register("q18", { required: true })}
              onChange={(e: any) => {
                setQ18(e.target.value === "Sim");
              }}
            >
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </SelectInput>
          </Question>

          {q18 && (
            <Question>
              {errors.q18a && <span>Esse campo é obrigatório</span>}
              <Label>Caso positivo, em que estágio se encontra: </Label>
              <Input
                defaultValue="test"
                {...register("q18a", { required: true })}
              />
            </Question>
          )}

          <Question>
            {errors.q19 && <span>Esse campo é obrigatório</span>}
            <Label>19.	A empresa mantém o registro do seu quadro societário atualizado junto aos órgãos públicos?
            </Label>
            <SelectInput
              {...register("q19", { required: true })}
              onChange={(e: any) => {
                setQ19(e.target.value === "Sim");
              }}
            >
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </SelectInput>
          </Question>

          {q19 && (
            <Question>
              {errors.q19a && <span>Esse campo é obrigatório</span>}
              <Label>Em caso negativo, informar o motivo:</Label>
              <Input
                defaultValue="test"
                {...register("q19a", { required: true })}
              />
            </Question>
          )}

        <Question>
            {errors.q20 && <span>Esse campo é obrigatório</span>}
            <Label>20.	A contratada ou qualquer outra pertencente ao mesmo grupo econômico já realizou alguma operação societária com alguma empresa 
              declarada inidônea para contratar com a Administração Pública?
            </Label>
            <SelectInput
              {...register("q20", { required: true })}
              onChange={(e: any) => {
                setQ20(e.target.value === "Sim");
              }}
            >
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </SelectInput>
          </Question>

          {q20 && (
            <Question>
              {errors.q20a && <span>Esse campo é obrigatório</span>}
              <Label>Caso positivo, houve a reparação integral do dano?</Label>
              <Input
                defaultValue="test"
                {...register("q20a", { required: true })}
              />
            </Question>
          )}

          <Question>
            {errors.q21 && <span>Esse campo é obrigatório</span>}
            <Label>21.	A contratada ou qualquer outra pertencente ao mesmo grupo econômico efetua ou efetuou a distribuição de brindes, 
              envio de presentes, “facilitation fees”, oferecimento de viagens, pagamentos de atividades de lazer e entretenimento, 
              ou qualquer vantagem imprópria praticada por parte da empresa ou por qualquer outra pertencente ao mesmo grupo econômico em 
              favorecimento a algum membro da Administração Pública?  </Label>
            <SelectInput {...register("q21", { required: true })}>
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="Sim.">Sim.</option>
              <option value="Não.">Não.</option>
            </SelectInput>
          </Question>

          <Question>
            {errors.q22 && <span>Esse campo é obrigatório</span>}
            <Label>22.	A contratada e as demais pertencentes ao mesmo grupo econômico são submetidas a processos de auditoria interna ou externa?</Label>
            <SelectInput {...register("q22", { required: true })}>
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="Não.">Não.</option>
              <option value="Sim, apenas auditoria interna.">Sim, apenas auditoria interna.</option>
              <option value="Sim, apenas auditoria externa.">Sim, apenas auditoria externa.</option>
              <option value="Sim, auditoria interna e externa.">Sim, auditoria interna e externa.</option>
            </SelectInput>
          </Question>

          <Question>
            {errors.q23 && <span>Esse campo é obrigatório</span>}
            <Label>23.	A contratada e as demais pertencentes ao mesmo grupo econômico verificam informações públicas disponíveis 
              no mercado de seus parceiros antes de proceder a qualquer contratação?</Label>
            <SelectInput {...register("q23", { required: true })}>
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="Não.">Não.</option>
              <option value="Sim.">Sim.</option>
            </SelectInput>
          </Question>

          <Question>
            {errors.q24 && <span>Esse campo é obrigatório</span>}
            <Label>24.	 A contratada e as demais pertencentes ao mesmo grupo econômico incentivam e orientam a seus agentes, representantes, 
              intermediários ou outros terceiros contratados a denunciarem atos de corrupção praticados na empresa?</Label>
            <SelectInput {...register("q24", { required: true })}>
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="Não.">Não.</option>
              <option value="Sim.">Sim.</option>
            </SelectInput>
          </Question>

          {/* Questao 25 */}
          <Question>
            {errors.q25 && <span>Esse campo é obrigatório</span>}
            <Label>
              25. A contratada possui conhecimento de que integrantes da
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

        <Question>
            {errors.q26 && <span>Esse campo é obrigatório</span>}
            <Label>26.	A contratada possui conhecimento de que a própria e/ou integrantes da administração e/ou qualquer outro pertencente ao mesmo grupo econômico, 
              tenham sido processados ou figuram correntemente como investigados em algum Inquérito Civil ou como réus em alguma ação cível pública?
            </Label>
            <SelectInput
              {...register("q26", { required: true })}
              onChange={(e: any) => {
                setQ26(e.target.value === "Sim");
              }}
            >
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </SelectInput>
          </Question>

          {q26 && (
            <Question>
              {errors.q26a && <span>Esse campo é obrigatório</span>}
              <Label>Caso positivo, especificar o teor da investigação/processo, bem como o seu atual estágio, esclarecendo se já houve ou não condenação</Label>
              <Input
                defaultValue="test"
                {...register("q26a", { required: true })}
              />
            </Question>
          )}

          <Question>
            {errors.q27 && <span>Esse campo é obrigatório</span>}
            <Label>27.	A contratada possui conhecimento de que a própria e/ou integrantes da administração e/ou qualquer outro pertencente ao mesmo grupo econômico, 
              tenham sido processados criminalmente ou figuram correntemente como investigados ou como réus em alguma ação penal?
            </Label>
            <SelectInput
              {...register("q27", { required: true })}
              onChange={(e: any) => {
                setQ27(e.target.value === "Sim");
              }}
            >
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </SelectInput>
          </Question>

          {q27 && (
            <Question>
              {errors.q27a && <span>Esse campo é obrigatório</span>}
              <Label>Caso positivo, especificar o teor da investigação/processo penal, bem como o seu atual estágio, esclarecendo se já houve ou não condenação:</Label>
              <Input
                defaultValue="test"
                {...register("q27a", { required: true })}
              />
            </Question>
          )}


        <Question>
            {errors.q28 && <span>Esse campo é obrigatório</span>}
            <Label>28.	A contratada possui conhecimento se a própria e/ou integrantes da administração e/ou qualquer outro pertencente ao mesmo grupo econômicofiguram como 
            investigados ou como partes em procedimento de tomada de contas de competência Municipal, Estadual, Distrital ou Federal?
            </Label>
            <SelectInput
              {...register("q28", { required: true })}
              onChange={(e: any) => {
                setQ28(e.target.value === "Sim");
              }}
            >
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </SelectInput>
          </Question>

          {q28 && (
            <Question>
              {errors.q28a && <span>Esse campo é obrigatório</span>}
              <Label>Caso positivo, especificar o teor da investigação/processo, bem como o seu atual estágio, esclarecendo se já houve ou não condenação:</Label>
              <Input
                defaultValue="test"
                {...register("q28a", { required: true })}
              />
            </Question>
          )}


        <Question>
            {errors.q29 && <span>Esse campo é obrigatório</span>}
            <Label>29.	A contratada possui conhecimento se a própria e/ou integrantes da administração e/ou qualquer outro pertencente ao mesmo grupo 
              econômico figuram como investigados ou como partes em procedimento administrativo de responsabilização perante a Controladoria Geral da União?
            </Label>
            <SelectInput
              {...register("q29", { required: true })}
              onChange={(e: any) => {
                setQ29(e.target.value === "Sim");
              }}
            >
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </SelectInput>
          </Question>

          {q29 && (
            <Question>
              {errors.q28a && <span>Esse campo é obrigatório</span>}
              <Label>Caso positivo, especificar o teor da investigação/processo, bem como o seu atual estágio, esclarecendo se já houve ou não condenação:</Label>
              <Input
                defaultValue="test"
                {...register("q29a", { required: true })}
              />
            </Question>
          )}


       <Question>
            {errors.q30 && <span>Esse campo é obrigatório</span>}
            <Label>30.	No caso da contratada ser fornecedora de bens para revenda, os produtos comercializados necessitam de certificação, autorização e/ou homologações governamental, 
              de autarquias, agências reguladoras ou qualquer outro órgão normativo para circulação?
            </Label>
            <SelectInput
              {...register("q30", { required: true })}
              onChange={(e: any) => {
                setQ30(e.target.value === "Sim.");
              }}
            >
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="Sim.">Sim</option>
              <option value="Não.">Não</option>
              <option value="Não Aplicável.">Não Aplicável.</option>
            </SelectInput>
          </Question>

          {q30 && (
              <Question>
              {errors.q30a && <span>Esse campo é obrigatório</span>}
              <Label>Caso positivo, as certificações, autorizações e/ou homologações governamentais de autarquias, agências reguladoras ou qualquer outro órgão normativo para 
                circulação dos produtos são legítimas e estão em vigor?</Label>
              <SelectInput {...register("q30a", { required: true })}>
                <option selected={true} disabled={true}>
                  Selecione
                </option>
                <option value="Sim.">Sim.</option>
                <option value="Não.">Não.</option>
              </SelectInput>
  
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
