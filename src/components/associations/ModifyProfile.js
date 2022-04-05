import styles from "./ModifyProfile.module.css";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Button from "../ui/Button";
import { useCallback, useContext, useEffect, useState } from "react";
import useHttp, {
  organizationshost,
  useHttpImages,
} from "../../store/requests";
import userContext from "../../store/userContext";

function ModifyProfile() {
  const [organizationName, setOrganizationName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organizationCategory, setOrganizationCategory] = useState("");
  const [organizationLocation, setOrganizationLocation] = useState("");

  const [organizationImage, setOrganizationImage] =
    useState("/images/inko.png");
  const [organizationImageViewer, setOrganizationImageViewer] =
    useState("/images/inko.png");
  const [organizationDescription, setOrganizationDescription] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmedNewPassword, setconfirmedNewPassword] = useState("");
  const [formError, setFormError] = useState("");

  const userctx = useContext(userContext);
  const transformProfileInformations = useCallback((object) => {
    console.log(object);
    setOrganizationName(object.name ? object.name : "your name");
    setEmail(object.email);
    setOrganizationCategory(
      object.category ? object.category : "your category"
    );
    setOrganizationLocation(
      object.location ? object.location : "your location"
    );
    setPhone(object.phoneNumber ? object.phoneNumber : "yourPhoneNumber");
    setOrganizationDescription(
      object.description ? object.description : "your description"
    );
    setOrganizationImage(object.image ? object.image : "/images/inko.png");
    setOrganizationImageViewer(object.image ? object.image : "/images/inko.png");
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

  const categoryHandler = (event) => {
    setOrganizationCategory(event.target.value);
  };

  const locationHandler = (event) => {
    setOrganizationLocation(event.target.value);
  };

  const organizationImageHandler = (event) => {
    setOrganizationImage(event.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = () => {
      setOrganizationImageViewer(reader.result);
    };
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

  const { isLoading, error, sendRequest: updateProfile } = useHttpImages();
  const submitHandler = (event) => {
    event.preventDefault();

    if (newPassword !== confirmedNewPassword) {
      setFormError("* password and confirmed password are different");
      return;
    }

    const profile = new FormData();
    profile.append("name", organizationName);
    profile.append("image", organizationImage);
    profile.append("email", email);
    profile.append("category", organizationCategory);
    profile.append("location", organizationLocation);
    profile.append("phoneNumber", phone);
    profile.append("description", organizationDescription);

    if (currentPassword !== "") {
      profile.append("currentPassword", newPassword);
      profile.append("password", newPassword);
    }

    updateProfile(
      {
        url: organizationshost + `/organisations/profile/${userctx.userId}`,
        method: "put",
        headers: {
          Authorization: userctx.userToken,
        },
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
        <input
          type="text"
          value={organizationCategory}
          onChange={categoryHandler}
        />
        <input
          type="text"
          value={organizationLocation}
          onChange={locationHandler}
        />
      </div>
      <div className={styles.description}>
        <img src={organizationImageViewer} alt="logo" />
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
        {formError && <p className={styles.error}>{formError}</p>}
      </div>
    </form>
  );
}
export default ModifyProfile;
