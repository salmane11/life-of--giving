import Navigation from "./Navigation"
import CardSettings from "./CardSettings"
import styles from "./Content.module.css"

function Content() {
    let DonorInfo = [

        {
            donor_name: "John Wick",
            donor_bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            donor_location: "Rabat, Morocco",
            donor_image: "/images/donor.jpg",
            coins: "21 coins",
            badge: "Master Badge"
        },



    ];

    return (

        <div className={styles.wrapper}>
            <CardSettings  donor_image={DonorInfo[0].donor_image} alt={DonorInfo[0].donor_image} donor_name={DonorInfo[0].donor_name}
                location={DonorInfo[0].donor_location} coins={DonorInfo[0].coins} badge={DonorInfo[0].badge}></CardSettings>
            <Navigation></Navigation>
        </div>
    );
}
export default Content;