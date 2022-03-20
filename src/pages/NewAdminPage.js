import AdministratorProfile from "../components/Admin dashboard/AdministratorProfile";
import SearchBar from "../components/ui/SearchBar";
import NewAdminForm from "../components/Admin new/NewAdminForm";
import styles from "./NewAdminPage.module.css";

function NewAdminPage(){
    return(
        <div className={styles.newadmin}>
            <div className= {styles.profile}>
                <AdministratorProfile/>
            </div>
            <div className={styles.right}>
                <SearchBar/>
                <h1>Add a new administrator</h1>
                <NewAdminForm/>
            </div>
        </div>
    );
}
export default NewAdminPage;