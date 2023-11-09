import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContexts";

const FilledAdmissionForm = () => {
  const { studentDetails } = useContext(AuthContext);
  const currentDate = new Date();
  // Convert the date to a string, e.g., "YYYY-MM-DD" format
  const formattedDate = currentDate.toISOString().split("T")[0];
  if (!studentDetails) {
    return (
      <p className="text-center text-red-500">Student details not found</p>
    );
  }

  const {
    studentNameBangla,
    studentNameEnglish,
    fatherNameBangla,
    fatherNameEnglish,
    fatherOccupation,
    motherNameBangla,
    motherNameEnglish,
    presentVillage,
    presentPO,
    presentUpazila,
    presentZila,
    permanentVillage,
    permanentPO,
    permanentUpazila,
    permanentZila,
    guardianName,
    guardianPhone,
    guardianVillage,
    guardianPO,
    guardianRelation,
    previousSchoolName,
    passedYear,
    classWantToTakeAdmission,
    dob,
    birthCertificateNum,
    yearlyIncomeInFamily,
    membersInFamily,
    admissionId,
  } = studentDetails;

  return (
    <div className="   ">
      <div className="print:w-[100%] print:m-0 mx-auto w-[75%] ">
        <div className="w-full">
          <div className="text-center">
            <h1 className=" text-2xl">
              সলিমগঞ্জ আবদুর রউফ মুসলিম উচ্চ বিদ্যালয়
            </h1>
            <h3>নবীনগর, ব্রাহ্মণবাড়িয়া-৩৪১৮</h3>
            <h3 className="text-xl">ভর্তির আবেদন পত্র</h3>
          </div>
          <div className="flex justify-between">
            <h4>তারিখ: {formattedDate}</h4>
            <h4>Admission ID: {admissionId}</h4>
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
                Fields
              </th>
              <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            <TR title="শিক্ষার্থীর নাম (Bangla)" value={studentNameBangla} />
            <TR title="শিক্ষার্থীর নাম (English)" value={studentNameEnglish} />
            <TR title="পিতার নাম (Bangla)" value={fatherNameBangla} />
            <TR title="পিতার নাম (English)" value={fatherNameEnglish} />
            <TR title="পেশা" value={fatherOccupation} />
            <TR title="মাতার নাম (Bangla)" value={motherNameBangla} />
            <TR title="মাতার নাম (English)" value={motherNameEnglish} />
            <TR
              title="বর্তমান ঠিকানা: "
              value={`গ্রাম: ${presentVillage}, ডাকঘর: ${presentPO} , উপজেলা: ${presentUpazila}, জেলা: ${presentZila}.`}
            />
            <TR
              title="Permanent Address"
              value={`গ্রাম: ${permanentVillage}, ডাকঘর: ${permanentPO} , উপজেলা: ${permanentUpazila}, জেলা: ${permanentZila}.`}
            />
            <TR
              title="অভিভাবকের তথ্য (পিতার অবর্তমানে):"
              value={`নাম: ${guardianName}, মোবাইল নং: ${guardianPhone}. গ্রাম: ${guardianVillage}, ডাকঘর: ${guardianPO}, সম্পর্ক: ${guardianRelation}.`}
            />
            <TR
              title="পূর্ববর্তী শিক্ষাপ্রতিষ্ঠানের নাম"
              value={previousSchoolName}
            />
            <TR title="পাশের সন" value={passedYear} />
            <TR
              title="যে শ্রেণীতে ভর্তি হতে ইচ্ছুক"
              value={classWantToTakeAdmission}
            />
            <TR title="জন্ম তারিখ" value={dob} />
            <TR title="জন্ম নিবন্ধন সনদ নং" value={birthCertificateNum} />
            <TR title="পরিবার এর বার্ষিক আয়" value={yearlyIncomeInFamily} />
            <TR title="পরিবারে সদস্য সংখ্যা" value={membersInFamily} />
          </tbody>
        </table>
        <div className="mt-3">
          <p>
            আমি অঙ্গীকার করছি যে, আমার সন্তান{" "}
            <span className="font-bold">{studentNameBangla}</span> সম্মন্ধে
            উপরের উল্লেখিত তথ্যাদি সম্পূর্ণ সত্য. আমি আরও অঙ্গীকার করছি যে,
            বিদ্যালয় কর্তৃপক্ষের শিক্ষা সংশিষ্ট যে কোনো সিদ্ধান্ত বাস্তবায়নে
            সহযোগিতা করবো আমার সন্তান যদি বিদ্যালয়ের শৃঙ্খলা বিরোধী কোনো কাজের
            সাথে জড়িত থাকে তাহলে তার বিরুদ্ধে বিদ্যালয় কর্তৃপক্ষের গ্রহীত যে
            কোনো সিদ্ধান্ত মেনে নিতে বাধ্য থাকবো
          </p>
          <div className="flex justify-between my-5">
            <div>
              <h4 className="font-bold">
                পিত/অভিবাবকের স্বাক্ষর: ..........................
              </h4>
              <h5>তারিখ:...............</h5>
            </div>
            <div>
              <h4 className="font-bold">
                আবেদনকারীর স্বাক্ষর: ..........................
              </h4>
              <h5>তারিখ:...............</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-5 my-5 border-t p-2 print:hidden">
        {/* <button
          // onClick={() => setShowDetails(true)}
          type="button"
          className="p-2 bg-green-500 text-white rounded-md"
        >
          Download
        </button> */}
        <button
          onClick={() => window.print()}
          type="button"
          className="p-2 bg-blue-500 text-white rounded-md"
        >
          Print
        </button>
      </div>
    </div>
  );
};
const TR = ({ title, value }) => {
  return (
    <tr>
      <td className="border px-2 py-4 whitespace-nowrap">{title}</td>
      <td className="border px-2 py-4 whitespace-nowrap">{value}</td>
    </tr>
  );
};
export default FilledAdmissionForm;
