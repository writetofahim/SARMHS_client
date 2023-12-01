import React, { useContext, useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContexts";
import axiosInstance from "../utils/axiosInstance";
import Loader from "./loader/Loader";

const PdfViewer = ({ endPoint, heading }) => {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [pdfData, setPdfData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [clickedElement, setClickedElement] = useState(null);
  const { user } = useContext(AuthContext);
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
  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`documents/${id}`);
      toast.success("delete success");
    } catch (error) {
      toast.error("delete fail!");
    }
  };
  const isUrlAdmin = (url) => {
    return url.includes("admin");
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
                      onClick={(e) => {
                        handlePdfClick(pdf);
                        e.stopPropagation();
                      }}
                    >
                      {/* options */}
                      <div
                        className={`z-40 flex justify-end relative ${
                          user?.success & isUrlAdmin(window.location.pathname)
                            ? "block"
                            : "hidden"
                        }`}
                      >
                        <BsThreeDotsVertical
                          className="text-xl cursor-pointer"
                          onClick={(e) => {
                            setClickedElement((prevProfile) =>
                              prevProfile === null ? pdf : null
                            );
                            e.stopPropagation();
                          }}
                        />
                        <div
                          className={`absolute top-5 bg-white px-2 py-3 shadow ${
                            clickedElement?._id === pdf?._id
                              ? "block"
                              : "hidden"
                          }`}
                        >
                          <button
                            onClick={() => handleDelete(pdf?._id)}
                            className="block  p-2"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                      <div>{pdf.pdfTitle}</div>
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
