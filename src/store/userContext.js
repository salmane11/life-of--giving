import React, { useState } from "react";

const userContext = React.createContext({
  userName: "",
  userRole: "",
  loggedIn: false,
  login: (name, role) => {},
  logout: () => {},
});

export const UserContextProvider = (props) => {
  const [userName, setUserName] = useState("anonymous");
  const [userRole, setUserRole] = useState("anonymous");
  const [loggedIn, setLoggedIn] = useState(false);

  const loginHandler = (user, role) => {
    setUserName(user);
    setUserRole(role);
    setLoggedIn(true);
  };

  const logoutHandler = () => {
    setUserName("anonymous");
    setUserRole("anonymous");
    setLoggedIn(false);
  };

  return (
    <userContext.Provider
      value={{
        userName,
        userRole,
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
