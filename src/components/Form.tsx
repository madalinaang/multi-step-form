import React from "react";
import Sidebar from "./Sidebar";
import StepsContainer from "./StepsContainer";

const Form: React.FC = () => {
  return (
    <main className="form">
      <Sidebar />
      <StepsContainer />
    </main>
  );
};

export default Form;
