import React, { createContext, useContext, useState } from "react";

export type PlanType = "arcade" | "advanced" | "pro";

interface User {
  name: string;
  email: string;
  phone: string;
  planType: PlanType;
  yearly: boolean;
}

export const prices = {
  arcade: 9,
  advanced: 12,
  pro: 15,
  online: 1,
  large: 2,
  custom: 2,
};

interface UserContextType {
  user: User;
  updateUser: (updateduser: User) => void;
}

const initialUser: User = {
  name: "",
  email: "",
  phone: "",
  planType: "arcade",
  yearly: false,
};

const UserContext = createContext<UserContextType>({
  user: initialUser,
  updateUser: () => {},
});

export const useUserContext = () => useContext(UserContext);

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(initialUser);

  const updateUser = (updatedUser: User) => {
    setUser(updatedUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
