import backgroundImage from "@/public/assets/cv_complianceform.jpeg";
import jsPDF from "jspdf";
import { getField } from "@/i18n";

const createPDF = async (form: any) => {
  const doc = new jsPDF();

  doc.addImage(
    backgroundImage.src,
    "JPEG",
    0,
    0,
    doc.internal.pageSize.width,
    doc.internal.pageSize.height
  );

  doc.text(`Qual a principal a atividade da contratada?`, 10, 10);
  doc.text(form.q1, 10, 20);
  // doc.text(form.q2, 10, 40);
  // doc.text(form.q3, 10, 50);
  // doc.text(form.q4, 10, 60);
  // doc.text(form.q4a, 10, 70);
  // doc.text(form.q25, 10, 80);
  // doc.text(form.q25a, 10, 90);

  //TODO: add form data to pdf

  return doc;
};

export { createPDF };
