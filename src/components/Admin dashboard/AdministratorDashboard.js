import AdministratorProfile from "./AdministratorProfile";
import styles from "./AdministratorDashboard.module.css";
import SearchBar from "../ui/SearchBar";
import DonationStatistics from "./DonationStatistics";
import ProjectsList from "./ProjectsList";
import BestDonors from "./BestDonors";
import SomeRequests from "./SomeRequests";

function AdministratorDashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.profile}>
        <AdministratorProfile />
      </div>
      <div className={styles.statistics}>
        <SearchBar />
        <DonationStatistics/>
        <ProjectsList/>
        <div className={styles.users}>
          <BestDonors/>
          <SomeRequests/>
        </div>
      </div>
    </div>
  );
}
export default AdministratorDashboard;
