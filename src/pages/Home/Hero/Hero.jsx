// import heroImg3 from "../../../assets/images/school/playground.jpeg";
import heroImg from "../../../assets/images/school/school_1.jpeg";
import heroImg2 from "../../../assets/images/school/school_2.jpg";
import HeroSlide from "./HeroSlide";
const heroData = [
  {
    title: "সলিমগঞ্জ আব্দুল রউফ মুসলিম উচ্চ বিদ্যালয়",
    description: "Since 1918",
    image: heroImg,
  },
  {
    title: "সলিমগঞ্জ আব্দুল রউফ মুসলিম উচ্চ বিদ্যালয়",
    description: "Students Growing, Learning Together Strong",
    image: heroImg2,
  },
  // {
  //   title: "সলিমগঞ্জ আব্দুল রউফ মুসলিম উচ্চ বিদ্যালয়",
  //   description: "Students Growing, Learning Together Strong",
  //   image: heroImg3,
  // },
];
const Hero = () => {
  return (
    <div className="flex justify-center items-center">
      <HeroSlide heroData={heroData} />
    </div>
  );
};

export default Hero;
