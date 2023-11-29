import { Form, Formik } from "formik";
import React, { useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../utils/axiosInstance";
import { editProfileValidation } from "../validationSchemas";
import { TextInput } from "./formElements/formElements";
const ProfileEditor = ({ profile, setProfile }) => {
  const [image, setFile] = useState(null);
  const { name, position, phone, _id } = profile;
  const handleSubmit = async (values) => {
    const newValue = { ...values, image: image };

    try {
      await axiosInstance.put(`teachers/${_id}`, newValue);
      toast.success("Teacher updated");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const initialValues = {
    name: name,
    position: position,
    phone: phone,
    // image: file,
  };
  return (
    <div className=" p-5 backdrop-blur-md bg-slate-400/30 shadow-md rounded-md">
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={editProfileValidation}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values);
        }}
      >
        <Form>
          <TextInput label="Name" name="name" type="text" />
          <TextInput label="Designation" name="position" type="text" />
          <TextInput label="Phone" name="phone" type="phone" />
          <TextInput label="Image" name="image" type="file" setFile={setFile} />

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md mt-3"
          >
            Update
          </button>
          <button
            type="cancel"
            onClick={() => setProfile(null)}
            className="bg-red-500 text-white px-4 py-2 rounded-md mt-3 ml-3"
          >
            Cancel
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ProfileEditor;
