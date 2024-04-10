import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import AddonCard from "./AddonCard";
import { useUserContext } from "../context/UserContext";

const Addons = forwardRef<{ submit: () => void }>((_props, ref) => {
  const { user, updateUser } = useUserContext();

  const [online, setOnline] = useState<boolean>(false);
  const [large, setLarge] = useState<boolean>(false);
  const [custom, setCustom] = useState<boolean>(false);

  useEffect(() => {
    setOnline(user.online);
    setLarge(user.large);
    setCustom(user.custom);
  }, [user]);

  const submit = (): void => {
    updateUser({ ...user, online: online, large: large, custom: custom });
  };

  useImperativeHandle(ref, () => ({
    submit: () => submit(),
  }));

  return (
    <section className="addons">
      <div className="header">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <div className="container">
        <AddonCard
          type="online"
          selected={online}
          setSelected={setOnline}
          yearly={user.yearly}
        />
        <AddonCard
          type="large"
          selected={large}
          setSelected={setLarge}
          yearly={user.yearly}
        />
        <AddonCard
          type="custom"
          selected={custom}
          setSelected={setCustom}
          yearly={user.yearly}
        />
      </div>
    </section>
  );
});

export default Addons;
