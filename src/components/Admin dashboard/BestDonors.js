import { useContext, useEffect, useState } from "react";
import useHttp, { donationshost } from "../../store/requests";
import userContext from "../../store/userContext";
import Button from "../ui/Button";
import styles from "./BestDonors.module.css";

function BestDonors() {
  const userctx = useContext(userContext);

  const [donors, setDonors] = useState([]);
  const transformDonors=(list)=>{
    const loadedDonors=[];
    for(var key in list){
      loadedDonors.push({
        donorName: list[key].name,
        donation: list[key].total,
      })
    };
    setDonors(loadedDonors);
  }
  const { isLoading, error, sendRequest: getDonors } = useHttp();

  useEffect(() => {
    getDonors(
      {
        url: donationshost + "/donations/sum",
        method: "get",
        headers: {
          "Content-Type": "Application/json",
          Authorization: userctx.userToken,
        },
      },
      transformDonors
    );
  }, [getDonors, userctx.userToken]);
  
  return (
    <div className={styles.donorstable}>
      <table className={styles.donors}>
        <thead >
          <tr >
            <th className={styles.header}>Best Donors</th>
            <th className={styles.header}></th>
          </tr>
        </thead>
        {donors.map((element) => (
          <tbody key={element.donorName}>
            <tr>
              <td>{element.donorName}</td>
              <td>${element.donation}</td>
            </tr>
          </tbody>
        ))}
      </table>
      <Button>See More</Button>
    </div>
  );
}
export default BestDonors;
