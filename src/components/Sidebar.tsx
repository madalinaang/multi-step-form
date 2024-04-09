import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Step from "./Step";
import { StepNumber } from "./Form";

interface SidebarProps {
  stepNumber: StepNumber;
}

const Sidebar: React.FC<SidebarProps> = ({ stepNumber }) => {
  const isMobileDevice = useMediaQuery({
    query: "(max-width: 800px)",
  });

  const [step1, setStep1] = useState<boolean>(false);
  const [step2, setStep2] = useState<boolean>(false);
  const [step3, setStep3] = useState<boolean>(false);
  const [step4, setStep4] = useState<boolean>(false);

  useEffect(() => {
    setStep1(stepNumber === 1);
    setStep2(stepNumber === 2);
    setStep3(stepNumber === 3);
    setStep4(stepNumber === 4 || stepNumber === 5);
  }, [stepNumber]);

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
        <Step number={1} selected={step1} />
        <Step number={2} selected={step2} />
        <Step number={3} selected={step3} />
        <Step number={4} selected={step4} />
      </div>
    </section>
  );
};

export default Sidebar;
