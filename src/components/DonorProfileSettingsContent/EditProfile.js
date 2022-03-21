import styles from './EditProfile.module.css';
import Button from '../ui/Button';
import Select from 'react-select';
function EditProfile() {
    const handleSubmit = event => {
        event.preventDefault();
        alert('Your changes are submitted.')
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
                <input maxLength={30} className={styles.settingsInput} type="text" name="full-name" placeholder='John Wick' />

                <label>
                    Primary email address   
                </label>
                <input className={styles.settingsInput} type="email" name="email-address" placeholder='John.wick@gmail.com'/>

                <label>
                    Address
                </label>
                <input className={styles.settingsInput} type="text" name="address" placeholder='Rabat, Morocco'/>

                <label>
                    Phone number
                </label>
                <input className={styles.settingsInput} type="tel" name="tel" placeholder='+212612345678'/>

                <label>
                    Statistics dashboard privacy
                </label>
                {/* <input type="text" name="privacy" placeholder='public'/> */}
                <Select className={styles.settingsInput} options={options} placeholder='Can others see your profile?'/>
                <label>
                    Bio description
                </label>
                <textarea className={styles.bio}  type="text" name="bio" size='20' placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua.' textarea/>
                <label>
                    Facebook link
                </label>
                <input className={styles.settingsInput} type="url" name="fb" placeholder=' www.facebook.com/yourfbid'/>

                <label>
                    Instagram link
                </label>
                <input className={styles.settingsInput} type="url" name="insta" placeholder=' www.instagram.com/yourid'/>

                <label>
                    Twitter link
                </label>
                <input className={styles.settingsInput} type="url" name="twit" placeholder=' www.twitter.com/yourid'/>

                <span className={styles.actionForm}>
                <button className={styles.saveButton}type="submit">Save changes</button>
                <Button className={styles.cancelButton}>Cancel</Button>

                </span>
            </form>

        </div>
    );
}
export default EditProfile;