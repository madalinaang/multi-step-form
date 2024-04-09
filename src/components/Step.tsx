import React, { useState, useEffect } from "react";

interface StepProps {
  number: 1 | 2 | 3 | 4;
  selected?: boolean;
}

const Step: React.FC<StepProps> = ({ number, selected = false }) => {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    switch (number) {
      case 1:
        setName("Your Info");
        break;
      case 2:
        setName("Select Plan");
        break;
      case 3:
        setName("Add-ons");
        break;
      case 4:
        setName("Summary");
        break;
      default:
        setName(null);
    }
  }, []);

  return (
    <article className="step">
      <div className={"circle " + (selected && "selected")}>{number}</div>
      <div className="text">
        <p className="step-number">Step {number}</p>
        <p className="step-name">{name}</p>
      </div>
    </article>
  );
};

export default Step;
