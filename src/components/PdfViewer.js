// import { Pagination } from "@mui/material";
// import React, { useState } from "react";
// import Loader from "./loader/Loader";

// const PdfViewer = ({ pdfData, page, setPage, label }) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [pdfId, setPdfId] = useState(null);

//   //   const pdfData = [
//   //     {
//   //       _id: 1,
//   //       pdfTitle: "SSC 2022",
//   //       pdfLink:
//   //         "https://drive.google.com/file/d/1YiXAYlm-Y7byfzNYunvEd0fmS9zvWJgM/preview",
//   //     },
//   //     {
//   //       _id: 2,
//   //       pdfTitle: "SSC 2023",
//   //       pdfLink:
//   //         "https://drive.google.com/file/d/1qkJHBg1lQa0VyuI4S0sTmizRJe4b_dMg/preview",
//   //     },
//   //   ];
//   console.log(pdfData?.find((pd) => pd._id === pdfId)?.pdfLink || "");
//   return (
//     <div className="">
//       <h2 className="text-center text-2xl">{label}</h2>
//       {pdfData?.map((pd, index) => (
//         <h3
//           key={index}
//           onClick={() => {
//             setPdfId((prevPdfId) => (prevPdfId === pd._id ? null : pd._id));

//             setIsLoading(true);
//           }}
//           className={`text-lg ${
//             index % 2 === 0 ? "bg-gray-300" : "bg-gray-400"
//           } my-1 p-1 text-center cursor-pointer rounded-sm  hover:text-blue-600 ${
//             pd._id === pdfId && "text-blue-600"
//           }`}
//         >
//           {pd.pdfTitle}
//         </h3>
//       ))}
//       {/* pagination */}
//       <div className=" flex justify-center pt-3">
//         <Pagination
//           count={page}
//           color="primary"
//           size="small"
//           onChange={(event, page) => setPage(page)}
//         />
//       </div>
//       <div className={`h-auto `}>
//         {/* Render the loader while loading */}
//         {isLoading && <Loader />}
//         <iframe
//           src={pdfData?.find((pd) => pd._id === pdfId)?.pdfLink || ""}
//           title="PDF Viewer"
//           width="100%"
//           height="500px"
//           onLoad={() => setIsLoading(false)} // Add the onLoad event to detect when the iframe content has loaded
//           //   style={{ display: isLoading ? "none" : "block" }} // Hide the iframe until content is loaded
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default PdfViewer;

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
                      className={`cursor-pointer  bg-gray-400 px-2 mr-2 py-1 ${
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
