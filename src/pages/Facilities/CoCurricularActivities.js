import React from "react";

const CoCurricularActivities = () => {
  return (
    <div className="lg:w-[75%] w-ful lg:mt-0 mt-5">
      <div className="w-full">
        <img
          className="w-full h-80 object-cover"
          src="https://iwfstaff.com.au/wp-content/uploads/2017/12/placeholder-image.png"
          alt=""
        />
        <div>
          <h1 className="py-2 bg-orange-300 mt-3 px-3 font-bold text-white">
            কালচারাল একাডেমী
          </h1>
          <div className="p-3 border dark:border-gray-500 dark:text-gray-400">
            উদ্যোগ :
            <ul>
              <li>
                * শিক্ষার্থীদের পূর্ণ মেধা বিকাশ ও সামগ্রিক শিক্ষা নিশ্চিত করার
                লক্ষে ক্যামব্রিয়ান এডুকেশন গ্রুপ কর্তৃক গ্রহীত এক নতুন উদ্যোগ।
              </li>
              <li>
                * বিভিন্ন সাংস্কৃতিক বিষয় ও সৃজনশীলতা বিকাশের ও নানামূখি
                উদ্যোগের প্রশিক্ষণ কেন্দ্র।{" "}
              </li>
              <li>
                * সাংস্কৃতিক শিক্ষার প্রচলিত প্রচলিত ধারায় প্রয়োজনীয় পরিবর্তন ও
                আধুনিকায়ন।{" "}
              </li>
              <li>
                {" "}
                * আলোকিত মানুষ তৈরীর উদ্দেশ্যে গঠিত একট আধুনিক সাংস্কৃতিক শিক্ষা
                কেন্দ্র।{" "}
              </li>
              <li>
                * শিক্ষার্থীদের বিশ্বমানের নাগরিক হিসাবে গড়ে তুলতে একটি
                প্রয়োজনীয় পদক্ষেপ।
              </li>
              <li>
                * স্বকীয় সংস্কৃতির পঠন- পাঠন, প্রশিক্ষণ ও চর্চায় দৃঢ় প্রত্যয়ী
                প্রতিষ্ঠান।{" "}
              </li>
              <li>
                * বাংলা সংস্কৃতিকে জাতীয় ও আর্ন্তজাতিক পরিমন্ডলে তুলে ধরার
                অন্যতম মাধ্যম।
              </li>
              <li>
                {" "}
                * সুস্থ ধারার সাংস্কৃতিক চর্চার নির্ভরযোগ্য স্থান। * মননশীলতার
                বিকাশ ও চরিত্র গঠনের উপযুক্ত স্থান।
              </li>
            </ul>
          </div>
        </div>
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

export default CoCurricularActivities;
