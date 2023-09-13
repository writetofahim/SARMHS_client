import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../utils/axiosInstance";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const login = async (credentials) => {
    try {
      const res = await axiosInstance.post("/auth/login", credentials);
      console.log(res.data);
      setUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
      console.error("Failed to login:", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider value={{ login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
