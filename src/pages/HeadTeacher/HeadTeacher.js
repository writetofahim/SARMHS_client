import React from "react";
import { useLocation } from "react-router-dom";
import principal from "../../assets/images/teacher/headTeacher.jpg";

const HeadTeacher = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="px-5 h-[calc(100vh-64px)] mt-20 mb-4 overflow-x-scroll flex flex-col  items-center">
      <img
        className="rounded-sm h-60 object-cover object-top"
        src={principal}
        alt=""
      />
      <div className="text-center h-40">
        <h3 className="mt-2 text-xl font-semibold text-sans">Ahammad Ali</h3>
        <div className=" text-sm mb-2">Head Teacher</div>
        <p className="mb-4 text-left dark:text-gray-400">
          I am greatly honored to extend a warm welcome to you on behalf of
          Salimganj A. R. M. High School through our official website. As the
          principal of Salimganj A. R. M. High School, it brings me immense joy
          to introduce you to our school's ethos, values, and our unwavering
          dedication to nurturing the potential within our students.
        </p>
        <p className="mb-4 text-left dark:text-gray-400">
          At Salimganj A. R. M. High School, we firmly believe that education
          forms the bedrock upon which dreams are constructed. We consider it a
          privilege to be entrusted with the responsibility of shaping the
          futures of our students. Our institution is more than just a center of
          learning; it's a thriving community where we celebrate and cultivate
          the unique talents and abilities of each student.
        </p>
        <p className="mb-4 text-left dark:text-gray-400">
          Our team of devoted educators is motivated by a profound love for
          teaching and an unwavering commitment to cultivating an atmosphere
          that fosters curiosity, critical thinking, and creativity. We endeavor
          to deliver a comprehensive education that transcends textbooks,
          emphasizing values such as empathy, respect, and integrity. Our goal
          is to equip our students not only for academic excellence but also to
          become responsible and compassionate global citizens.
        </p>
        <p className="mb-4 text-left dark:text-gray-400">
          Thank you for becoming a part of the Salimganj A. R. M. High School
          family. Together, let us embark on this educational journey, nurturing
          a future where every student radiates with brilliance.
        </p>
      </div>
    </div>
  );
};

export default HeadTeacher;
