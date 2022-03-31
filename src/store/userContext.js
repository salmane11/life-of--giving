import React, { useState } from "react";

const userContext = React.createContext({
  userId: "",
  userName: "",
  userRole: "",
  userToken: "",
  userImage:"",
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
  const [userImage, setUserImage] = useState(
    localStorage.getItem("userImage")
      ? localStorage.getItem("userImage")
      : "/images/inko.png"
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

  const loginHandler = (id, user, role, token, image) => {
    setUserName(user);
    setUserRole(role);
    setUserId(id);
    setUserToken(token);
    setLoggedIn(true);
    setUserImage(image);
    localStorage.setItem("userName", user);
    localStorage.setItem("userRole", role);
    localStorage.setItem("userId", id);
    localStorage.setItem("userToken", token);
    localStorage.setItem("userImage", image);
    localStorage.setItem("loggedIn", true);
    console.log(user, token);
  };

  const logoutHandler = () => {
    setUserName("anonymous");
    setUserRole("anonymous");
    setUserId("");
    setUserToken("");
    setUserImage("/images/inko.png");
    setLoggedIn(false);
    localStorage.removeItem("userName");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userId");
    localStorage.removeItem("userToken");
    localStorage.removeItem("userImage");
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
        userImage,
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
