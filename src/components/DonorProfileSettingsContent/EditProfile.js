import styles from './EditProfile.module.css';
import Button from '../ui/Button';
import Select from 'react-select';
import { useState } from 'react';
import useHttp, { host } from "../../store/requests";

function EditProfile() {
    const [donorName, setDonorName] = useState("");
    const [email, setEmail] = useState("");
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
      const emailHandler = (event) => {
        setEmail(event.target.value);
        console.log(email)
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
  // const { isLoading, error, sendRequest: editprofilesettings } = useHttp();
  
  // editprofilesettings({
  //     url: host + "/donor/editprofile",
  //     method: "post",
  //     headers: {"Content-type":"Application/json"},
  //     body:{
  //         name: donorName,
  //         address:donorAddress,
  //         email,
  //         phone: donorPhone,
  //         privacy:donorPrivacy,
  //         bio: donorBio,
  //         fb:donorFb,
  //         insta:donorInsta,
  //         twit: donorTwit

  //     },
  // },
  // ()=>{});
  //   setDonorName("");
  //   setDonorAddress("");
  //   setEmail("");
  //   setDonorPhone("");
  //   setDonorPrivacy("");
  //   setDonorBio("");
  //   setDonorFb("");
  //   setDonorInsta("");
  //   setDonorFb("");




      
      
      



    // const [password, setPassword] = useState("");
    // const [confirmedPassword, setConfirmedPassword] = useState("");
    const handleSubmit = event => {
        event.preventDefault();
        alert('Your changes are submitted.');
        console.log(email);


    };
    const options = [
        { value: 'public', label: 'Yes, make it public' },
        { value: 'private', label: 'No, keep it private' },
       
      ]
    return (
        //here is the navigation when EditProfile is active
        <div className={styles.editprofile}>
            <h3>Manage your general information</h3>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label>
                    Full name
                </label>
                <input maxLength={30} className={styles.settingsInput} type="text" name="donorName" placeholder='John Wick'
                onChange={donorNameHandler} 
                value={donorName}/>

                <label>
                    Primary email address   
                </label>
                <input className={styles.settingsInput} type="email" name="email-address" placeholder='John.wick@gmail.com'
                onChange={emailHandler}
                value={email}/>

                <label>
                    Address
                </label>
                <input className={styles.settingsInput} type="text" name="address" placeholder='Rabat, Morocco'
                onChange={addressHandler}
                value={donorAddress}/>

                <label>
                    Phone number
                </label>
                <input className={styles.settingsInput} type="tel" name="tel" placeholder='+212612345678'
                onChange={phoneHandler}
                value={donorPhone}/>

                <label>
                    Statistics dashboard privacy
                </label>
                {/* <input type="text" name="privacy" placeholder='public'/> */}
                <Select className={styles.settingsInput} options={options} placeholder='Can others see your profile?'
                onSelect={privacyHandler}
                value={donorPrivacy}/>
                <label className={styles.subselectclass}>
                    Bio description
                </label>
                <textarea className={styles.bio}  type="text" name='bio' size='20' placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua.' textarea
                onChange={bioHandler}
                value={donorBio}/>
                <label >
                    Facebook link
                </label>
                <input className={styles.settingsInput} type="url" name="fb" placeholder=' www.facebook.com/yourfbid'
                onChange={fbHandler}
                value={donorFb}/>

                <label>
                    Instagram link
                </label>
                <input className={styles.settingsInput} type="url" name="insta" placeholder=' www.instagram.com/yourid'
                onChange={instaHandler}
                value={donorInsta}/>

                <label>
                    Twitter link
                </label>
                <input className={styles.settingsInput} type="url" name="twit" placeholder=' www.twitter.com/yourid'
                onChange={twitterHandler}
                value={donorTwit}/>

                <span className={styles.actionForm}>
                <button className={styles.saveButton}type="submit">Save changes</button>
                <Button className={styles.cancelButton}>Cancel</Button>

                </span>

            </form>

        </div>
    );
}
export default EditProfile;