import { useContext, useEffect, useState } from "react";
import useHttp, { organizationshost } from "../../../store/requests";
import userContext from "../../../store/userContext";
import Spinner from "../../ui/Spinner";
import Request from "./Request";
import styles from "./RequestList.module.css";

function RequestsList() {
  const userctx = useContext(userContext);

  const [requests, setRequests] = useState([]);
  const requestsHandler = (list) => {
    const uploadedRequests = [];
    for (var key in list) {
      uploadedRequests.push({
        organizationId: list[key].id,
        organizationName: list[key].name,
        organizationImage: list[key].image,
        organizationDescription: list[key].description,
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
    <>
      <h1 className={styles.title}>Sign Up Requests</h1>
      <div className={styles.requestslist}>
        {isLoading && <Spinner />}
        {error && <p>{error}</p>}
        {requests.map((element) => (
          <Request
            key={element.organizationId}
            organizationId={element.organizationId}
            src={
              element.organizationImage
                ? element.organizationImage
                : "/images/inko.png"
            }
            organizationName={element.organizationName}
            organizationDescription={element.organizationDescription}
          />
        ))}
      </div>
    </>
  );
}
export default RequestsList;
