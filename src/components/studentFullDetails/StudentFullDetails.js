import React from "react";

const StudentFullDetails = ({ setShowDetails, details }) => {
  console.log(details);
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
  } = details;
  return (
    <div className="bg-white p-4">
      <button
        onClick={() => setShowDetails(false)}
        className="print:hidden w-10 h-10 border rounded-md flex justify-center items-center m-1 hover:bg-red-500 hover:text-white"
      >
        X
      </button>
      <table>
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
export default StudentFullDetails;
