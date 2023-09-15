import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axiosInstance from "../utils/axiosInstance";
import ImageWithPlaceholder from "./ImageWithPlaceholder";

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
  const skeletons = [
    {
      name: "John Doe",
    },
    {
      name: "John Doe",
    },
    {
      name: "John Doe",
    },
  ];
  return (
    <div>
      {isLoading ? (
        // <Loader />
        <div>
          <h1 className="text-center text-2xl my-5 customFont">{header}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-5">
            {skeletons.map((profile, index) => (
              <div key={index} className=" p-4 rounded-lg shadow ">
                <div className="h-36 w-36 rounded-full mx-auto mb-[25px]">
                  <Skeleton
                    circle
                    className=" h-36 w-36 rounded-full"
                    // width="100%"
                    containerClassName="rounded-full"
                  />
                </div>
                {/* <h2 className="text-xl font-semibold mb-2">profile name</h2> */}
                <div className="mb-[25px]">
                  <Skeleton />
                </div>
                <Skeleton className="" />
                {/* <p className="text-gray-600">position</p> */}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-center text-2xl my-5 customFont">{header}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-5">
            {profiles.map((profile) => (
              <div
                key={profile._id}
                className=" p-4 rounded-lg shadow flex flex-col items-center hover:bg-white dark:hover:bg-gray-600 hover:shadow-lg"
              >
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
