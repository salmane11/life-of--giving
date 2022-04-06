import styles from "./Content.module.css";
import Card from "./Card";
import MorePages from "./MorePages";
import Chart from "./Chart";
import Table from "./Table";
import { useContext, useEffect, useState } from "react";
import userContext from "../../store/userContext";
import useHttp, { donationshost } from "../../store/requests";

function Content() {
  const [donorInfo, setDonorInfo] = useState({});

  const userctx = useContext(userContext);
  const transformDonor = (loadedDonor) => {
    setDonorInfo({
      donor_name: loadedDonor.name,
      donor_image: loadedDonor.image,
      donor_score: loadedDonor.score ?loadedDonor.score: (Math.random()*100).toPrecision(2),
      coins: loadedDonor.score ?loadedDonor.score: (Math.random()*100).toPrecision(2),
      donor_bio:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      donor_location: loadedDonor.location,
      donor_fb: `. /${loadedDonor.name}`,
      donor_insta: `. /${loadedDonor.name}`,
      donor_ytb: `. /${loadedDonor.name}`,
      badge: "Master Badge",
    });
  };
  const { isLoading, error, sendRequest: getDonorById } = useHttp();

  useEffect(() => {
    getDonorById(
      {
        url: donationshost + `/donors/${userctx.userId}`,
        method: "get",
        headers: {
          Authorization: userctx.userToken,
        },
      },
      transformDonor
    );
  }, [userctx.userId, getDonorById, userctx.userToken]);

  let statistics = [
    {
      donation_mounth: "January",
      Donations: 4000,
    },
    {
      donation_mounth: "February",
      Donations: 3000,
    },
    {
      donation_mounth: "Mars",
      Donations: 2000,
    },
    {
      donation_mounth: "April",
      Donations: 2780,
    },
    {
      donation_mounth: "May",
      Donations: 1890,
    },
    {
      donation_mounth: "June",
      Donations: 2390,
    },
    {
      donation_mounth: "July",
      Donations: 3490,
    },
  ];

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

  
  const name = "My recent donations";
  return (
    <div className={styles.container}>
      <Card
        className={styles.item1}
        donor_image={
          donorInfo.donor_image ? donorInfo.donor_image : "/images/inko.png"
        }
        alt={donorInfo.donor_image}
        donor_name={donorInfo.donor_name}
        donor_location={donorInfo.donor_location}
        coins={donorInfo.coins}
        badge={donorInfo.badge}
        donor_bio={donorInfo.donor_bio}
        donor_fb={donorInfo.donor_fb}
        donor_insta={donorInfo.donor_insta}
        donor_ytb={donorInfo.donor_ytb}
      ></Card>
      <MorePages className={styles.item2}></MorePages>
      <Chart className={styles.item3} data={statistics}></Chart>
      <Table data={mydonations} name={name}></Table>
    </div>
  );
}
export default Content;
