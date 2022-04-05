import styles from "./Content.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MilitaryTechSharpIcon from "@mui/icons-material/MilitaryTechSharp";
import MonetizationOnSharpIcon from "@mui/icons-material/MonetizationOnSharp";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import useHttp, { donationshost } from "../../store/requests";
import userContext from "../../store/userContext";

function Content() {
  const [donor, setDonor] = useState({});
  const { profileId: donorId } = useParams("profileId");
  console.log(donorId);

  const userctx = useContext(userContext);
  const transformDonor = (loadedDonor) => {
    setDonor({
      donor_name: loadedDonor.name,
      donor_fb: "/John Wick",
      donor_insta: "/John_Wick",
      donor_ytb: "/John-Wick",
      donor_image: loadedDonor.image,
      donor_score: loadedDonor.score,
      coins: loadedDonor.score,
      badge: "Master Badge",
      creation_date: "12/03/2021",
      total_donation: loadedDonor.totalDonations,
    });
  };
  const { isLoading, error, sendRequest: getDonorById } = useHttp();

  useEffect(() => {
    getDonorById(
      {
        url: donationshost + `/donors/${donorId}/sum-donations`,
        method: "get",
        headers: {
          Authorization: userctx.userToken,
        },
      },
      transformDonor
    );
  }, [donorId, getDonorById, userctx.userToken]);

  return (
    <>
    {/* {isLoading && <p>isLoading ...</p>}
    {error && <p>{error}</p>} */}
    <div className={styles.container}> 
      <div className={styles.item1}>
        <img
          src={donor.donor_image ? donor.donor_image : "/images/inko.png"}
          alt={donor.donor_name}
        />
        <div className={styles.imageUnderText}>
          <h1>{donor.donor_name}</h1>

          <div className={styles.socialNetwork}>
            <FacebookIcon className={styles.socialIcon} />
            <span>{donor.donor_fb}</span>
          </div>
          <div className={styles.socialNetwork}>
            <InstagramIcon />
            <span>{donor.donor_insta}</span>
          </div>
          <div className={styles.socialNetwork}>
            <YouTubeIcon />
            <span>{donor.donor_ytb}</span>
          </div>
        </div>
      </div>
      <div className={styles.item2}>
        <h3 className={styles.total}> Total of donations: {donor.total_donation} $</h3>
        <span className={styles.score}>
          <MonetizationOnSharpIcon className={styles.icon} />
          <span>{donor.coins}</span>
        </span>
        <span className={styles.score}>
          <MilitaryTechSharpIcon className={styles.icon} />
          <span>{donor.badge}</span>
        </span>
        <p className={styles.date}>Profile created since : {donor.creation_date}</p>
      </div>
    </div>
    </>
  );
}
export default Content;
