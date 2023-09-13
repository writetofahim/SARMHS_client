import React, { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Slider from "react-slick";
import Typed from "react-typed";
// Import css files
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ImageWithPlaceholder from "../../../components/ImageWithPlaceholder";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <GrNext
      className="md:block text-4xl md:text-5xl absolute right-0 top-1/2 cursor-pointe opacity-30 hover:opacity-100 hover:bg-primary-300 hover:text-white cursor-pointer transition-all -translate-y-[100%] p-2 translate-x-[20%] rounded-full"
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <GrPrevious
      className="md:block z-10 text-4xl md:text-5xl absolute left-0 top-1/2 cursor-pointe opacity-30 hover:opacity-100 hover:bg-primary-300 hover:text-white cursor-pointer transition-all -translate-y-[100%]  p-2 -translate-x-[20%] rounded-full"
      onClick={onClick}
    />
  );
}

var settings = {
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: "linear",
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

export const SingleSlide = (props) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // console.log(props.title);
  return (
    <div className="">
      <div className="relative">
        <div className="md:h-96 h-72">
          <ImageWithPlaceholder
            className="w-full md:h-96 h-72 object-cover"
            actualSrc={props.image}
            alt={props.title}
          />
          {/* <img
            src={placeholderImage}
            alt="placeholder"
            // className={`w-full md:h-96 h-72 object-cover ${
            //   imageLoaded ? "hidden" : ""
            // }`}
            className={`w-full md:h-96 h-72 object-cover`}
            style={{
              display: imageLoaded ? "none" : "block ",
            }}
          />
          <img
            src={props.image}
            alt={props.title}
            onLoad={() => setImageLoaded(true)}
            className={`w-full md:h-96 h-72 object-cover`}

            // className={`w-full md:h-96 h-72 object-cover ${
            //   imageLoaded ? "" : "hidden"
            // }`}
            // style={{ display: imageLoaded ? "none" : "block" }}
          /> */}
        </div>
        <div className="absolute left-0  bottom-0  md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-auto w-full">
          {/* text */}
          <div className="left backdrop-blur-[2px] md:rounded-md bg-green-200/50 p-5">
            <h2 className=" text-md md:text-3xl text-center md:text-left font-bold mb-2">
              {props.title}
            </h2>
            <div className="flex">
              <Typed
                className="text-gray-700 text-sm md:text-xl w-full text-center mb-2 "
                strings={[props.description]}
                typeSpeed={100}
                backSpeed={50}
                loop
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function HeroSlide({ heroData }) {
  return (
    <div className="w-full">
      <Slider {...settings} className="">
        {heroData &&
          heroData.map((item, index) => <SingleSlide key={index} {...item} />)}
      </Slider>
    </div>
  );
}

export default HeroSlide;
