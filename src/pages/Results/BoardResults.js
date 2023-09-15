import React, { useEffect } from "react";
import PdfViewer from "../../components/PdfViewer";

const BoardResults = () => {
  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <PdfViewer endPoint="results/board/" heading="Board Results" />
    </div>
  );
};

export default BoardResults;
