import React from "react";
import ProfilesViewer from "../../components/ProfilesViewer";

// const teachers = [
//   {
//     id: 1,
//     name: "John Doe",
//     subject: "Mathematics",
//     imageUrl:
//     "https://iwfstaff.com.au/wp-content/uploads/2017/12/placeholder-image.png",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     subject: "English",
//     imageUrl:
//     "https://iwfstaff.com.au/wp-content/uploads/2017/12/placeholder-image.png",
//   },
//   {
//     id: 3,
//     name: "Jane Smith",
//     subject: "English",
//     imageUrl:
//     "https://iwfstaff.com.au/wp-content/uploads/2017/12/placeholder-image.png",
//   },
//   {
//     id: 4,
//     name: "Jane Smith",
//     subject: "English",
//     imageUrl:
//     "https://iwfstaff.com.au/wp-content/uploads/2017/12/placeholder-image.png",
//   },
//   // Add more teachers here
// ];

const Teachers = () => {
  return (
    <div className="">
      <ProfilesViewer endPoint="teachers" header="All Teachers" />
    </div>
  );
};

export default Teachers;
