import styles from "./Content.module.css";
import Card from "./Card";
import MorePages from "./MorePages";
import Chart from "./Chart";
import Table from "./Table";



function Content() {
    let DonorInfo = [

        {
            donor_name: "John Wick",
            donor_bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            donor_location: "Rabat, Morocco",
            donor_fb: "/John Wick",
            donor_insta: "/John_Wick",
            donor_ytb: "/John-Wick",
            donor_image: "/images/donor.jpg",
            coins: "21 coins",
            badge: "Master Badge"
        },



    ];
    let statistics = [
        {
            donation_mounth: 'January',
            Donations: 4000,

        },
        {
            donation_mounth: 'February',
            Donations: 3000,

        },
        {
            donation_mounth: 'Mars',
            Donations: 2000,

        },
        {
            donation_mounth: 'April',
            Donations: 2780,

        },
        {
            donation_mounth: 'May',
            Donations: 1890,

        },
        {
            donation_mounth: 'June',
            Donations: 2390,

        },
        {
            donation_mounth: 'July',
            Donations: 3490,

        },
    ];
    const recentDonations = [
        {
            association_name: 'Yusr Foundation',
            title: 'Dif2on',
            donation_amount: '20$',
            donation_date:'17 - 02 - 2022',
            key:'1',
        },
        {
            association_name: 'Yusr Foundation',
            title: 'Dif2on',
            donation_amount: '20$',
            donation_date:'17 - 02 - 2022',
            key:'2',

        },
        {
            association_name: 'Yusr Foundation',
            title: 'Dif2on',
            donation_amount: '20$',
            donation_date:'17 - 02 - 2022',
            key:'3',

        },
        {
            association_name: 'Yusr Foundation',
            title: 'Dif2on',
            donation_amount: '20$',
            donation_date:'17 - 02 - 2022',
            key:'4',

        },
        {
            association_name: 'Yusr Foundation',
            title: 'Dif2on',
            donation_amount: '20$',
            donation_date:'17 - 02 - 2022',
            key:'5',

        },
        {
            association_name: 'Yusr Foundation',
            title: 'Dif2on',
            donation_amount: '20$',
            donation_date:'17 - 02 - 2022',
            key:'6',

        },
        {
            association_name: 'Yusr Foundation',
            title: 'Dif2on',
            donation_amount: '20$',
            donation_date:'17 - 02 - 2022',
            key:'7',

        },
        {
            association_name: 'Yusr Foundation',
            title: 'Dif2on',
            donation_amount: '20$',
            donation_date:'17 - 02 - 2022',
            key:'8',

        },
        {
            association_name: 'Yusr Foundation',
            title: 'Dif2on',
            donation_amount: '20$',
            donation_date:'17 - 02 - 2022',
            key:'9',

        },
        {
            association_name: 'Yusr Foundation',
            title: 'Dif2on',
            donation_amount: '20$',
            donation_date:'17 - 02 - 2022',
            key:'10',

        },
        {
            association_name: 'Yusr Foundation',
            title: 'Dif2on',
            donation_amount: '20$',
            donation_date:'17 - 02 - 2022',
            key:'11',

        },
        {
            association_name: 'Yusr Foundation',
            title: 'Dif2on',
            donation_amount: '20$',
            donation_date:'17 - 02 - 2022',
            key:'12',

        },
        {
            association_name: 'Yusr Foundation',
            title: 'Dif2on',
            donation_amount: '20$',
            donation_date:'17 - 02 - 2022',
            key:'13',

        },
        {
            association_name: 'Yusr Foundation',
            title: 'Dif2on',
            donation_amount: '20$',
            donation_date:'17 - 02 - 2022',
            key:'14',

        },
        {
            association_name: 'Yusr Foundation',
            title: 'Dif2on',
            donation_amount: '20$',
            donation_date:'17 - 02 - 2022',
            key:'15',

        },
        {
            association_name: 'Yusr Foundation',
            title: 'Dif2on',
            donation_amount: '20$',
            donation_date:'17 - 02 - 2022',
            key:'16',

        },
        {
            association_name: 'Yusr Foundation',
            title: 'Dif2on',
            donation_amount: '20$',
            donation_date:'17 - 02 - 2022',
            key:'17',

        },


    ];
    const name = 'My recent donations';
    return (
        <div className={styles.container}>
            <Card className={styles.item1} donor_image={DonorInfo[0].donor_image} alt={DonorInfo[0].donor_image} donor_name={DonorInfo[0].donor_name}
                donor_location={DonorInfo[0].donor_location} coins={DonorInfo[0].coins} badge={DonorInfo[0].badge} donor_bio={DonorInfo[0].donor_bio} donor_fb={DonorInfo[0].donor_fb}
                donor_insta={DonorInfo[0].donor_insta} donor_ytb={DonorInfo[0].donor_ytb}
            >

            </Card>
            <MorePages className={styles.item2}></MorePages> 
            <Chart className={styles.item3} data={statistics}></Chart>
             <Table data={recentDonations} name={name}></Table> 
        </div>
    );
}
export default Content;