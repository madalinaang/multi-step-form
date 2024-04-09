import React, { useRef } from "react";
import Info from "./Info";
import { StepNumber } from "./Form";

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
    if (step1Ref.current?.verify()) increaseStep();
  };

  const handleClickBack = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (step1Ref.current?.verify()) decreaseStep();
  };

  return (
    <section className="steps">
      <Info ref={step1Ref} />
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
  );
};

export default StepsContainer;
