import React, { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";

const PdfViewer = () => {
  const [pdfUrl, setPdfUrl] = useState("");
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const pdfUrl = params.get("url");
    if (!pdfUrl) {
      return;
    }
    setPdfUrl(pdfUrl);
  }, [location]);

  const handleDocumentLoadSuccess = ({ numPages }: any) => {
    setNumPages(numPages);
  };

  return (
    <div>
      {pdfUrl && (
        <div>
          <Document file={pdfUrl} onLoadSuccess={handleDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      )}
    </div>
  );
};

export default PdfViewer;
