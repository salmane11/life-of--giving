import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttp, { organizationshost } from "../../../store/requests";
import Button from "../../ui/Button";
import styles from "./RequestDetails.module.css";

function RequestDetails() {
  const [requestDetails, setRequestDetails] = useState({});
  const requestDetailsHandler = (loadedRequest) => {
    setRequestDetails(loadedRequest);
  };

  const { associationId } = useParams();
  const { isLoading, error, sendRequest: getRequestById } = useHttp();
  useEffect(() => {
    getRequestById(
      {
        url: organizationshost + `/organisations/${associationId}`,
        method: "get",
        headers: { "Content-Type": "Application/json" },
      },
      requestDetailsHandler
    );
  }, [associationId,getRequestById]);

  return (
    <div className={styles.requestdetails}>
      <div className={styles.head}>
        <img src="/images/logo1.png" alt="alyussr" />
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
          data="/images/CALENDRIER_INE2.pdf"
          type="text/html"
          codetype="application/pdf"
        />
      </div>
      <div className={styles.buttons}>
        <Button>Approve Request</Button>
        <Button>Decline Request</Button>
      </div>
    </div>
  );
}
export default RequestDetails;
