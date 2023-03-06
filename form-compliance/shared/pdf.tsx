import React from "react";
import {
  pdf,
  Page,
  Document,
  Font,
  StyleSheet,
  Text,
} from "@react-pdf/renderer";

Font.register({
  family: "Open Sans",
  src: "https://fonts.gstatic.com/s/opensans/v22/mem5YaGs126MiZpBA-UN_r8OUuhs.ttf",
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontFamily: "Open Sans",
    fontSize: 24,
    marginBottom: 10,
  },
  text: {
    fontFamily: "Open Sans",
    fontSize: 14,
    marginBottom: 5,
  },
});

const MyDocument = (form: any) => {
  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.title}>Dados do formulário</Text>
        <Text style={styles.text}>q1: {form.q1}</Text>
      </Page>
    </Document>
  );
};

export default MyDocument;
