import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import ImageWithPlaceholder from "./ImageWithPlaceholder";
import Loader from "./loader/Loader";

const ProfilesViewer = ({ endPoint, header, dependency }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get(endPoint)
      .then((response) => {
        setProfiles(response.data);
        // console.log(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error fetching document:", error);
      });
  }, [dependency, endPoint]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h1 className="text-center text-2xl my-5 customFont">{header}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-5">
            {profiles.map((profile) => (
              <div
                key={profile._id}
                className=" p-4 rounded-lg shadow flex flex-col items-center hover:bg-white dark:hover:bg-gray-600 hover:shadow-lg"
              >
                {/* <img
                  src={process.env.REACT_APP_BASE_UPLOADS + profile.path}
                  alt={`${profile.name || profile.title}'s profile`}
                  className="w-28 h-28 rounded-full mb-2 object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://iwfstaff.com.au/wp-content/uploads/2017/12/placeholder-image.png"; // Replace with your placeholder image path
                    e.target.alt = "Image not found"; // Optionally, update the alt text
                  }}
                /> */}
                <ImageWithPlaceholder
                  actualSrc={process.env.REACT_APP_BASE_UPLOADS + profile.path}
                  alt={`${profile.name || profile.title}'s profile`}
                  className="w-36 h-36 rounded-full mb-2 object-cover"
                />
                <h2 className="text-xl font-semibold mb-2">
                  {profile.name || profile.title}
                </h2>
                <p className="text-gray-600">{profile.position}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilesViewer;
