// import heroImg3 from "../../../assets/images/school/playground.jpeg";
import schoolField from "../../../assets/images/school/schoolField.jpg";
import heroImg from "../../../assets/images/school/school_1.jpeg";
import heroImg2 from "../../../assets/images/school/school_2.jpg";
import teachers from "../../../assets/images/teacher/teachers.jpg";
import HeroSlide from "./HeroSlide";
const heroData = [
  {
    title: "সলিমগঞ্জ আবদুর রউফ মুসলিম উচ্চ বিদ্যালয়",
    description: "Students Growing, Learning Together Strong",
    image: teachers,
  },
  {
    title: "সলিমগঞ্জ আবদুর রউফ মুসলিম উচ্চ বিদ্যালয়",
    description: "Students Growing, Learning Together Strong",
    image: heroImg2,
  },
  {
    title: "সলিমগঞ্জ আবদুর রউফ মুসলিম উচ্চ বিদ্যালয়",
    description: "Students Growing, Learning Together Strong",
    image: schoolField,
  },
  {
    title: "সলিমগঞ্জ আবদুর রউফ মুসলিম উচ্চ বিদ্যালয়",
    description: "Since 1918",
    image: heroImg,
  },
];
const Hero = () => {
  return (
    <div className="flex justify-center items-center">
      <HeroSlide heroData={heroData} />
    </div>
  );
};

export default Hero;
