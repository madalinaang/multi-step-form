import React from "react";
import { PlanType, prices } from "../context/UserContext";

interface PlanProps {
  type: PlanType;
  yearly?: boolean;
  selected?: boolean;
  onClick: () => void;
}

const PlanCard: React.FC<PlanProps> = ({ type, yearly, selected, onClick }) => {
  return (
    <article
      className={"plan-card " + (selected && "selected")}
      onClick={onClick}
    >
      <img src={`${process.env.PUBLIC_URL}/images/icon-${type}.svg`} />
      <div className="description">
        <h5>{type}</h5>
        <p>
          {yearly ? prices[type] * 10 : prices[type]}/{yearly ? "yr" : "mo"}
        </p>
        <p className={"yearly " + (yearly && "visible")}>2 months free</p>
      </div>
    </article>
  );
};

export default PlanCard;
