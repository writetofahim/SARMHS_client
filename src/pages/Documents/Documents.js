// import React, { useEffect, useState } from "react";
// import Loader from "../../components/loader/Loader";

// const Documents = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isClicked, setIsClicked] = useState(false);
//   const [pdfId, setPdfId] = useState("");
//   const [img, setImg] = useState("");
//   const [initialized, setInitialized] = useState(false);
//   const [selectedFileUrl, setSelectedFileUrl] = useState("");

//   const handleIFrameLoad = () => {
//     setIsLoading(false); // Set loading state to false when the iframe content has loaded
//   };

//   useEffect(() => {
//     if (initialized) {
//       setIsClicked(true);
//       setIsLoading(true);
//     } else {
//       console.log("initialized");
//       setInitialized(true);
//       setIsLoading(false);
//     }
//   }, [pdfId]);

//   const handleSuccess = (files) => {
//     console.log(files);
//     setImg(files[0].thumbnailLink);
//     if (files.length > 0) {
//       setSelectedFileUrl(files[0].link);
//     }
//   };

//   const handleClick = (id) => {
//     setPdfId(id);
//   };

//   const pdfData = [
//     {
//       id: 1,
//       pdfTitle: "শ্রেনী ভিত্তিক পাঠদান এর স্বীকৃতি",
//       pdfLink:
//         "https://drive.google.com/file/d/1YiXAYlm-Y7byfzNYunvEd0fmS9zvWJgM/preview",
//     },
//     {
//       id: 2,
//       pdfTitle: "অনুমোদিত শাখার তথ্য",
//       pdfLink:
//         "https://drive.google.com/file/d/1qkJHBg1lQa0VyuI4S0sTmizRJe4b_dMg/preview",
//     },
//   ];

//   const pdfSrc = pdfData.find((pd) => pd.id === pdfId);
//   console.log(isLoading + "isLoading");

//   return (
//     <div className="px-5 h-[calc(100vh-64px)] mt-20">
//       {pdfData.map((pd, index) => (
//         <h3
//           key={index}
//           onClick={() => handleClick(pd.id)}
//           className={`text-lg bg-orange-300 my-1 p-1 text-center cursor-pointer rounded-sm text-white hover:text-blue-600 ${
//             pd.id === pdfId && "text-blue-600"
//           }`}
//         >
//           {pd.pdfTitle}
//         </h3>
//       ))}
//       <div className={`h-full `}>
//         {isLoading && <Loader />} {/* Render the loader while loading */}
//         <iframe
//           src={pdfSrc?.pdfLink || ""}
//           title="PDF Viewer"
//           width="100%"
//           height="80%"
//           onLoad={handleIFrameLoad} // Add the onLoad event to detect when the iframe content has loaded
//           style={{ display: isLoading ? "none" : "block" }} // Hide the iframe until content is loaded
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default Documents;

import React from "react";
import PdfViewer from "../../components/PdfViewer";

const Documents = () => {
  return (
    <div className="px-5 ">
      <PdfViewer endPoint="documents" heading="School Accreditation Records" />
    </div>
  );
};

export default Documents;
