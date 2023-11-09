import React, { useState } from "react";
import PageTopBanner from "../../components/PageTopBanner";

import { useNavigate } from "react-router-dom";
import AdmissionForm from "../../components/admissionForm/AdmissionForm";

const Admission = () => {
  // const [formData, setFormData] = useState({
  //   studentName: "",
  //   schoolName: "",
  //   currentAddress: "",
  //   classWantToTakeAdmission: "",
  //   previousClassResult: "",
  //   phone: "",
  //   email: "",
  //   // ... other form fields
  // });
  const [loading, setLoading] = useState(false);
  const [admissionId, setAdmissionId] = useState(null);
  const navigate = useNavigate();

  return (
    <div>
      <PageTopBanner title={"Admission"} />
      <div className="max-w-[1200px] w-full mx-auto p-3 md:flex gap-5">
        <div className="w-full mx-auto">
          <h1 className="text-sky-500 dark:text-sky-400 text-xl font-bold">
            Admission-2023
          </h1>

          {admissionId ? (
            <>
              {/* <h1 className="text-center text-2xl my-5 customFont">
                Admission ID
              </h1> */}
              {/* <h3 className="text-center text-2xl">{admissionId}</h3>
              <h2 className="text-center">
                উপরের ID টি সংগ্রহ করুন. ভর্তির পরবর্তী কার্যক্রম এর জন্য
                প্রয়োজন হবে
              </h2> */}
              {navigate("/filled-admission-form")}
              {/* <button
                onClick={() => }
                className="print:hidden w-10 h-10 border rounded-md flex justify-center items-center m-1 hover:bg-red-500 hover:text-white"
              >
                
              </button> */}
            </>
          ) : (
            <AdmissionForm setAdmissionId={setAdmissionId} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Admission;
