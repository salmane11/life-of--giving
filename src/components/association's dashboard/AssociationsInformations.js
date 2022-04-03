import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import styles from "./AssociationsInformations.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { useContext, useEffect, useState } from "react";
import userContext from "../../store/userContext";
import useHttp, { organizationshost } from "../../store/requests";

function AssociationsInformations() {
  const userctx = useContext(userContext);
  const [associationsInformations, setAssociationsInformations] = useState({});
  const { isLoading, error, sendRequest: getAssociationsInfo } = useHttp();
  const transformInformations = (data) => {
    setAssociationsInformations({
      associationName: data.name,
      associationImage:data.image,
      associationDescription: data.description,
      location: data.location,
      phone: data.phoneNumber,
    });
  };
  useEffect(() => {
    getAssociationsInfo(
      {
        url: organizationshost + `/organisations/${userctx.userId}`,
        method: "get",
        headers: {
          "Content-Type": "Application/json",
          Authorization: userctx.userToken,
        },
      },
      (data) => {
        transformInformations(data);
        console.log(data);
      }
    );
  }, [getAssociationsInfo, userctx.userId, userctx.userToken]);
  return (
    <div className={styles.informations}>
      <img src={associationsInformations.associationImage
          ? associationsInformations.associationImage
          : "/images/inko.png"} alt="logo" />
      <h1>
        {associationsInformations.associationName
          ? associationsInformations.associationName
          : "anonymous"}
      </h1>
      <div className={styles.contact}>
        <h4>
          <LocationOnIcon />
          {associationsInformations.location
            ? associationsInformations.location
            : "not found"}
        </h4>
        <h4>
          <PhoneIcon />
          {associationsInformations.phone
            ? associationsInformations.phone
            : "not found"}
        </h4>
      </div>
      <p>
        {associationsInformations.associationDescription
          ? associationsInformations.associationDescription
          : "description not found"}
      </p>
      <h5>
        <FacebookIcon /> www.facebook.com/alyussr
      </h5>
      <h5>
        <InstagramIcon />
        www.instagram.com/alyussr
      </h5>
    </div>
  );
}
export default AssociationsInformations;
