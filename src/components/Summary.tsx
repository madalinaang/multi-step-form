import React, { useState, useEffect } from "react";
import { PlanType, prices, useUserContext } from "../context/UserContext";

interface SummaryProps {
  change: () => void;
}

const Summary: React.FC<SummaryProps> = ({ change }) => {
  const { user, updateUser } = useUserContext();

  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    let calcTotal = 0;

    calcTotal += prices[user.planType];
    user.online && (calcTotal += prices["online"]);
    user.large && (calcTotal += prices["large"]);
    user.custom && (calcTotal += prices["custom"]);

    user.yearly && (calcTotal *= 10);

    setTotal(calcTotal);
  }, [user]);

  return (
    <section className="summary">
      <div className="header">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div className="container">
        <div className="selected-plan">
          <div className="details">
            <h5>
              {user.planType} ({user.yearly ? "Yearly" : "Monthly"})
            </h5>
            <a onClick={change}>Change</a>
          </div>
          <p className="price">
            ${user.yearly ? prices[user.planType] * 10 : prices[user.planType]}/
            {user.yearly ? "yr" : "mo"}
          </p>
        </div>
        <div className="divider" />
        {user.online && (
          <div className="addon">
            <p>Online service</p>
            <h6>
              +$
              {user.yearly ? prices["online"] * 10 : prices["online"]}/
              {user.yearly ? "yr" : "mo"}
            </h6>
          </div>
        )}
        {user.large && (
          <div className="addon">
            <p>Larger storage</p>
            <h6>
              {" "}
              +$
              {user.yearly ? prices["large"] * 10 : prices["large"]}/
              {user.yearly ? "yr" : "mo"}
            </h6>
          </div>
        )}
        {user.custom && (
          <div className="addon">
            <p>Customizable profile</p>
            <h6>
              +$
              {user.yearly ? prices["custom"] * 10 : prices["custom"]}/
              {user.yearly ? "yr" : "mo"}
            </h6>
          </div>
        )}
      </div>
      <div className="total">
        <p>Total (per {user.yearly ? "year" : "month"})</p>
        <h3>
          ${total}/{user.yearly ? "yr" : "mo"}
        </h3>
      </div>
    </section>
  );
};

export default Summary;
