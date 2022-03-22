import styles from './DonationStatistics.module.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useContext, useEffect, useState } from 'react';
import useHttp, { donationshost } from '../../store/requests';
import userContext from '../../store/userContext';

function DonationStatistics() {
    //TODO everything on this page should be dynamic
    const userctx = useContext(userContext);

    const [totalDonations ,setTotalDonations]=useState(0);

    const { isLoading, error, sendRequest: gettotaldonations } = useHttp();

    useEffect(() => {
      gettotaldonations(
        {
          url: donationshost + "/donations/total-sum",
          method: "get",
          headers: {
            "Content-Type": "Application/json",
            Authorization: userctx.userToken,
          },
        },
        (object)=>{console.log(object);setTotalDonations(object)}
      );
    }, [gettotaldonations,userctx.userToken]);

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
        <h3>{isLoading && !error ? "..." : totalDonations}</h3>
        <p><ArrowUpwardIcon/>+11.2%</p>
      </div>
      <div className={styles.block}>
        <div className={styles.header}>
          <span>Our gain from donations</span>
          <span>This Week</span>
        </div>
        <h3>{isLoading ? "..." : totalDonations/10}</h3>
        <p><ArrowUpwardIcon/>+11.2%</p>
      </div>
    </div>
  );
}
export default DonationStatistics;
