import React from "react";

const Library = () => {
  return (
    <div className="lg:w-[75%] w-ful lg:mt-0 mt-5">
      <div className="w-full">
        <img
          className="w-full h-80 object-cover"
          src="https://iwfstaff.com.au/wp-content/uploads/2017/12/placeholder-image.png"
          alt=""
        />
        <h1 className="py-2 bg-orange-300 mb-5 px-3 font-bold text-white">
          লাইব্রেরিতে অধ্যায়নরত শিক্ষার্থীরা
        </h1>
      </div>
      <div>
        <h1 className="py-2 bg-orange-300 mt-3 px-3 font-bold text-white">
          সমৃদ্ধ লাইব্রেরি
        </h1>
        <p className="p-3 border dark:border-gray-500 dark:text-gray-400">
          এ প্রতিষ্ঠানে রয়েছে আধুনিক তথ্য ও বইসমৃদ্ধ লাইব্রেরি; যেখানে
          পাঠ্যবইয়ের পাশাপাশি বিভিন্ন বই রয়েছে। শিক্ষার্থীরা তাদের প্রয়োজন মতো
          বই নিয়ে পড়াশোনা করতে পারে; যা শিক্ষার্থীর জ্ঞান বৃদ্ধিতে গুরুত্বপূর্ণ
          ভূমিকা পালন করে।
        </p>
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

export default Library;
