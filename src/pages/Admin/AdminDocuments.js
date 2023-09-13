import React, { useState } from "react";
import { toast } from "react-toastify";
import Inputs from "../../components/Inputs";
import PdfViewer from "../../components/PdfViewer";
import Button from "../../components/button/Button";
import axiosInstance from "../../utils/axiosInstance";

const AdminDocuments = () => {
  const [loading, setLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const handleUpdate = async (formData, file) => {
    try {
      setLoading(true);
      const formDataToSend = new FormData();

      //   Append individual fields from formData
      formDataToSend.append("pdfTitle", formData.pdfTitle);
      //   formDataToSend.append("position", formData.position);

      // Append the file
      formDataToSend.append("pdf", file);

      // Iterate through the FormData and log its contents
      for (const pair of formDataToSend.entries()) {
        console.log(pair[0], pair[1]);
      }
      // Make a POST request to the endpoint
      const response = await axiosInstance.post("documents", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data for file upload
        },
      });
      setLoading(false);
      // Handle the response, e.g., display a success message
      toast.success("New Results added");
      console.log("Response:", response.data);
    } catch (error) {
      // Handle errors, e.g., display an error message
      toast.error("Server Error, Please try again later");
      console.error("Error:", error);
    }
  };
  const inputFields = [
    {
      name: "pdfTitle",
      label: "Title",
      placeholder: "Institution's approve letter",
    },

    { name: "pdf", label: "PDF", type: "file" },
    // Add more input fields as needed
  ];
  return (
    <div>
      <Button
        label="New Docs"
        onClick={() => setIsShow((prevIsShow) => !prevIsShow)}
        color="green"
      />
      <Inputs
        inputFields={inputFields}
        onUpdate={handleUpdate}
        loading={loading}
        isShow={isShow}
      />
      <PdfViewer endPoint="documents" heading="School Accreditation Records" />
    </div>
  );
};

export default AdminDocuments;
