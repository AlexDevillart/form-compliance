require("dotenv").config();

const translations = require("./jsons/translations.json");
const getPositions = require("./jsons/positions.js");

const express = require("express");
const moment = require("moment-timezone");
const nodemailer = require("nodemailer");

const { PDFDocument, StandardFonts, rgb } = require("pdf-lib");
const fs = require("fs");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.get("/:language?", (req, res) => {
  let language = req.params.language;
  language = language == "en" ? "en" : "pt";

  const date = moment(new Date(), "", language).tz("America/Sao_Paulo");

  res.render("index.ejs", {
    text: translations[language],
    language: language,
    date: language == "en" ? date.format("MMMM DD, YYYY") : date.format("DD [de] MMMM [de] YYYY"),
    error: req.query.e
  });
});

app.post("/new", (req, res) => {
  const json = req.body;
  const language = req.query.lang == "en" ? "en" : "pt";

  const cnpj = json.dado2.replace(/[^0-9]/g, "");

  const texts = getPositions(json);

  async function newPdf(lang) {
    const pdf = fs.readFileSync(`./pdfs/base/${lang}.pdf`);

    const pdfDoc = await PDFDocument.load(pdf);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontSize = 10;
    const color = rgb(43/255, 41/255, 41/255);

    const pages = pdfDoc.getPages();

    texts[lang].forEach((text) => {
      const options = {
        text: text.text || "",
        x: text.x,
        y: text.y,
        size: fontSize,
        font: font,
        color: color,
      }

      if (text.type == "X") {
        options.text = "X";
        options.x = text.options[parseInt(text.selected)].x;
        options.y = text.options[parseInt(text.selected)].y;
      }

      if (text.break) options.text = options.text.replace(new RegExp(`(.{${text.break}})`, "g"), "$1\n");

      pages[text.page].setLineHeight(13);
      pages[text.page].drawText(options.text, options);
    });

    const newPdf = await pdfDoc.save();

    return new Promise((resolve, reject) => {
      fs.writeFile(`./pdfs/gerados/${cnpj}-${lang}.pdf`, newPdf, (err) => {
        if(err) return reject(err);

        resolve();
      });
    });
  }

  const promises = [
    newPdf("pt"),
    newPdf("en")
  ]

  Promise.all(promises).then(() => {

    transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.DEPARTMENT_EMAIL,
      subject: "Formulário Compliance preenchido - Mensagem importante",
      text: `Segue para análise o Formulário Compliance preenchido\nRazão Social: ${json.dado1}\nCNPJ: ${cnpj}\nResponsável pelo Preenchimento: ${json.responsible}`,
      cc: json.email,
      attachments: [
        {
          filename: `Form Compliance - ${cnpj}-pt.pdf`,
          content: fs.createReadStream(`${__dirname}/pdfs/gerados/${cnpj}-pt.pdf`)
        },
        {
          filename: `Form Compliance - ${cnpj}-en.pdf`,
          content: fs.createReadStream(`${__dirname}/pdfs/gerados/${cnpj}-en.pdf`)
        }
      ]
    }).then(() => {
      fs.unlinkSync(`${__dirname}/pdfs/gerados/${cnpj}-pt.pdf`);
      fs.unlinkSync(`${__dirname}/pdfs/gerados/${cnpj}-en.pdf`);
    
      res.redirect(`/success/${language}`);
    });
  });
});

app.get("/success/:language", (req, res) => {
  let language = req.params.language;
  language = language == "en" ? "en" : "pt";

  res.render("success.ejs", {
    text: translations[language],
    language
  });
});

app.get("/pdf/:cnpj/:language?", (req, res) => {
  const cnpj = req.params.cnpj;
  const language = req.params.language == "en" ? "en" : "pt";

  const path = `${__dirname}/pdfs/gerados/${cnpj}-${language}.pdf`;

  if (!fs.existsSync(path)) return res.status(404).send("Not Found");

  res.status(200).sendFile(path);
});

app.listen(port, () => {
  console.log(`Ligado na porta: ${port}`);
});