import Navigation from "./Navigation"
import CardSettings from "./CardSettings"
import styles from "./Content.module.css"
import { useContext, useEffect, useState } from "react";
import useHttp, { donationshost } from "../../store/requests";
import userContext from "../../store/userContext";


function Content() {
    const [donorInfo,setDonorInfo] = useState({});
    const userctx = useContext(userContext);
    const transformDonor = (loadedDonor) => {
        setDonorInfo({
            donor_name: loadedDonor.name,
            donor_bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            donor_location: loadedDonor.location,
            donor_image: loadedDonor.image,
            coins: loadedDonor.score ? loadedDonor.score:(Math.random()*100).toPrecision(2),
            badge: "Master Badge"

        });
    };
    const {isLoading, error, sendRequest: getDonorById }= useHttp();

    useEffect(() => {
        getDonorById(
            {
                url: donationshost + `/donors/${userctx.userId}`,
                method :"get",
                headers :{
                    Authorization : userctx.userToken,
                },
            },
            transformDonor
        );
    }, [userctx.userId, getDonorById, userctx.userToken])

    return (

        <div className={styles.wrapper}>
            <CardSettings  donor_image={donorInfo.donor_image ? donorInfo.donor_image : "/images/inko.png" } alt={donorInfo.donor_image} donor_name={donorInfo.donor_name}
                location={donorInfo.donor_location} coins={donorInfo.coins} badge={donorInfo.badge}></CardSettings>
            <Navigation></Navigation>
        </div>
    );
}
export default Content;