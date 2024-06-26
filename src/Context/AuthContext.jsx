import React, { useState, useContext } from "react";

export const AuthContext = React.createContext();
const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState(
    localStorage.getItem("login") ? true : false
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );
  const handleLogin = (userInfo) => {
    localStorage.setItem("login", "true");
    setLogin(true);
    if (userInfo) {
      setUser(userInfo);
      localStorage.setItem("user", JSON.stringify(userInfo));
    }
  };
  const handleLogout = () => {
    setLogin(false);
    localStorage.removeItem("login");
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider value={{ login, handleLogin, handleLogout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
export const useAuthContext = () => useContext(AuthContext);
