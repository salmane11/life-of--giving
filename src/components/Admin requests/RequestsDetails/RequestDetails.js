import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useHttp, { organizationshost } from "../../../store/requests";
import userContext from "../../../store/userContext";
import Button from "../../ui/Button";
import styles from "./RequestDetails.module.css";

function RequestDetails() {
  const userctx = useContext(userContext);
  const navigate = useNavigate();
  const [requestDetails, setRequestDetails] = useState({});
  const requestDetailsHandler = (loadedRequest) => {
    setRequestDetails(loadedRequest);
    console.log(loadedRequest)
  };

  const { associationId } = useParams();
  const { isLoading, error, sendRequest: getRequestById } = useHttp();
  useEffect(() => {
    getRequestById(
      {
        url: organizationshost + `/organisations/${associationId}`,
        method: "get",
        headers: {
          "Content-Type": "Application/json",
          Authorization: userctx.userToken,
        },
      },
      requestDetailsHandler
    );
  }, [associationId, getRequestById, userctx.userToken]);

  //usehttp to delete a request
  const {
    declineIsLoading,
    declineError,
    sendRequest: declineRequest,
  } = useHttp();
  const declineHandler = () => {
    declineRequest(
      {
        url: organizationshost + `/organisations/${associationId}`,
        method: "delete",
        headers: {
          "Content-Type": "Application/json",
          Authorization: userctx.userToken,
        },
      },
      () => {}
    );
    console.log(declineIsLoading, declineError);
    navigate("/requests");
  };

  //usehttp to approave a request
  const {
    approavalIsLoading,
    approavalError,
    sendRequest: approaveRequest,
  } = useHttp();
  const approavalHandler = () => {
    approaveRequest(
      {
        url: organizationshost + `/organisations/${associationId}`,
        method: "Put",
        headers: {
          "Content-Type": "Application/json",
          Authorization: userctx.userToken,
        },
      },
      (object) => {
        console.log(object);
      }
    );
    navigate("/associations");
    console.log(approavalIsLoading, approavalError);
  };

  return (
    <div className={styles.requestdetails}>
      <div className={styles.head}>
        <img
          src={requestDetails.image ? requestDetails.image : "/images/inko.png"}
          alt={requestDetails.name}
        />
        <h1>{requestDetails.name}</h1>
        {isLoading && <p>isLoading ...</p>}
        {error && <p>{error}</p>}
      </div>
      <div className={styles.block}>
        <div className={styles.subblock}>
          <h2>Phone Number</h2>
          <p>
            {requestDetails.phone ? requestDetails.phone : "+2126123485678"}
          </p>
        </div>
        <div className={styles.subblock}>
          <h2>Office Location</h2>
          <p>
            {requestDetails.location
              ? requestDetails.location
              : "Al Irfane Rabat, rabat-salé-kénitra, Maroc"}
          </p>
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.subblock}>
          <h2>Email</h2>
          <p>{requestDetails.email}</p>
        </div>
        <div className={styles.subblock}>
          <h2>Social Media</h2>
          <p>
            {requestDetails.location
              ? requestDetails.location
              : "www.facebook.com/AlYussr"}
          </p>
        </div>
      </div>
      <div className={styles.description}>
        <h2>Association's Description</h2>
        <p>{requestDetails.description}</p>
      </div>
      <div className={styles.files}>
        <h2>Supporting files</h2>
        <object
          title="supporting file"
          data={requestDetails.verificationFile}
          type="text/html"
          codetype="application/pdf"
        />
      </div>
      <div className={styles.buttons}>
        <Button onClick={approavalHandler}>Approve Request</Button>
        <Button onClick={declineHandler}>Decline Request</Button>
      </div>
    </div>
  );
}
export default RequestDetails;
