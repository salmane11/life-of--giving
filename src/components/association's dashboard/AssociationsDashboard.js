import { Link } from "react-router-dom";
import Button from "../ui/Button";
import styles from "./AssociationDashboard.module.css";
import AssociationsInformations from "./AssociationsInformations";
import AssociationsProjects from "./AssociationsProjects";
import EventsCalendar from "./EventsCalendar";
import MonthlyDonations from "./MonthlyDonations";
import ProjectsProgression from "./ProjectsProgression";

function AssociationsDashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.charts}>
        <div className={styles.monthlydonations}>
          <h1>Total of donations each month</h1>
          <MonthlyDonations />
        </div>
        <div className={styles.projectsprogression}>
          <h1>projects progression</h1>
          <ProjectsProgression />
        </div>
      </div>
      <div className={styles.informations}>
        <AssociationsInformations />
        <div className={styles.pages}>
          <h1>More Pages</h1>
          <Button>
            <Link className={styles.link} to="/post-project">Create A project</Link>
          </Button>
          <Button>Our Projects</Button>
          <Button>
            <Link className={styles.link} to="/organization-profile">Account Settings</Link>
          </Button>
        </div>
      </div>
      <div className={styles.events}>
        <EventsCalendar />
        <AssociationsProjects />
      </div>
    </div>
  );
}
export default AssociationsDashboard;
