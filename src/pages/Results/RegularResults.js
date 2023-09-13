import React from "react";
import PdfViewer from "../../components/PdfViewer";

const RegularResults = () => {
  return (
    <div className="">
      <PdfViewer endPoint="results/regular/" heading="Regular Results" />
    </div>
  );
};

export default RegularResults;
