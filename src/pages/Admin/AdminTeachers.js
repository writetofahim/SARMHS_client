import React, { useState } from "react";
import { toast } from "react-toastify";
import Inputs from "../../components/Inputs";
import ProfilesViewer from "../../components/ProfilesViewer";
import Button from "../../components/button/Button";
import axiosInstance from "../../utils/axiosInstance";

const AdminTeachers = () => {
  //   const [teacher, setTeacher] = useState({});
  const [loading, setLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);
  //   const [selectedFile, setSelectedFile] = useState(null);
  const inputFields = [
    { name: "fullName", label: "Full Name", placeholder: "A teacher Name" },
    {
      name: "position",
      label: "Designation",
      placeholder: "Assistant Teacher",
    },
    { name: "image", label: "Image", type: "file" },
    // Add more input fields as needed
  ];
  const handleUpdate = async (formData, file) => {
    try {
      setLoading(true);
      const formDataToSend = new FormData();

      //   Append individual fields from formData
      formDataToSend.append("name", formData.fullName);
      formDataToSend.append("position", formData.position);

      // Append the file
      formDataToSend.append("image", file);

      // Iterate through the FormData and log its contents
      //   for (const pair of formDataToSend.entries()) {
      //     console.log(pair[0], pair[1]);
      //   }
      // Make a POST request to the endpoint
      const response = await axiosInstance.post("teachers", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data for file upload
        },
      });
      setLoading(false);
      // Handle the response, e.g., display a success message
      toast.success("New teacher added");
      console.log("Response:", response.data);

      // Clear the form or perform any other necessary actions
      //   setTeacher({}); // Clear the form data
    } catch (error) {
      // Handle errors, e.g., display an error message
      toast.error("Server Error, Please try again later");
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Button
        label="New Teacher"
        onClick={() => setIsShow((prevIsShow) => !prevIsShow)}
        color="green"
      />
      <Inputs
        inputFields={inputFields}
        onUpdate={handleUpdate}
        loading={loading}
        isShow={isShow}
      />
      <ProfilesViewer
        endPoint="teachers"
        header="All Teachers"
        dependency={loading}
      />
    </div>
  );
};

export default AdminTeachers;
