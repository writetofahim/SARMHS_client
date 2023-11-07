import * as Yup from "yup";
export const admissionValidationSchema = Yup.object({
  studentNameBangla: Yup.string().required("Student name (Bangla) is required"),
  studentNameEnglish: Yup.string().required(
    "Student name (English) is required"
  ),

  fatherNameBangla: Yup.string().required("Father's name (Bangla) is required"),
  fatherNameEnglish: Yup.string().required(
    "Father's name (English) is required"
  ),
  fatherOccupation: Yup.string().required("Father's occupation is required"),

  motherNameBangla: Yup.string().required("Mother's name (Bangla) is required"),
  motherNameEnglish: Yup.string().required(
    "Mother's name (English) is required"
  ),

  presentVillage: Yup.string().required("Village is required"),
  presentPO: Yup.string().required("PO is required"),
  presentUpazila: Yup.string().required("Upazila is required"),
  presentZila: Yup.string().required("Zila is required"),
  permanentVillage: Yup.string().required("Village is required"),
  permanentPO: Yup.string().required("PO is required"),
  permanentUpazila: Yup.string().required("Upazila is required"),
  permanentZila: Yup.string().required("Zila is required"),

  guardianName: Yup.string().required("Guardian name is required"),
  guardianPhone: Yup.string().required("Guardian phone number is required"),
  guardianVillage: Yup.string().required("Guardian village is required"),
  guardianPO: Yup.string().required("Guardian PO is required"),
  guardianRelation: Yup.string().required("Guardian relation is required"),

  previousSchoolName: Yup.string().required("Prev. school name is required"),
  passedYear: Yup.string().required(" required"),
  classWantToTakeAdmission: Yup.string().required(" required"),

  birthCertificateNum: Yup.string().required(" required"),

  yearlyIncomeInFamily: Yup.string().required(" required"),
  membersInFamily: Yup.string().required(" required"),
});
