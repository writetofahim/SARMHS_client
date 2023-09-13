import React from "react";
import principal from "../../assets/images/teacher/principal.PNG";

const HeadTeacher = () => {
  return (
    <div className="px-5 h-[calc(100vh-64px)] mt-20 mb-4 overflow-x-scroll flex flex-col  items-center">
      <img
        className="rounded-sm h-60 object-cover object-top"
        src={principal}
        alt=""
      />
      <div className="text-center h-40">
        <h3 className="mt-2 text-xl font-semibold text-sans">Sufian Saurov</h3>
        <div className=" text-sm mb-2">Head Teacher</div>
        <p className="mb-4 text-left dark:text-gray-400">
          I am deeply honored to welcome you to our school's official website.
          As the head teacher of Akanagar SESDP Model High School, I am
          delighted to share with you the essence of our school, our values, and
          our commitment to nurturing young minds.
        </p>
        <p className="mb-4 text-left dark:text-gray-400">
          At Akanagar SESDP Model High School, we believe that education is the
          foundation upon which dreams are built, and it is our privilege to be
          entrusted with the responsibility of shaping the future of our
          students. Our school is not just a place of learning, it's a vibrant
          community where each student's unique talents and potentials are
          recognized and nurtured.
        </p>
        <p className="mb-4 text-left dark:text-gray-400">
          Our dedicated team of educators is driven by a passion for teaching
          and a commitment to creating an environment that encourages curiosity,
          critical thinking, and creativity. We strive to provide a holistic
          education that goes beyond textbooks, fostering values of empathy,
          respect, and integrity. Our aim is to prepare our students not only
          for academic success but also for becoming responsible and
          compassionate global citizens.
        </p>
        <p className="mb-4 text-left dark:text-gray-400">
          Thank you for being a part of Akanagar SESDP Model High School. Let's
          embark on this educational journey together, nurturing a future where
          every student shines brightly.
        </p>
      </div>
    </div>
  );
};

export default HeadTeacher;
