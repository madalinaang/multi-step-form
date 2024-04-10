import React, { useRef } from "react";
import Info from "./Info";
import Plan from "./Plan";
import Addons from "./Addons";
import Summary from "./Summary";
import { StepNumber } from "./Form";
import { UserProvider } from "../context/UserContext";

interface StepsContainerProps {
  currentStep: StepNumber;
  increaseStep: () => void;
  decreaseStep: () => void;
  changeStep: () => void;
}

interface RefBool {
  submit: () => boolean;
}

interface RefVoid {
  submit: () => boolean;
}

const StepsContainer: React.FC<StepsContainerProps> = ({
  currentStep,
  increaseStep,
  decreaseStep,
  changeStep,
}) => {
  const step1Ref = useRef<RefBool>(null);
  const step2Ref = useRef<RefVoid>(null);
  const step3Ref = useRef<RefVoid>(null);

  const handleClickNext = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (currentStep === 1 && step1Ref.current?.submit()) {
      increaseStep();
    } else if (currentStep === 2) {
      step2Ref.current?.submit();
      increaseStep();
    } else if (currentStep === 3) {
      step3Ref.current?.submit();
      increaseStep();
    }
  };

  const handleClickBack = (e: React.MouseEvent<HTMLButtonElement>): void => {
    decreaseStep();
  };

  return (
    <UserProvider>
      <section className="steps">
        {currentStep === 1 && <Info ref={step1Ref} />}
        {currentStep === 2 && <Plan ref={step2Ref} />}
        {currentStep === 3 && <Addons ref={step3Ref} />}
        {currentStep === 4 && <Summary change={changeStep} />}
        <nav>
          <button
            className={"back " + (currentStep === 1 && "hidden")}
            onClick={handleClickBack}
          >
            Go Back
          </button>
          <button
            className={"next " + (currentStep === 4 && "confirm")}
            onClick={handleClickNext}
          >
            {currentStep === 4 ? "Confirm" : "Next Step"}
          </button>
        </nav>
      </section>
    </UserProvider>
  );
};

export default StepsContainer;
