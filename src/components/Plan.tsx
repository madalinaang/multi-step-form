import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import PlanCard from "./PlanCard";
import { PlanType, useUserContext } from "../context/UserContext";

const Plan = forwardRef<{ submit: () => void }>((_props, ref) => {
  const { user, updateUser } = useUserContext();

  const [selectedPlan, setSelectedPlan] = useState<PlanType>("arcade");
  const [yearly, setYearly] = useState<boolean>(false);

  const handlePlanChange = (plan: PlanType) => {
    setSelectedPlan(plan);
  };

  const handleYearlyChange = (): void => {
    setYearly((prevYearly) => !prevYearly);
  };

  useEffect(() => {
    setSelectedPlan(user.planType);
    setYearly(user.yearly);
  }, [user]);

  const submit = (): void => {
    console.log("aici");
    updateUser({ ...user, planType: selectedPlan, yearly: yearly });
  };

  useImperativeHandle(ref, () => ({
    submit: () => submit(),
  }));

  return (
    <section className="plan">
      <div className="header">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <div className="container">
        <PlanCard
          type="arcade"
          selected={selectedPlan === "arcade"}
          yearly={yearly}
          onClick={() => handlePlanChange("arcade")}
        />
        <PlanCard
          type="advanced"
          selected={selectedPlan === "advanced"}
          yearly={yearly}
          onClick={() => handlePlanChange("advanced")}
        />
        <PlanCard
          type="pro"
          selected={selectedPlan === "pro"}
          yearly={yearly}
          onClick={() => handlePlanChange("pro")}
        />
      </div>
      <div className="period">
        <p className={!yearly && "selected"}>Monthly</p>
        <label className="toggle">
          <input
            type="checkbox"
            checked={yearly}
            onChange={handleYearlyChange}
          />
          <span className="slider"></span>
        </label>
        <p className={yearly && "selected"}>Yearly</p>
      </div>
    </section>
  );
});

export default Plan;
