import styles from "./ModifyProfile.module.css";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Button from "../ui/Button";
import { useCallback, useContext, useEffect, useState } from "react";
import useHttp, { organizationshost } from "../../store/requests";
import userContext from "../../store/userContext";

function ModifyProfile() {
  const [organizationName, setOrganizationName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [facebook, setFacebook] = useState("www.facebook.com/AlYussr");
  const [instagram, setInstagram] = useState("www.Instagram.com/AlYussr");

  const [organizationImage, setOrganizationImage] =
    useState("/images/logo.png");
  const [organizationDescription, setOrganizationDescription] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmedNewPassword, setconfirmedNewPassword] = useState("");

  const userctx = useContext(userContext);
  const transformProfileInformations = useCallback((object) => {
    setOrganizationName(object.name);
    setEmail(object.email);
    setPhone("+212612345678");
    setOrganizationDescription(object.description);
  }, []);
  const { profileIsLoading, profileError, sendRequest: getProfile } = useHttp();
  useEffect(() => {
    getProfile(
      {
        url: organizationshost + `/organisations/${userctx.userId}`,
        method: "get",
        headers: {
          "Content-Type": "Application/json",
          Authorization: userctx.userToken,
        },
      },
      transformProfileInformations
    );
  }, [
    getProfile,
    userctx.userToken,
    transformProfileInformations,
    userctx.userId,
  ]);

  const organizationNameHandler = (event) => {
    setOrganizationName(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const phoneHandler = (event) => {
    setPhone(event.target.value);
  };

  const facebookHandler = (event) => {
    setFacebook(event.target.value);
  };

  const instagramHandler = (event) => {
    setInstagram(event.target.value);
  };

  const organizationImageHandler = (event) => {
    setOrganizationImage(event.target.files[0]);
  };

  const organizationDescriptionHandler = (event) => {
    setOrganizationDescription(event.target.value);
  };

  const currentPasswordHandler = (event) => {
    setCurrentPassword(event.target.value);
  };

  const newPasswordHandler = (event) => {
    setNewPassword(event.target.value);
  };

  const confirmedNewPasswordHandler = (event) => {
    setconfirmedNewPassword(event.target.value);
  };

  const { isLoading, error, sendRequest: updateProfile } = useHttp();
  const submitHandler = (event) => {
    event.preventDefault();
    let profile = {
      title: organizationName,
      email,
      phone,
      facebook,
      instagram,
      description: organizationDescription,
    };
    if (currentPassword !== "") {
      profile = { ...profile, password: newPassword };
    }
    updateProfile(
      {
        url: organizationshost + "/organisations/{organizationId}",
        method: "patch",
        headers: { "Content-Type": "Application/json" },
        body: profile,
      },
      () => {}
    );
    console.log(profile);
  };

  return (
    <form onSubmit={submitHandler} className={styles.updateform}>
      <div className={styles.accountinformations}>
        <h1>Account Informations</h1>
        <input
          type="text"
          value={organizationName}
          onChange={organizationNameHandler}
        />
        <input type="email" value={email} onChange={emailHandler} />
        <input type="text" value={phone} onChange={phoneHandler} />
        <input type="text" value={facebook} onChange={facebookHandler} />
        <input type="text" value={instagram} onChange={instagramHandler} />
      </div>
      <div className={styles.description}>
        <img src={organizationImage} alt="logo" />
        <label htmlFor="image">
          <UploadFileIcon />
        </label>
        <input id="image" type="file" onChange={organizationImageHandler} />
        <textarea
          type="text"
          value={organizationDescription}
          onChange={organizationDescriptionHandler}
        />
      </div>
      <div className={styles.passwordupdate}>
        <h1>ChangePassword</h1>
        <input
          type="password"
          placeholder="current password"
          onChange={currentPasswordHandler}
        />
        <input
          type="password"
          placeholder="new password"
          onChange={newPasswordHandler}
        />
        <input
          type="password"
          placeholder="confirm new password"
          onChange={confirmedNewPasswordHandler}
        />
        <Button>Modify</Button>
      </div>
    </form>
  );
}
export default ModifyProfile;
