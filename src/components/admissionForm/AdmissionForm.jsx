import { Form, Formik } from "formik";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosInstance";
import { admissionValidationSchema } from "../../validationSchemas";
import { TextInput } from "../formElements/formElements";

function AdmissionForm({ setAdmissionId }) {
  const [dob, setDob] = useState();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    studentNameBangla: "",
    studentNameEnglish: "",
    fatherNameBangla: "",
    fatherNameEnglish: "",
    fatherOccupation: "",
    motherNameBangla: "",
    motherNameEnglish: "",
    presentVillage: "",
    presentPO: "",
    presentUpazila: "",
    presentZila: "",
    permanentVillage: "",
    permanentPO: "",
    permanentUpazila: "",
    permanentZila: "",
    guardianName: "",
    guardianPhone: "",
    guardianVillage: "",
    guardianPO: "",
    guardianRelation: "",
    previousSchoolName: "",
    passedYear: "",
    classWantToTakeAdmission: "",
    birthCertificateNum: "",
    yearlyIncomeInFamily: "",
    membersInFamily: "",
  };

  const handleSubmit = async (values) => {
    // event.preventDefault();
    setLoading(true);

    try {
      const response = await axiosInstance.post("admission", values);
      // Handle the response as needed
      if (response.status === 200) {
        toast.success("Your application has been submitted successfully");
        setAdmissionId(response.data.admissionId);
      } else {
        // Handle error
        toast.error("Please try again later");
      }
    } catch (error) {
      // Handle error
      console.log(error);
      toast.error("Please try again later");
      // console.error('An error occurred:', error);
    }
    setLoading(false);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Student Information</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={admissionValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values);
          // setTimeout(() => {
          //   console.log({ ...values, dob });
          //   alert(JSON.stringify(values, null, 2));
          //   setSubmitting(false);
          // }, 400);
        }}
      >
        <Form>
          {/* Student Name */}
          <div className="mb-4 border-b dark:border-gray-700 pb-2 flex gap-5">
            <div>
              <TextInput
                label="শিক্ষার্থীর নাম
                (Bangla)"
                name="studentNameBangla"
                type="text"
                placeholder="ফাহিম আহমেদ"
              />
            </div>
            <div>
              <TextInput
                label="শিক্ষার্থীর নাম
                (English)"
                name="studentNameEnglish"
                type="text"
                placeholder="Fahim Ahammad"
              />
            </div>
          </div>
          {/* father's name */}
          <div className="mb-4 border-b dark:border-gray-700 pb-2 flex gap-5">
            <div>
              <TextInput
                label="পিতার নাম
                (Bangla)"
                name="fatherNameBangla"
                type="text"
                placeholder=""
              />
            </div>
            <div>
              <TextInput
                label="পিতার নাম
                (English)"
                name="fatherNameEnglish"
                type="text"
                placeholder=""
              />
            </div>
            <div>
              <TextInput
                label="পেশা"
                name="fatherOccupation"
                type="text"
                // placeholder="প্রবাসী"
              />
            </div>
          </div>
          {/* mother's name */}
          <div className="mb-4 border-b dark:border-gray-700 pb-2 flex gap-5">
            <div>
              <TextInput
                label="মাতার নাম
                (Bangla)"
                name="motherNameBangla"
                type="text"
                placeholder=""
              />
            </div>
            <div>
              <TextInput
                label="মাতার নাম
                (English)"
                name="motherNameEnglish"
                type="text"
                placeholder=""
              />
            </div>
            {/* <div>
              <TextInput
                label="পেশা"
                name="occupation"
                type="text"
                placeholder="প্রবাসী"
              />
            </div> */}
          </div>
          {/* present address */}
          <div className="mb-4 border-b dark:border-gray-700 pb-2 flex gap-5">
            <h4>বর্তমান ঠিকানা:</h4>
            <div>
              <TextInput
                label="গ্রাম"
                name="presentVillage"
                type="text"
                placeholder="জয়নগর"
              />
            </div>
            <div>
              <TextInput
                label="ডাকঘর"
                name="presentPO"
                type="text"
                placeholder="সলিমগঞ্জ"
              />
            </div>
            <div>
              <TextInput
                label="উপজেলা"
                name="presentUpazila"
                type="text"
                placeholder="বাঞ্ছারামপুর"
              />
            </div>
            <div>
              <TextInput
                label="জেলা"
                name="presentZila"
                type="text"
                placeholder="ব্রাহ্মণবাড়িয়া"
              />
            </div>
          </div>
          {/* permanent address */}
          <div className="mb-4 border-b dark:border-gray-700 pb-2 flex gap-5">
            <h4>স্থায়ী ঠিকানা:</h4>
            <div>
              <TextInput
                label="গ্রাম"
                name="permanentVillage"
                type="text"
                placeholder=""
              />
            </div>
            <div>
              <TextInput
                label="ডাকঘর"
                name="permanentPO"
                type="text"
                placeholder=""
              />
            </div>
            <div>
              <TextInput
                label="উপজেলা"
                name="permanentUpazila"
                type="text"
                placeholder=""
              />
            </div>
            <div>
              <TextInput
                label="জেলা"
                name="permanentZila"
                type="text"
                placeholder=""
              />
            </div>
          </div>
          {/* guardian name */}
          <div className="mb-4 border-b dark:border-gray-700 pb-2 flex gap-5">
            <h4>অভিভাবকের তথ্য (পিতার অবর্তমানে):</h4>
            <div>
              <TextInput
                label="নাম"
                name="guardianName"
                type="text"
                placeholder=""
              />
            </div>
            <div>
              <TextInput
                label="মোবাইল নং"
                name="guardianPhone"
                type="phone"
                placeholder=""
              />
            </div>
            <div>
              <TextInput
                label="গ্রাম"
                name="guardianVillage"
                type="text"
                placeholder=""
              />
            </div>
            <div>
              <TextInput
                label="ডাকঘর"
                name="guardianPO"
                type="text"
                placeholder=""
              />
            </div>

            <div>
              <TextInput
                label="সম্পর্ক"
                name="guardianRelation"
                type="text"
                placeholder=""
              />
            </div>
          </div>
          {/* academic info */}
          <div className="mb-4 border-b dark:border-gray-700 pb-2 flex gap-5">
            <h4>শিক্ষা সম্পর্কিত তথ্য:</h4>
            <div>
              <TextInput
                label="পূর্ববর্তী শিক্ষাপ্রতিষ্ঠানের নাম"
                name="previousSchoolName"
                type="text"
                placeholder=""
              />
            </div>
            <div>
              <TextInput
                label="পাশের সন"
                name="passedYear"
                type="text"
                placeholder=""
              />
            </div>
            <div>
              <TextInput
                label="যে শ্রেণীতে ভর্তি হতে ইচ্ছুক"
                name="classWantToTakeAdmission"
                type="text"
                placeholder=""
              />
            </div>
          </div>
          {/* dob */}
          <div className="mb-4 border-b dark:border-gray-700 pb-2 flex gap-5">
            <div className="">
              <label
                className="block text-gray-600 dark:text-white"
                htmlFor="dob"
              >
                জন্ম তারিখ:
              </label>
              <input
                required
                onChange={(e) => setDob(e.target.value)}
                type="date"
                id="dob"
                name="dob"
                className="h-10 px-3 w-full border rounded-md p-2"
              />
            </div>
            <div>
              <TextInput
                label="জন্ম নিবন্ধন সনদ নং"
                name="birthCertificateNum"
                type="text"
                placeholder=""
              />
            </div>
          </div>
          {/* family info */}
          <div className="mb-4 border-b dark:border-gray-700 pb-2 flex gap-5">
            <h4>পারিবারিক তথ্য:</h4>
            <div>
              <TextInput
                label="পরিবার এর বার্ষিক আয়"
                name="yearlyIncomeInFamily"
                type="text"
                placeholder=""
              />
            </div>
            <div>
              <TextInput
                label="পরিবারে সদস্য সংখ্যা"
                name="membersInFamily"
                type="number"
                placeholder=""
              />
            </div>
          </div>

          {/* submit */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default AdmissionForm;
