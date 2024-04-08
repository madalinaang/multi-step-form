import React from "react";
import { useMediaQuery } from "react-responsive";
import Step from "./Step";

const Sidebar: React.FC = () => {
  const isMobileDevice = useMediaQuery({
    query: "(max-width: 800px)",
  });

  return (
    <section className="sidebar">
      <img
        src={
          isMobileDevice
            ? process.env.PUBLIC_URL + "/images/bg-sidebar-mobile.svg"
            : process.env.PUBLIC_URL + "/images/bg-sidebar-desktop.svg"
        }
      />
      <div className="container">
        <Step number={1} />
        <Step number={2} selected />
        <Step number={3} />
        <Step number={4} />
      </div>
    </section>
  );
};

export default Sidebar;
