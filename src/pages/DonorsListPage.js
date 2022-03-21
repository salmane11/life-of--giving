import Content from "../components/DonorsListPageContent/Content";


function DonorsPage() {
    const DonorsContent = [
        {
            donor_name: "John Wick",
            donor_fb: "/John Wick",
            donor_insta: "/John_Wick",
            donor_ytb: "/John-Wick",
            donor_image: "/images/donor.jpg",
            donor_score: "8",
        },
        {
            donor_name: "Jason stathom",
            donor_fb: "/Jason stathom",
            donor_insta: "/Jason_stathom",
            donor_ytb: "/Jason-stathom",
            donor_image: "/images/donor2.jpg",
            donor_score: "5",
        },
        {
            donor_name: "Decaprio",
            donor_fb: "/Decaprio",
            donor_insta: "/Decaprio",
            donor_ytb: "/Decaprio",
            donor_image: "/images/donor3.jfif",
            donor_score: "4",
        },
        {
            donor_name: "Davencci",
            donor_fb: "/Davencci",
            donor_insta: "/Davencci",
            donor_ytb: "/Davencci",
            donor_image: "/images/donor4.jfif",
            donor_score: "3",
        },
        {
            donor_name: "Picasso",
            donor_fb: "/Picasso",
            donor_insta: "/Picasso",
            donor_ytb: "/Picasso",
            donor_image: "/images/donor5.jfif",
            donor_score: "2",
        },
        {
            donor_name: "Angelina",
            donor_fb: "/Angelina",
            donor_insta: "/Angelina",
            donor_ytb: "/Angelina",
            donor_image: "/images/donor6.jfif",
            donor_score: "1",
        },
        {
            donor_name: "Picasso",
            donor_fb: "/Picasso",
            donor_insta: "/Picasso",
            donor_ytb: "/Picasso",
            donor_image: "/images/donor5.jfif",
            donor_score: "2",
        }
        ,
        {
            donor_name: "Angelina",
            donor_fb: "/Angelina",
            donor_insta: "/Angelina",
            donor_ytb: "/Angelina",
            donor_image: "/images/donor6.jfif",
            donor_score: "1",
        }
        ,
        {
            donor_name: "John Wick",
            donor_fb: "/John Wick",
            donor_insta: "/John_Wick",
            donor_ytb: "/John-Wick",
            donor_image: "/images/donor.jpg",
            donor_score: "8",
        },
        {
            donor_name: "Jason stathom",
            donor_fb: "/Jason stathom",
            donor_insta: "/Jason_stathom",
            donor_ytb: "/Jason-stathom",
            donor_image: "/images/donor2.jpg",
            donor_score: "5",
        },
        {
            donor_name: "Davencci",
            donor_fb: "/Davencci",
            donor_insta: "/Davencci",
            donor_ytb: "/Davencci",
            donor_image: "/images/donor4.jfif",
            donor_score: "3",
        },
        {
            donor_name: "Decaprio",
            donor_fb: "/Decaprio",
            donor_insta: "/Decaprio",
            donor_ytb: "/Decaprio",
            donor_image: "/images/donor3.jfif",
            donor_score: "4",
        }
    ];
    
    return (
        <>
        <Content list={DonorsContent}></Content>
        </>
    );
}
export default DonorsPage;
