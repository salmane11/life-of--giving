import Content from "../components/DonorProfileSettingsContent/Content";
import  DonationHistory from "../components/DonorProfileSettingsContent/DonationHistory";
import styles from "../components/DonorProfileSettingsContent/Content.module.css"
function DonorProfileDonationHistory(){
    
    return(
       <div className={styles.container}>
        <Content></Content>
        <DonationHistory></DonationHistory>
        </div>
    );
}
export default DonorProfileDonationHistory;