import React from "react";
import PdfViewer from "../../components/PdfViewer";

const BoardResults = () => {
  return (
    <div className="">
      <PdfViewer endPoint="results/board/" heading="Board Results" />
    </div>
  );
};

export default BoardResults;
