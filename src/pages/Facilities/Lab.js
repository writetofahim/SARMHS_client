import React from "react";

const Lab = () => {
  return (
    <div className="lg:w-[75%] w-ful lg:mt-0 mt-5">
      <div className="w-full">
        <img
          className="w-full h-80 object-cover"
          src="https://iwfstaff.com.au/wp-content/uploads/2017/12/placeholder-image.png"
          alt=""
        />
        <h1 className="py-2 bg-orange-300 mb-5 px-3 font-bold text-white">
          জীববিজ্ঞান ব্যাবহারিক ক্লাসে অধ্যায়নরত ক্যামব্রিয়ান স্কুল অ্যান্ড
          কলেজের শিক্ষার্থীরা
        </h1>
      </div>

      {/* photo gallery section*/}
      <div className="mb-10">
        <h1 className="py-2 text-xl bg-orange-300 my-3 px-3 font-bold text-white">
          ফটো গ্যালারি
        </h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-2">
          <img
            className="w-full"
            src="https://iwfstaff.com.au/wp-content/uploads/2017/12/placeholder-image.png"
            alt=""
          />
          <img
            className="w-full"
            src="https://iwfstaff.com.au/wp-content/uploads/2017/12/placeholder-image.png"
            alt=""
          />
          <img
            className="w-full"
            src="https://iwfstaff.com.au/wp-content/uploads/2017/12/placeholder-image.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Lab;
