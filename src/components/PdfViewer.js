import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import Loader from "./loader/Loader";

const PdfViewer = ({ endPoint, heading }) => {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [pdfData, setPdfData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // console.log(endPoint);
  // fetching data
  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get(endPoint)
      .then((response) => {
        setPdfData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error fetching document:", error);
      });
  }, []);

  const handlePdfClick = (pdf) => {
    setSelectedPdf(pdf);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col ">
          <h2 className="text-xl font-semibold mb-2 text-center customFont">
            {heading}
          </h2>
          <div className="  md:flex block justify-center md:items-start items-center md:space-x-4 ">
            <div className="  md:w-1/4 md:h-auto w-full h-40 md:border-none border-b dark:border-gray-700 md:py-0 py-2 md:my-0 my-3 overflow-x-scroll">
              <h3 className="text-md md:font-semibold md:mb-0 mb-2  ">
                PDF List
              </h3>
              <ul className=" md:-mt-0">
                {pdfData &&
                  pdfData.map((pdf, index) => (
                    <li
                      key={index}
                      className={`cursor-pointer  bg-white dark:bg-gray-500 shadow-md rounded-md px-2 mr-2 py-1 ${
                        selectedPdf === pdf ? "text-blue-600 font-semibold" : ""
                      }`}
                      onClick={() => handlePdfClick(pdf)}
                    >
                      {pdf.pdfTitle}
                    </li>
                  ))}
              </ul>
            </div>
            <div className=" md:w-3/4 w-full">
              {selectedPdf && (
                <div>
                  <h3 className="text-md md:font-semibold mb-2 ">PDF Viewer</h3>
                  <iframe
                    src={
                      process.env.REACT_APP_BASE_UPLOADS + selectedPdf.path ||
                      ""
                    }
                    title={selectedPdf.pdfTitle}
                    onLoad={console.log("loaded")}
                    className="w-full h-[calc(100vh-250px)]"
                    // onLoad={console.log("after loaded")}
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PdfViewer;
