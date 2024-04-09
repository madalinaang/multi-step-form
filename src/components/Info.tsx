import React, {
  useState,
  useEffect,
  ChangeEvent,
  forwardRef,
  useImperativeHandle,
} from "react";
import Input from "./Input";

const Info = forwardRef<{ verify: () => boolean }>((_props, ref) => {
  const [nameValue, setNameValue] = useState<string>("");
  const [nameInvalid, setNameInvalid] = useState<boolean>(false);

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>): void => {
    setNameValue(e.target.value);
    setNameInvalid(false);
  };

  const [emailValue, setEmailValue] = useState<string>("");
  const [emailInvalid, setEmailInvalid] = useState<boolean>(false);

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmailValue(e.target.value);
    setEmailInvalid(false);
  };

  const [phoneValue, setPhoneValue] = useState<string>("");
  const [phoneInvalid, setPhoneInvalid] = useState<boolean>(false);

  const handleChangePhone = (e: ChangeEvent<HTMLInputElement>): void => {
    setPhoneValue(e.target.value);
    setPhoneInvalid(false);
  };

  const verify = (): boolean => {
    const nameCheck: boolean = nameValue !== "";
    const emailCheck: boolean = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    const phoneCheck: boolean = /^\d{10}$/.test(phoneValue);

    setNameInvalid(!nameCheck);
    setEmailInvalid(!emailCheck);
    setPhoneInvalid(!phoneCheck);

    return nameCheck && emailCheck && phoneCheck;
  };

  useImperativeHandle(ref, () => ({
    verify: () => verify(),
  }));

  return (
    <section className="info">
      <div className="header">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <div className="container">
        <Input
          type="name"
          value={nameValue}
          handleChange={handleChangeName}
          invalid={nameInvalid}
        />
        <Input
          type="email"
          value={emailValue}
          handleChange={handleChangeEmail}
          invalid={emailInvalid}
        />
        <Input
          type="phone"
          value={phoneValue}
          handleChange={handleChangePhone}
          invalid={phoneInvalid}
        />
      </div>
    </section>
  );
});

export default Info;
