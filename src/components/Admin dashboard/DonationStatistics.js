import styles from './DonationStatistics.module.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function DonationStatistics() {
    //TODO everything on this page should be dynamic
  return (
    <div className={styles.statistics}>
      <div className={styles.block}>
        <div className={styles.header}>
          <span>New Visitors</span>
          <span>This Week</span>
        </div>
        <h3>253</h3>
        <p><ArrowUpwardIcon/>+13.2%</p>
      </div>
      <div className={styles.block}>
        <div className={styles.header}>
          <span>Total donations on the plateform</span>
          <span>This Week</span>
        </div>
        <h3>$14,005</h3>
        <p><ArrowUpwardIcon/>+11.2%</p>
      </div>
      <div className={styles.block}>
        <div className={styles.header}>
          <span>Our gain from donations</span>
          <span>This Week</span>
        </div>
        <h3>$1,400</h3>
        <p><ArrowUpwardIcon/>+11.2%</p>
      </div>
    </div>
  );
}
export default DonationStatistics;
