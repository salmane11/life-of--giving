import styles from "./EditProfile.module.css";
import Button from "../ui/Button";
import Select from "react-select";
import { useState } from "react";
import useHttp, {
  donationshost,
  host,
  useHttpImages,
} from "../../store/requests";
import userContext from "../../store/userContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

function EditProfile() {
  const userctx = useContext(userContext);

  const [donorName, setDonorName] = useState("");
  const [donorAddress, setDonorAddress] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [donorPrivacy, setDonorPrivacy] = useState("");
  const [donorBio, setDonorBio] = useState("");
  const [donorFb, setDonorFb] = useState("");
  const [donorInsta, setDonorInsta] = useState("");
  const [donorTwit, setDonorTwit] = useState("");

  const donorNameHandler = (event) => {
    setDonorName(event.target.value);
    console.log(donorName);
  };

  const addressHandler = (event) => {
    setDonorAddress(event.target.value);
  };
  const phoneHandler = (event) => {
    setDonorPhone(event.target.value);
  };
  const privacyHandler = (event) => {
    setDonorPrivacy(event.target.value);
  };
  const bioHandler = (event) => {
    setDonorBio(event.target.value);
  };
  const fbHandler = (event) => {
    setDonorFb(event.target.value);
  };
  const instaHandler = (event) => {
    setDonorInsta(event.target.value);
  };
  const twitterHandler = (event) => {
    setDonorTwit(event.target.value);
  };
  const {
    isLoading,
    error,
    sendRequest: editprofilesettings,
  } = useHttpImages();


  const submitHandler = (event) => {
    event.preventDefault();
console.log(donorName+"this is the submit");
    console.log({
      name: donorName,
      location: donorAddress,
      phoneNumber: donorPhone,
      privacy: donorPrivacy,
      description: donorBio,
    });

    const formData = new FormData();
    formData.append("name", donorName);
    formData.append("location", donorAddress);
    formData.append("phoneNumber", donorPhone);
    formData.append("privacy", donorPrivacy);
    formData.append("description", donorBio);

    editprofilesettings(
      {
        url: host + `/donors/update-profile/${userctx.userId}`,
        method: "put",
        headers: {
          Authorization: userctx.userToken,
        },
        body: formData,
      },
      () => {}
    );

    setDonorName("");
    setDonorAddress("");
    setDonorPhone("");
    setDonorPrivacy("");
    setDonorBio("");
    setDonorFb("");
    setDonorInsta("");
    setDonorFb("");
  };

  return (
    //here is the navigation when EditProfile is active
    <div className={styles.editprofile}>
      <h3>Manage your general information</h3>
      <form className={styles.form} onSubmit={submitHandler}>
        <label>Full name</label>
        <input
          maxLength={30}
          className={styles.settingsInput}
          type="text"
          name="donorName"
          placeholder="Your name"
          onChange={donorNameHandler}
          value={donorName}
        />
        <label>Address</label>
        <input
          className={styles.settingsInput}
          type="text"
          name="address"
          placeholder="Rabat, Morocco"
          onChange={addressHandler}
          value={donorAddress}
        />

        <label>Phone number</label>
        <input
          className={styles.settingsInput}
          type="tel"
          name="tel"
          placeholder="+212612345678"
          onChange={phoneHandler}
          value={donorPhone}
        />

        <label>Statistics dashboard privacy</label>
        <input
          className={styles.settingsInput}
          placeholder="Yes or No"
          onChange={privacyHandler}
          value={donorPrivacy}
        />

        <label className={styles.subselectclass}>Bio description</label>
        <textarea
          className={styles.bio}
          type="text"
          name="bio"
          size="20"
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua."
          textarea
          onChange={bioHandler}
          value={donorBio}
        />
        <label>Facebook link</label>
        <input
          className={styles.settingsInput}
          type="url"
          name="fb"
          placeholder=" www.facebook.com/yourfbid"
          onChange={fbHandler}
          value={donorFb}
        />

        <label>Instagram link</label>
        <input
          className={styles.settingsInput}
          type="url"
          name="insta"
          placeholder=" www.instagram.com/yourid"
          onChange={instaHandler}
          value={donorInsta}
        />

        <label>Twitter link</label>
        <input
          className={styles.settingsInput}
          type="url"
          name="twit"
          placeholder=" www.twitter.com/yourid"
          onChange={twitterHandler}
          value={donorTwit}
        />

        <span className={styles.actionForm}>
            <Button type="submit" className={styles.saveButton}>Save changes </Button>
            <Button className={styles.cancelButton}>Cancel</Button>
        </span>
      </form>
    </div>
  );
}
export default EditProfile;
