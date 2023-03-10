import { validateBody, validatePost } from "@/services/validate-reqs";
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!validateBody(req) || !validatePost(req)) {
    res.status(400).json({ name: "Bad Request" });
    return;
  }

  const { pdfUrl } = JSON.parse(req.body);

  try {
    const response = await sendEmailWithPDF(pdfUrl);
    console.log("Message sent: %s", response.messageId);
    res.status(200).json({ status: "OK" });
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

// TODO: Change type of parameters
const sendEmailWithPDF = async (pdfPtUrl: any) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.DEPARTMENT_EMAIL,
    subject: "Formulário Compliance preenchido - Mensagem importante",
    html: `
    <div style="font-family: Arial, sans-serif; font-size: 16px;">
      <p>Olá,</p>
      <p>Recebemos um formulário de Compliance preenchido que você pode precisar analisar.</p>
      <p>Por favor, verifique o anexo para obter mais informações.</p>
      <br>
      <a href="${pdfPtUrl}">Clique aqui para abrir o PDF</a>
      <br>
      <p>Atenciosamente,</p>
      <p>Equipe de Auditoria</p>
      <hr>
      <p style="font-size: 12px;">Esta é uma mensagem automática. Por favor, não responda a este e-mail.</p>
    </div>
  `,
  };

  const info = await transporter.sendMail(mailOptions);

  if (info.accepted.length === 0) {
    throw new Error("Email not sent");
  }

  return info;
};

export default handler;
