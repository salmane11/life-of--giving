import Content from "../components/DonorProfileSettingsContent/Content";
import DonationHistory from "../components/DonorProfileSettingsContent/DonationHistory";
import styles from "../components/DonorProfileSettingsContent/Content.module.css";
import useHttp, { donationshost } from "../store/requests";
import userContext from "../store/userContext";
import { useContext, useEffect, useState } from "react";
function DonorProfileDonationHistory() {
  const [associationsNumber, setAssociationsNumber] = useState(0);
  const [totalDonations, setTotalDonations] = useState(0);
  const [historyDonations, setHistoryDonations] = useState();

  const userctx = useContext(userContext);

  const { isLoading, error, sendRequest: getDoonationsHistory } = useHttp();

  useEffect(() => {
    getDoonationsHistory(
      {
        url:
          donationshost +
          `/donations/donor-dashboard/sum-donation/${userctx.userId}`,
        method: "get",
        headers: {
          Authorization: userctx.userToken,
        },
      },
      (data) => {
        setAssociationsNumber(data.length);
        let total = 0;
        for (var key in data) {
          total += data[key].sum;
        }
        setTotalDonations(total);
        setHistoryDonations(data);
      }
    );
  }, [userctx.userId, userctx.userToken, getDoonationsHistory]);

  return (
    <div className={styles.container}>
      <Content></Content>
      <DonationHistory data={historyDonations} number={associationsNumber} total={totalDonations}></DonationHistory>
    </div>
  );
}
export default DonorProfileDonationHistory;
