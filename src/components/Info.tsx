import React, {
  useState,
  useEffect,
  ChangeEvent,
  forwardRef,
  useImperativeHandle,
} from "react";
import Input from "./Input";
import { useUserContext } from "../context/UserContext";

const Info = forwardRef<{ submit: () => boolean }>((_props, ref) => {
  const { user, updateUser } = useUserContext();

  const [nameValue, setNameValue] = useState<string>("");
  const [nameRequired, setNameRequired] = useState<boolean>(false);

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>): void => {
    setNameValue(e.target.value);
    setNameRequired(false);
  };

  const [emailValue, setEmailValue] = useState<string>("");
  const [emailInvalid, setEmailInvalid] = useState<boolean>(false);
  const [emailRequired, setEmailRequired] = useState<boolean>(false);

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmailValue(e.target.value);
    setEmailInvalid(false);
    setEmailRequired(false);
  };

  const verifyEmail = (): void => {
    setEmailInvalid(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue));
  };

  const [phoneValue, setPhoneValue] = useState<string>("");
  const [phoneInvalid, setPhoneInvalid] = useState<boolean>(false);
  const [phoneRequired, setPhoneRequired] = useState<boolean>(false);

  const handleChangePhone = (e: ChangeEvent<HTMLInputElement>): void => {
    setPhoneValue(e.target.value);
    setPhoneInvalid(false);
    setPhoneRequired(false);
  };

  const verifyPhone = (): void => {
    setPhoneInvalid(!/^\d{10}$/.test(phoneValue));
  };

  useEffect(() => {
    setNameValue(user.name);
    setEmailValue(user.email);
    setPhoneValue(user.phone);
  }, [user]);

  const submit = (): boolean => {
    const reqName = nameValue === "";
    const reqEmail = emailValue === "";
    const reqPhone = phoneValue === "";

    setNameRequired(reqName);
    setEmailRequired(reqEmail);
    setPhoneRequired(reqPhone);

    const valid =
      !reqName && !emailInvalid && !reqEmail && !phoneInvalid && !reqPhone;

    if (valid)
      updateUser({
        ...user,
        name: nameValue,
        email: emailValue,
        phone: phoneValue,
      });

    return valid;
  };

  useImperativeHandle(ref, () => ({
    submit: () => submit(),
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
          required={nameRequired}
        />
        <Input
          type="email"
          value={emailValue}
          handleChange={handleChangeEmail}
          handleBlur={verifyEmail}
          invalid={emailInvalid}
          required={emailRequired}
        />
        <Input
          type="phone"
          value={phoneValue}
          handleChange={handleChangePhone}
          handleBlur={verifyPhone}
          invalid={phoneInvalid}
          required={phoneRequired}
        />
      </div>
    </section>
  );
});

export default Info;
