import React from "react";
import ProfilesViewer from "../../components/ProfilesViewer";

const Committee = () => {
  return (
    <div className="">
      <ProfilesViewer endPoint="members" header="All Members" />
    </div>
  );
};

export default Committee;
