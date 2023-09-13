/**
This component is a React slider that displays recent works data in the form of slides. 
It uses the following dependencies: @mui/material, @mui/system, and react-slick.

The slider includes two arrow components for navigating to the next and previous slide. 
These components are defined using react-icons/gr and named SampleNextArrow and SamplePrevArrow, respectively. 
The arrow components are passed to the slider component using the nextArrow and prevArrow properties of the settings object.

The settings object defines the behavior of the slider, including the number of slides to show at once, the speed of the slide transitions, and the breakpoints for different screen sizes. 
The recentWorksData array is mapped to generate the individual slides. 
Each slide displays an image, title, and a stack of Chip components representing the technologies used in the project.

Finally, the RecentWorksSlider component wraps the slider component and the individual slides to render the complete slider.
 */

import React, { useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import axiosInstance from "../../utils/axiosInstance";
// import postLogger from "../../utils/postLogger";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <GrNext
      className="md:block text-4xl md:text-5xl absolute right-0 top-1/2 cursor-pointer  opacity-30 hover:opacity-100 hover:bg-primary-300 transition-all -translate-y-[100%] p-2 rounded-full translate-x-[30%] md:translate-x-[30%]"
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <GrPrevious
      className="md:block z-10 text-4xl md:text-5xl absolute left-0 top-1/2 cursor-pointer  opacity-30 hover:opacity-100 hover:bg-primary-300 transition-all -translate-y-[100%] p-2 rounded-full -translate-x-[30%] md:-translate-x-[30%]"
      onClick={onClick}
    />
  );
}

var settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: "linear",
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1180,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const SingleSlide = (props) => {
  return (
    <div className=" mx-2 rounded-md relative shadow-xl hover:shadow-lg  pt-5 group dark:bg-gray-700 overflow-hidden duration-200">
      <div className="h-[80px]">
        <Link to="/">
          <h3 className="text-2xl font-bold  dark:text-white mb-2 text-center hover:underline cursor-pointer">
            {props.title}
          </h3>
        </Link>
        <p className="text-center px-2 text-gray-600 dark:text-gray-400">
          {props.subTitle}
        </p>
      </div>
      {/* <div className="mt-0 md:group-hover:translate-y-3 lg:translate-y-14 md:translate-y-10 translate-y-2 duration-300 custom-shadow lg:h-[250px] ">
        <img
          src={`${import.meta.env.REACT_APP_SERVER_PATH}/${props.image}`}
          alt="recent works img"
          className="rounded-tl-xl rounded-tr-xl aspect-[1.4] object-contain "
        />
      </div> */}
      <div className="mt-0 md:group-hover:translate-y-3 lg:translate-y-14 md:translate-y-10 translate-y-2 duration-300 shadow-md lg:h-[220px]">
        <img
          src={`${process.env.REACT_APP_BASE_UPLOADS + props.path}`}
          onError={(e) => {
            e.target.src =
              "https://iwfstaff.com.au/wp-content/uploads/2017/12/placeholder-image.png"; // Replace with your placeholder image path
            e.target.alt = "Image not found"; // Optionally, update the alt text
          }}
          alt="recent works img"
          className=" object-cover h-full w-full  shadow-md"
        />
      </div>
    </div>
  );
};

function RecentWorksSlider() {
  const [data, setData] = useState(null);
  const img =
    "https://iwfstaff.com.au/wp-content/uploads/2017/12/placeholder-image.png";
  const data2 = [
    { image: img, title: "2023 Final game 1" },
    { image: img, title: "2023 Final game2" },
    { image: img, title: "2023 Final game3" },
    { image: img, title: "2023 Final game4" },
    { image: img, title: "2023 Final game5" },
    { image: img, title: "2023 Final game6" },
  ];

  // Data Fetching
  useEffect(() => {
    axiosInstance
      .get("events")
      .then((response) => {
        setData(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  if (!data) {
    setData(data2);
  }
  // console.log(data);
  return (
    <div className="w-full my-10mmm">
      {Array.isArray(data) ? (
        <div className="">
          <Slider {...settings} className="">
            {data.map((item, index) => (
              <SingleSlide key={index} {...item} />
            ))}
          </Slider>
        </div>
      ) : (
        <p>Data is not an array</p>
      )}
    </div>
  );
}

export default RecentWorksSlider;
