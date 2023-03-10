import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/router";
import { createPDF } from "@/services/create-pdf";

const Test = () => {
  const router = useRouter();
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);

  // TODO: repo
  // window.open(pdf.output("bloburl"), "_blank");

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response}`);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <p>Carregando...</p>}
      {!loading && <button onClick={handleSubmit}>Enviar Email</button>}
    </>
  );
};

export default Test;
