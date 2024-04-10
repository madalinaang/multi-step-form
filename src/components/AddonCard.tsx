import React, { useState, useEffect } from "react";
import { prices } from "../context/UserContext";

interface AddonCardProps {
  type: "online" | "large" | "custom";
  selected?: boolean;
  setSelected?: (selected: boolean) => void;
  yearly?: boolean;
}

const AddonCard: React.FC<AddonCardProps> = ({
  type,
  selected,
  setSelected,
  yearly,
}) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    switch (type) {
      case "online":
        setTitle("Online service");
        setDescription("Access to multiplayer games");
        break;
      case "large":
        setTitle("Larger storage");
        setDescription("Extra 1TB of cloud save");
        break;
      case "custom":
        setTitle("Customizable profile");
        setDescription("Custom theme on your profile");
        break;
    }
  }, [type]);

  const handleClick = (): void => {
    setSelected(!selected);
  };

  return (
    <article
      className={"addon-card " + (selected && "selected")}
      onClick={handleClick}
    >
      <div className="checkbox">
        <input
          type="checkbox"
          id="custom-checkbox"
          checked={selected}
          onChange={handleClick}
        />
        <label htmlFor="custom-checkbox">
          <img src={process.env.PUBLIC_URL + "/images/tabler_check.svg"} />
        </label>
      </div>
      <div className="description">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
      <p className="price">
        +${yearly ? prices[type] * 10 : prices[type]}/{yearly ? "yr" : "mo"}
      </p>
    </article>
  );
};

export default AddonCard;
