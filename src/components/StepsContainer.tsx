import React, { useRef } from "react";
import Info from "./Info";
import { StepNumber } from "./Form";
import { UserProvider } from "../context/UserContext";

interface StepsContainerProps {
  currentStep: StepNumber;
  increaseStep: () => void;
  decreaseStep: () => void;
}

const StepsContainer: React.FC<StepsContainerProps> = ({
  currentStep,
  increaseStep,
  decreaseStep,
}) => {
  const step1Ref = useRef<{ verify: () => boolean }>(null);

  const handleClickNext = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (currentStep === 1 && step1Ref.current?.verify()) increaseStep();
    else increaseStep();
  };

  const handleClickBack = (e: React.MouseEvent<HTMLButtonElement>): void => {
    decreaseStep();
  };

  return (
    <UserProvider>
      <section className="steps">
        {currentStep === 1 && <Info ref={step1Ref} />}
        <nav>
          <button
            className={"back " + (currentStep === 1 && "hidden")}
            onClick={handleClickBack}
          >
            Go Back
          </button>
          <button className="next" onClick={handleClickNext}>
            Next Step
          </button>
        </nav>
      </section>
    </UserProvider>
  );
};

export default StepsContainer;
