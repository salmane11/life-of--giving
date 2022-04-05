import Table from "../DonorProfileContent/Table";
import { useContext, useEffect, useState } from "react";
import userContext from "../../store/userContext";
import useHttp, { donationshost } from "../../store/requests";
import styles from "./ContentTable.module.css";


function ContentTable(){
  const userctx = useContext(userContext);

  const [mydonations, setMyDonations] = useState([]);
  const { tableIsLoading, tableError, sendRequest: getMyDonations } = useHttp();
  const transformMyDonations = (loadedDonations) => {
    const donations = [];
    for (var key in loadedDonations) {
      donations.push({
        association_name: loadedDonations[key].organisationName,
        title: loadedDonations[key].projectName,
        donation_amount: loadedDonations[key].amount,
        donation_date: loadedDonations[key].date,
      });
    }
    setMyDonations(donations);
  };
  useEffect(() => {
    getMyDonations(
      {
        url: donationshost + `/donations/donor-dashboard/${userctx.userId}`,
        method: "get",
        headers: {
          Authorization: userctx.userToken,
        },
      },
      transformMyDonations
    );
  }, [userctx.userId, getMyDonations, userctx.userToken]);

  
  return (
  <div className={styles.table}>
  <Table  data={mydonations}></Table>
  </div>
  );
}
export default ContentTable;