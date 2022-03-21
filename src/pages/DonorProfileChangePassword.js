import Content from "../components/DonorProfileSettingsContent/Content";
import  ChangePassword from "../components/DonorProfileSettingsContent/ChangePassword";
import styles from "../components/DonorProfileSettingsContent/Content.module.css"
function DonorProfileChangePassword(){
    return(
       <div className={styles.container}>
        <Content></Content>
        <ChangePassword></ChangePassword>
        </div>
    );
}
export default DonorProfileChangePassword;