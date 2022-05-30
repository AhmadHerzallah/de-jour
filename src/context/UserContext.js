import React, { createContext, useState, useEffect } from "react";
import prisma from "../lib/prisma";
const UserContext = createContext();

export function useUser() {
  return useContext(UserContextProvider);
}

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const message = "Hey";
  const values = {
    user,
    message,
  };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
