import { useContext, useEffect, useState } from "react";
import Content from "../components/DonorsListPageContent/Content";
import useHttp, { donationshost } from "../store/requests";
import userContext from "../store/userContext";

function DonorsPage() {
  const userctx = useContext(userContext);

  const [donors, setDonors] = useState([]);
  const transformDonors = (donorsList) => {
    const list = [];
    for (var key in donorsList) {
      list.push({
        donor_Id: donorsList[key].id,
        donor_name: donorsList[key].name,
        donor_fb: "/John Wick",
        donor_insta: "/John_Wick",
        donor_ytb: "/John-Wick",
        donor_image: donorsList[key].image,
        donor_score: donorsList[key].score,
      });
    }
    setDonors(list);
  };
  const { isLoading, error, sendRequest: getAllDonors } = useHttp();
  useEffect(() => {
    getAllDonors(
      {
        url: donationshost + "/donors",
        method: "get",
        headers: {
          Authorization: userctx.userToken,
        },
      },
      transformDonors
    );
  }, [userctx.userToken, getAllDonors]);

  return (
    <>
      <Content list={donors}></Content>
    </>
  );
}
export default DonorsPage;
