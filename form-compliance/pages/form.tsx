import { createStyles, Button } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { getLanguage } from "@/i18n";
import HeaderForm from "@/shared/layout/header-form";

const Form = () => {
  const { classes } = useStyles();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [lang, setLang] = useState("pt");
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

  const { cnpj, socialReason, checked, q1 } = router.query;

  const verifyParams = () => {
    if (!cnpj || !socialReason || !checked) {
      router.push("/");
    }
  };
  useEffect(() => {
    verifyParams();
    setLang(getLanguage());
  }, []);

  const onSubmit = async (data: any) => {
    router.push({
      pathname: "/action",
      query: { cnpj, socialReason, checked, ...data },
    });
  };

  return (
    <>
      <HeaderForm />
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Question>
            {errors.q1 && <span>Esse campo ?? obrigat??rio</span>}
            <Label>1. Qual a principal atividade da contratada?</Label>
            <Input
              defaultValue="test"
              {...register("q1", { required: true })}
            />
          </Question>

          <Question>
            {errors.q2 && <span>Esse campo ?? obrigat??rio</span>}
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
            {errors.q3 && <span>Esse campo ?? obrigat??rio</span>}
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
            {errors.q4 && <span>Esse campo ?? obrigat??rio</span>}
            <Label>
              4. A contratada possui algum integrante da sua administra????o, seus
              familiares, incluindo (ex)c??njuges, (ex)companheiros, em linha
              reta, que atualmente trabalhem ou que j?? trabalharam na Casa e
              V??deo ou nas empresas da Casa e V??deo?
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
              <option value="N??o">N??o</option>
            </SelectInput>
          </Question>

          {q4 && (
            <Question>
              {errors.q4a && <span>Esse campo ?? obrigat??rio</span>}
              <Label>Caso Positivo, informar grau de parentesco: </Label>
              <Input
                defaultValue="test"
                {...register("q4a", { required: true })}
              />
            </Question>
          )}

          <Question>
            {errors.q5 && <span>Esse campo ?? obrigat??rio</span>}
            <Label>
              5. A contratada possui algum integrante da sua administra????o, seus
              familiares, incluindo (ex)c??njuges, (ex)companheiros, em linha
              reta, que ocupe, j?? ocupou ou ?? candidato na Administra????o P??blica
              Federal, Distrital, Estadual e/ou Municipal h?? menos de 6 (seis)
              meses?
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
              <option value="N??o">N??o</option>
            </SelectInput>
          </Question>

          {q5 && (
            <Question>
              {errors.q5a && <span>Esse campo ?? obrigat??rio</span>}
              <Label>Caso Positivo, informar grau de parentesco: </Label>
              <Input
                defaultValue="test"
                {...register("q5a", { required: true })}
              />
            </Question>
          )}

          <Question>
            {errors.q6 && <span>Esse campo ?? obrigat??rio</span>}
            <Label>
              6. A contratada possui algum integrante da administra????o, seus
              familiares, incluindo (ex)c??njuges, (ex)companheiros, em linha
              reta, que tenha rela????o com Pessoas Politicamente Expostas (PPE)
              que desempenham ou tenham desempenhado, nos ??ltimos 5 anos, no
              Brasil ou em pa??ses, territ??rios e depend??ncias estrangeiros,
              cargos, empregos ou fun????es p??blicas relevantes?
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
              <option value="N??o">N??o</option>
            </SelectInput>
          </Question>

          {q6 && (
            <Question>
              {errors.q6a && <span>Esse campo ?? obrigat??rio</span>}
              <Label>Caso Positivo, informar grau de parentesco: </Label>
              <Input
                defaultValue="test"
                {...register("q6a", { required: true })}
              />
            </Question>
          )}

          <Question>
            {errors.q7 && <span>Esse campo ?? obrigat??rio</span>}
            <Label>
              7. A contratada possui algum integrante da administra????o, seus
              familiares, incluindo (ex)c??njuges, (ex)companheiros, em linha
              reta, que tenha se candidatado ?? algum cargo p??blico, nos ??ltimos
              5 anos, no Brasil ou em pa??ses, territ??rios e depend??ncias
              estrangeiros?
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
              <option value="N??o">N??o</option>
            </SelectInput>
          </Question>

          {q7 && (
            <Question>
              {errors.q7a && <span>Esse campo ?? obrigat??rio</span>}
              <Label>Caso Positivo, informar cargo: </Label>
              <Input
                defaultValue="test"
                {...register("q7a", { required: true })}
              />
            </Question>
          )}

          <Question>
            {errors.q8 && <span>Esse campo ?? obrigat??rio</span>}
            <Label>
              8. Qual a relev??ncia dos neg??cios realizados com a Administra????o
              P??blica no resultado da contratada?
            </Label>
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
              <option value="Moderadamente Importante">
                Moderadamente Importante
              </option>
              <option value="Importante">Importante</option>
              <option value="Pouco Importante">Pouco Importante</option>
              <option value="N??o possui contrata????o com a Administra????o P??blica.">
                N??o possui contrata????o com a Administra????o P??blica.
              </option>
            </SelectInput>
          </Question>

          <Question>
            {errors.q9 && <span>Esse campo ?? obrigat??rio</span>}
            <Label>
              9. A contratada ou qualquer outra pertencente ao mesmo grupo
              econ??mico possui alguma filial, matriz, coligadas ou controladas
              situada no exterior com a qual mant??m rela????es comerciais?
            </Label>
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
              <option value="N??o.">N??o.</option>
            </SelectInput>
          </Question>

          <Question>
            {errors.q10 && <span>Esse campo ?? obrigat??rio</span>}
            <Label>
              10. A contratada ou qualquer outra pertencente ao mesmo grupo
              econ??mico j?? foi declarada inid??nea para contratar com a
              Administra????o P??blica nos ??ltimos 5 (cinco) anos?
            </Label>
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
              <option value="N??o.">N??o.</option>
            </SelectInput>
          </Question>

          <Question>
            {errors.q11 && <span>Esse campo ?? obrigat??rio</span>}
            <Label>
              11. A contratada ou qualquer outra pertencente ao mesmo grupo
              econ??mico e os integrantes de suas administra????es j?? foram
              autuados por dificultar atividade de investiga????o e/ou
              fiscaliza????o de ??rg??o P??blico no ??ltimos 5 (cinco) anos?
            </Label>
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
              <option value="N??o.">N??o.</option>
            </SelectInput>
          </Question>

          <Question>
            {errors.q12 && <span>Esse campo ?? obrigat??rio</span>}
            <Label>
              12. A contratada ou qualquer outra pertencente ao mesmo grupo
              econ??mico e os integrantes de suas administra????es j?? foram
              acusados, investigados, presos, processados ou condenados por
              fraude ou corrup????o nos ??ltimos 10 anos?
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
              <option value="N??o">N??o</option>
            </SelectInput>
          </Question>

          {q12 && (
            <Question>
              {errors.q12a && <span>Esse campo ?? obrigat??rio</span>}
              <Label>
                Se afirmativo, explique as circunst??ncias do fato ocorrido:
              </Label>
              <Input
                defaultValue="test"
                {...register("q12a", { required: true })}
              />
            </Question>
          )}

          <Question>
            {errors.q13 && <span>Esse campo ?? obrigat??rio</span>}
            <Label>
              13. A contratada possui algum integrante da administra????o ou de
              qualquer outra pertencente ao mesmo grupo econ??mico que sofre ou
              j?? sofreu algum procedimento, ou ainda, qualquer decis??o
              condenat??ria que verse ou tenha versado sobre pr??ticas contr??rias
              ?? Lei n.?? 12.846/13 Lei de Anticorrup????o em face da sua empresa ou
              qualquer outra do mesmo grupo econ??mico?
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
              <option value="N??o">N??o</option>
            </SelectInput>
          </Question>

          {q13 && (
            <Question>
              {errors.q13a && <span>Esse campo ?? obrigat??rio</span>}
              <Label>Caso Positivo, favor especificar:</Label>
              <Input
                defaultValue="test"
                {...register("q13a", { required: true })}
              />
            </Question>
          )}

          <Question>
            {errors.q14 && <span>Esse campo ?? obrigat??rio</span>}
            <Label>
              14. A contratada ou qualquer outra pertencente ao mesmo grupo
              econ??mico e os integrantes de suas administra????es sofrem ou j??
              sofreram algum processo por ass??dio moral e/ou sexual?
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
              <option value="N??o">N??o</option>
            </SelectInput>
          </Question>

          {q14 && (
            <Question>
              {errors.q14a && <span>Esse campo ?? obrigat??rio</span>}
              <Label>Caso Positivo, favor especificar:</Label>
              <Input
                defaultValue="test"
                {...register("q14a", { required: true })}
              />
            </Question>
          )}

          <Question>
            {errors.q15 && <span>Esse campo ?? obrigat??rio</span>}
            <Label>
              15. A contratada ou qualquer outra pertencente ao mesmo grupo
              econ??mico emprega ou contrata empresas que utilizam pr??ticas de
              trabalho an??logo ao escravo, ou m??o de obra infantil e do menor de
              18 (dezoito) anos, salvo em situa????o e jovem aprendiz, seja direta
              ou indiretamente?
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
              <option value="N??o">N??o</option>
            </SelectInput>
          </Question>

          {q15 && (
            <Question>
              {errors.q15a && <span>Esse campo ?? obrigat??rio</span>}
              <Label>Caso Positivo, favor especificar:</Label>
              <Input
                defaultValue="test"
                {...register("q15a", { required: true })}
              />
            </Question>
          )}

          <Question>
            {errors.q16 && <span>Esse campo ?? obrigat??rio</span>}
            <Label>
              16. A contratada ou qualquer outra pertencente ao mesmo grupo
              econ??mico utiliza pr??ticas de discrimina????o negativa e limitativa
              ao acesso na rela????o de emprego ou a sua manuten????o, tais como, em
              raz??o de sexo, origem, ra??a, cor, condi????o f??sica e/ou social,
              religi??o, estado civil e idade?
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
              <option value="N??o">N??o</option>
            </SelectInput>
          </Question>

          {q16 && (
            <Question>
              {errors.q16a && <span>Esse campo ?? obrigat??rio</span>}
              <Label>Caso Positivo, favor especificar:</Label>
              <Input
                defaultValue="test"
                {...register("q16a", { required: true })}
              />
            </Question>
          )}

          <Question>
            {errors.q17 && <span>Esse campo ?? obrigat??rio</span>}
            <Label>17. A contratada possui C??digo de Conduta ??tica?</Label>
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
              <option value="N??o possui, mas pretende cri??-lo nos pr??ximos dois anos.">
                N??o possui, mas pretende cri??-lo nos pr??ximos dois anos.
              </option>
              <option value="N??o possui e n??o pretende cri??-lo nos pr??ximos dois anos.">
                N??o possui e n??o pretende cri??-lo nos pr??ximos dois anos.
              </option>
            </SelectInput>
          </Question>

          <Question>
            {errors.q18 && <span>Esse campo ?? obrigat??rio</span>}
            <Label>18. A contratada possui um programa de Compliance?</Label>
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
              <option value="N??o">N??o</option>
            </SelectInput>
          </Question>

          {q18 && (
            <Question>
              {errors.q18a && <span>Esse campo ?? obrigat??rio</span>}
              <Label>Caso positivo, em que est??gio se encontra: </Label>
              <Input
                defaultValue="test"
                {...register("q18a", { required: true })}
              />
            </Question>
          )}

          <Question>
            {errors.q19 && <span>Esse campo ?? obrigat??rio</span>}
            <Label>
              19. A empresa mant??m o registro do seu quadro societ??rio
              atualizado junto aos ??rg??os p??blicos?
            </Label>
            <SelectInput
              {...register("q19", { required: true })}
              onChange={(e: any) => {
                setQ19(e.target.value === "N??o");
              }}
            >
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="Sim">Sim</option>
              <option value="N??o">N??o</option>
            </SelectInput>
          </Question>

          {q19 && (
            <Question>
              {errors.q19a && <span>Esse campo ?? obrigat??rio</span>}
              <Label>Em caso negativo, informar o motivo:</Label>
              <Input
                defaultValue="test"
                {...register("q19a", { required: true })}
              />
            </Question>
          )}

          <Question>
            {errors.q20 && <span>Esse campo ?? obrigat??rio</span>}
            <Label>
              20. A contratada ou qualquer outra pertencente ao mesmo grupo
              econ??mico j?? realizou alguma opera????o societ??ria com alguma
              empresa declarada inid??nea para contratar com a Administra????o
              P??blica?
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
              <option value="N??o">N??o</option>
            </SelectInput>
          </Question>

          {q20 && (
            <Question>
              {errors.q20a && <span>Esse campo ?? obrigat??rio</span>}
              <Label>Caso positivo, houve a repara????o integral do dano?</Label>
              <Input
                defaultValue="test"
                {...register("q20a", { required: true })}
              />
            </Question>
          )}

          <Question>
            {errors.q21 && <span>Esse campo ?? obrigat??rio</span>}
            <Label>
              21. A contratada ou qualquer outra pertencente ao mesmo grupo
              econ??mico efetua ou efetuou a distribui????o de brindes, envio de
              presentes, ???facilitation fees???, oferecimento de viagens,
              pagamentos de atividades de lazer e entretenimento, ou qualquer
              vantagem impr??pria praticada por parte da empresa ou por qualquer
              outra pertencente ao mesmo grupo econ??mico em favorecimento a
              algum membro da Administra????o P??blica?{" "}
            </Label>
            <SelectInput {...register("q21", { required: true })}>
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="Sim.">Sim.</option>
              <option value="N??o.">N??o.</option>
            </SelectInput>
          </Question>

          <Question>
            {errors.q22 && <span>Esse campo ?? obrigat??rio</span>}
            <Label>
              22. A contratada e as demais pertencentes ao mesmo grupo econ??mico
              s??o submetidas a processos de auditoria interna ou externa?
            </Label>
            <SelectInput {...register("q22", { required: true })}>
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="N??o.">N??o.</option>
              <option value="Sim, apenas auditoria interna.">
                Sim, apenas auditoria interna.
              </option>
              <option value="Sim, apenas auditoria externa.">
                Sim, apenas auditoria externa.
              </option>
              <option value="Sim, auditoria interna e externa.">
                Sim, auditoria interna e externa.
              </option>
            </SelectInput>
          </Question>

          <Question>
            {errors.q23 && <span>Esse campo ?? obrigat??rio</span>}
            <Label>
              23. A contratada e as demais pertencentes ao mesmo grupo econ??mico
              verificam informa????es p??blicas dispon??veis no mercado de seus
              parceiros antes de proceder a qualquer contrata????o?
            </Label>
            <SelectInput {...register("q23", { required: true })}>
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="N??o.">N??o.</option>
              <option value="Sim.">Sim.</option>
            </SelectInput>
          </Question>

          <Question>
            {errors.q24 && <span>Esse campo ?? obrigat??rio</span>}
            <Label>
              24. A contratada e as demais pertencentes ao mesmo grupo econ??mico
              incentivam e orientam a seus agentes, representantes,
              intermedi??rios ou outros terceiros contratados a denunciarem atos
              de corrup????o praticados na empresa?
            </Label>
            <SelectInput {...register("q24", { required: true })}>
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="N??o.">N??o.</option>
              <option value="Sim.">Sim.</option>
            </SelectInput>
          </Question>

          {/* Questao 25 */}
          <Question>
            {errors.q25 && <span>Esse campo ?? obrigat??rio</span>}
            <Label>
              25. A contratada possui conhecimento de que integrantes da
              administra????o, funcion??rios e/ou seus familiares em linha reta
              e/ou qualquer outro pertencente ao mesmo grupo econ??mico e
              terceirizados j?? ofereceram, pagaram, prometeram pagar,
              autorizaram o pagamento, direta ou indiretamente, ou foram
              acusados de oferecer, pagar, prometer pagar ou autorizar o
              pagamento, direta ou indiretamente, de qualquer dinheiro ou
              qualquer coisa de valor a qualquer pessoa natural ou jur??dica que
              exer??a cargo, emprego ou fun????o p??blica, bem como ?? consultores,
              representantes, parceiros, ou quaisquer terceiros com a finalidade
              de influenciar qualquer ato ou decis??o do agente ou do governo, ou
              direcionar neg??cios?
            </Label>
            <SelectInput
              {...register("q25", { required: true })}
              onChange={(e: any) => {
                setQ25(
                  e.target.value === "Sim. Eu mesmo." ||
                    e.target.value ===
                      "Sim. Conhe??o algu??m que j?? realizou estas pr??ticas na empresa."
                );
              }}
            >
              <option selected={true} disabled={true}>
                Selecione
              </option>
              <option value="Sim. Eu mesmo.">Sim. Eu mesmo.</option>
              <option value="Sim. Conhe??o algu??m que j?? realizou estas pr??ticas na empresa.">
                Sim. Conhe??o algu??m que j?? realizou estas pr??ticas na empresa.
              </option>
              <option value="N??o.">N??o.</option>
            </SelectInput>
          </Question>

          {q25 && (
            <Question>
              {errors.q25a && <span>Esse campo ?? obrigat??rio</span>}
              <Label>Caso Positivo, informar o caso:: </Label>
              <Input
                defaultValue="test"
                {...register("q25a", { required: true })}
              />
            </Question>
          )}

          <Question>
            {errors.q26 && <span>Esse campo ?? obrigat??rio</span>}
            <Label>
              26. A contratada possui conhecimento de que a pr??pria e/ou
              integrantes da administra????o e/ou qualquer outro pertencente ao
              mesmo grupo econ??mico, tenham sido processados ou figuram
              correntemente como investigados em algum Inqu??rito Civil ou como
              r??us em alguma a????o c??vel p??blica?
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
              <option value="N??o">N??o</option>
            </SelectInput>
          </Question>

          {q26 && (
            <Question>
              {errors.q26a && <span>Esse campo ?? obrigat??rio</span>}
              <Label>
                Caso positivo, especificar o teor da investiga????o/processo, bem
                como o seu atual est??gio, esclarecendo se j?? houve ou n??o
                condena????o
              </Label>
              <Input
                defaultValue="test"
                {...register("q26a", { required: true })}
              />
            </Question>
          )}

          <Question>
            {errors.q27 && <span>Esse campo ?? obrigat??rio</span>}
            <Label>
              27. A contratada possui conhecimento de que a pr??pria e/ou
              integrantes da administra????o e/ou qualquer outro pertencente ao
              mesmo grupo econ??mico, tenham sido processados criminalmente ou
              figuram correntemente como investigados ou como r??us em alguma
              a????o penal?
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
              <option value="N??o">N??o</option>
            </SelectInput>
          </Question>

          {q27 && (
            <Question>
              {errors.q27a && <span>Esse campo ?? obrigat??rio</span>}
              <Label>
                Caso positivo, especificar o teor da investiga????o/processo
                penal, bem como o seu atual est??gio, esclarecendo se j?? houve ou
                n??o condena????o:
              </Label>
              <Input
                defaultValue="test"
                {...register("q27a", { required: true })}
              />
            </Question>
          )}

          <Question>
            {errors.q28 && <span>Esse campo ?? obrigat??rio</span>}
            <Label>
              28. A contratada possui conhecimento se a pr??pria e/ou integrantes
              da administra????o e/ou qualquer outro pertencente ao mesmo grupo
              econ??micofiguram como investigados ou como partes em procedimento
              de tomada de contas de compet??ncia Municipal, Estadual, Distrital
              ou Federal?
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
              <option value="N??o">N??o</option>
            </SelectInput>
          </Question>

          {q28 && (
            <Question>
              {errors.q28a && <span>Esse campo ?? obrigat??rio</span>}
              <Label>
                Caso positivo, especificar o teor da investiga????o/processo, bem
                como o seu atual est??gio, esclarecendo se j?? houve ou n??o
                condena????o:
              </Label>
              <Input
                defaultValue="test"
                {...register("q28a", { required: true })}
              />
            </Question>
          )}

          <Question>
            {errors.q29 && <span>Esse campo ?? obrigat??rio</span>}
            <Label>
              29. A contratada possui conhecimento se a pr??pria e/ou integrantes
              da administra????o e/ou qualquer outro pertencente ao mesmo grupo
              econ??mico figuram como investigados ou como partes em procedimento
              administrativo de responsabiliza????o perante a Controladoria Geral
              da Uni??o?
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
              <option value="N??o">N??o</option>
            </SelectInput>
          </Question>

          {q29 && (
            <Question>
              {errors.q28a && <span>Esse campo ?? obrigat??rio</span>}
              <Label>
                Caso positivo, especificar o teor da investiga????o/processo, bem
                como o seu atual est??gio, esclarecendo se j?? houve ou n??o
                condena????o:
              </Label>
              <Input
                defaultValue="test"
                {...register("q29a", { required: true })}
              />
            </Question>
          )}

          <Question>
            {errors.q30 && <span>Esse campo ?? obrigat??rio</span>}
            <Label>
              30. No caso da contratada ser fornecedora de bens para revenda, os
              produtos comercializados necessitam de certifica????o, autoriza????o
              e/ou homologa????es governamental, de autarquias, ag??ncias
              reguladoras ou qualquer outro ??rg??o normativo para circula????o?
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
              <option value="N??o.">N??o</option>
              <option value="N??o Aplic??vel.">N??o Aplic??vel.</option>
            </SelectInput>
          </Question>

          {q30 && (
            <Question>
              {errors.q30a && <span>Esse campo ?? obrigat??rio</span>}
              <Label>
                Caso positivo, as certifica????es, autoriza????es e/ou homologa????es
                governamentais de autarquias, ag??ncias reguladoras ou qualquer
                outro ??rg??o normativo para circula????o dos produtos s??o leg??timas
                e est??o em vigor?
              </Label>
              <SelectInput {...register("q30a", { required: true })}>
                <option selected={true} disabled={true}>
                  Selecione
                </option>
                <option value="Sim.">Sim.</option>
                <option value="N??o.">N??o.</option>
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
