import React, { useState } from "react";
import Sidebar from "./Sidebar";
import StepsContainer from "./StepsContainer";

export type StepNumber = 1 | 2 | 3 | 4 | 5;

const Form: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<StepNumber>(1);

  const increaseStep = () => {
    setCurrentStep(
      (prevStep: StepNumber): StepNumber =>
        prevStep < 5 ? ((prevStep + 1) as StepNumber) : prevStep
    );
  };

  const decreaseStep = () => {
    setCurrentStep(
      (prevStep: StepNumber): StepNumber =>
        prevStep > 1 ? ((prevStep - 1) as StepNumber) : prevStep
    );
  };

  return (
    <main className="form">
      <Sidebar stepNumber={currentStep} />
      <StepsContainer
        currentStep={currentStep}
        increaseStep={increaseStep}
        decreaseStep={decreaseStep}
      />
    </main>
  );
};

export default Form;
