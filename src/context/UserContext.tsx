import React, { createContext, useContext, useState } from "react";

interface User {
  name: string;
  email: string;
  phone: string;
}

interface UserContextType {
  user: User;
  updateUser: (updateduser: User) => void;
}

const initialUser: User = { name: "", email: "", phone: "" };

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
