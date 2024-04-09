import React, { useState, useEffect, ChangeEvent } from "react";

interface InputProps {
  type: "name" | "email" | "phone";
  value?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  invalid?: boolean;
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  handleChange,
  invalid,
}) => {
  const [label, setLabel] = useState<string>("");
  const [placeholder, setPlaceholder] = useState<string>("");

  useEffect(() => {
    switch (type) {
      case "name":
        setLabel("Name");
        setPlaceholder("e.g. Stephen King");
        break;
      case "email":
        setLabel("Email Address");
        setPlaceholder("e.g. stehpenking@lorem.com");
        break;
      case "phone":
        setLabel("Phone Number");
        setPlaceholder("e.g. +1 234 567 890");
        break;
    }
  }, []);

  return (
    <div className="input">
      <div>
        <label className="label">{label}</label>
        {invalid && <label className="required">This field is required.</label>}
      </div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={invalid && "invalid"}
      />
    </div>
  );
};

export default Input;
