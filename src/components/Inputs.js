import React, { useState } from "react";
import { toast } from "react-toastify";

const Inputs = ({ inputFields, onUpdate, loading, isShow }) => {
  const [formData, setFormData] = useState({});
  const [file, setFile] = useState(null);

  // Handle input changes and update formData
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file input change and set the selected file
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "application/pdf",
      ];
      const maxSizeMB = 2;

      if (
        allowedTypes.includes(selectedFile.type) &&
        selectedFile.size <= maxSizeMB * 1024 * 1024
      ) {
        setFile(selectedFile);
      } else {
        toast.error(
          "Please select a valid image file (JPEG, PNG, GIF) within 2MB."
        );
        e.target.value = null; // Clear the file input
      }
    }
    // setFile(selectedFile);
  };

  // Handle form submission and pass formData and the selected file to onUpdate
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData, file);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`max-w-mdxxx my-3 mx-auto border-b dark:border-gray-700 pb-3 w-full ${
        isShow ? "block" : "hidden"
      }`}
    >
      {inputFields.map((field) => (
        <div key={field.name} className="mb-4">
          <label
            htmlFor={field.name}
            className="block text-gray-600 text-sm font-semibold mb-1"
          >
            {field.label}
          </label>
          {field.type === "file" ? (
            <input
              type="file"
              name={field.name}
              placeholder={field.placeholder}
              required
              onChange={handleFileChange}
              className="w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            />
          ) : (
            <input
              type={field.type || "text"}
              required
              placeholder={field.placeholder}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className=" flex justify-center items-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          aria-hidden="true"
          className={`w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 ${
            loading ? "block" : "hidden"
          }`}
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        Upload
      </button>
    </form>
  );
};

export default Inputs;
