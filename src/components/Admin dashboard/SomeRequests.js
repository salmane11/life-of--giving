import { useContext, useEffect, useState } from "react";
import useHttp, { organizationshost } from "../../store/requests";
import userContext from "../../store/userContext";
import Button from "../ui/Button";
import styles from "./BestDonors.module.css";

function SomeRequests() {
  const userctx = useContext(userContext);
  const [requests, setRequests] = useState([]);
  const requestsHandler = (list) => {
    const uploadedRequests = [];
    for (var key in list) {
      uploadedRequests.push({
        organizationId: list[key].id,
        organizationName: list[key].name,
        organizationDescription: list[key].description,
        organizationCategory:list[key].category
      });
    }
    setRequests(uploadedRequests);
  };

  const { isLoading, error, sendRequest: getRequests } = useHttp();

  useEffect(() => {
    getRequests(
      {
        url: organizationshost + "/organisations/notverified",
        method: "get",
        headers: {
          "Content-Type": "Application/json",
          Authorization: userctx.userToken,
        },
      },
      requestsHandler
    );
  }, [getRequests, userctx.userToken]);

  return (
    <div className={styles.donorstable}>
      <table className={styles.donors}>
        <thead>
          <tr>
            <th className={styles.header}>new requests</th>
            <th className={styles.header}></th>
          </tr>
        </thead>
        {requests.slice(0,4).map((element) => (
          <tbody key={element.organizationId}>
            <tr>
              <td>{element.organizationName}</td>
              <td>{element.organizationCategory}</td>
            </tr>
          </tbody>
        ))}
      </table>
      <Button>See More</Button>
    </div>
  );
}
export default SomeRequests;
