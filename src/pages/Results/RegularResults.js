import React, { useEffect } from "react";
import PdfViewer from "../../components/PdfViewer";

const RegularResults = () => {
  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <PdfViewer endPoint="results/regular/" heading="Regular Results" />
    </div>
  );
};

export default RegularResults;
