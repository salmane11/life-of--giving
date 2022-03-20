import React, { useState } from "react";

const userContext = React.createContext({
  userId:"",
  userName: "",
  userRole: "",
  userToken:"",
  loggedIn: false,
  login: (id,name, role,token) => {},
  logout: () => {},
});

export const UserContextProvider = (props) => {
  const [userName, setUserName] = useState("anonymous");
  const [userRole, setUserRole] = useState("anonymous");
  const [userId, setUserId] = useState("");
  const [userToken, setUserToken] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const loginHandler = (id,user, role,token) => {
    setUserName(user);
    setUserRole(role);
    setUserId(id);
    setUserToken(token);
    setLoggedIn(true);
  };

  const logoutHandler = () => {
    setUserName("anonymous");
    setUserRole("anonymous");
    setUserId("");
    setUserToken("");
    setLoggedIn(false);
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
