import React, { useEffect } from "react";
import ProfilesViewer from "../../components/ProfilesViewer";

const Committee = () => {
  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <ProfilesViewer endPoint="members" header="All Members" />
    </div>
  );
};

export default Committee;
