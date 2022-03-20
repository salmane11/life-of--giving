import { useEffect, useState } from "react";
import useHttp, { organizationshost } from "../../../store/requests";
import Request from "./Request";
import styles from "./RequestList.module.css";

function RequestsList() {
  const [requests,setRequests]=useState([]);
  const requestsHandler=(list)=>{
    const uploadedRequests=[];
    for(var key in list){
      uploadedRequests.push({
        organizationId:list[key].id,
        organizationName:list[key].name,
        organizationDescription:list[key].description
      })
    };
    setRequests(uploadedRequests);
  }

  const { isLoading, error, sendRequest: getRequests } = useHttp();

  useEffect(() => {
    getRequests(
      {
        url: organizationshost + "/organisations/notverified",
        method: "get",
        headers: { "Content-Type": "Application/json" },
      },
      requestsHandler
    );
  }, [getRequests]);

  return (
    <>
      <h1 className={styles.title}>Sign Up Requests</h1>
      {isLoading && <p>isLoading ...</p>}
      {error && <p>{error}</p>}
      <div className={styles.requestslist}>
        {requests.map((element) => (
          <Request
            key={element.organizationId}
            organizationId={element.organizationId}
            src="images/logo.jpg"
            organizationName={element.organizationName}
            organizationDescription={element.organizationDescription}
          />
        ))}
      </div>
    </>
  );
}
export default RequestsList;
