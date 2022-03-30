import React, { useState } from "react";

const userContext = React.createContext({
  userId: "",
  userName: "",
  userRole: "",
  userToken: "",
  loggedIn: false,
  login: (id, name, role, token) => {},
  logout: () => {},
});

export const UserContextProvider = (props) => {
  const [userName, setUserName] = useState(
    localStorage.getItem("userName")
      ? localStorage.getItem("userName")
      : "anonymous"
  );
  const [userRole, setUserRole] = useState(
    localStorage.getItem("userRole")
      ? localStorage.getItem("userRole")
      : "anonymous"
  );
  const [userId, setUserId] = useState(
    localStorage.getItem("userId") ? localStorage.getItem("userId") : ""
  );
  const [userToken, setUserToken] = useState(
    localStorage.getItem("userToken") ? localStorage.getItem("userToken") : ""
  );
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") ? localStorage.getItem("loggedIn") : false
  );

  const loginHandler = (id, user, role, token) => {
    setUserName(user);
    setUserRole(role);
    setUserId(id);
    setUserToken(token);
    setLoggedIn(true);
    localStorage.setItem("userName", user);
    localStorage.setItem("userRole", role);
    localStorage.setItem("userId", id);
    localStorage.setItem("userToken", token);
    localStorage.setItem("loggedIn", true);
    console.log(user, token);
  };

  const logoutHandler = () => {
    setUserName("anonymous");
    setUserRole("anonymous");
    setUserId("");
    setUserToken("");
    setLoggedIn(false);
    localStorage.removeItem("userName");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userId");
    localStorage.removeItem("userToken");
    localStorage.removeItem("loggedIn");
    console.log(userName, userToken);
  };

  return (
    <userContext.Provider
      value={{
        userId,
        userName,
        userRole,
        userToken,
        loggedIn,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};
export default userContext;
