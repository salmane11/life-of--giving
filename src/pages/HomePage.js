import Content from "../components/HomePageContent/Content";
import Joincontainer from "../components/JoinUs/JoinContainer";
import Slider from "../components/Slider/Slider";

function HomePage() {
  const homeContent = [
    {
      src: "/images/content1.jpg",
      title: "Raise More with Our Fundraising Platform",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      src: "/images/content2.jpg",
      title: "Help your organization collect donation all over the world",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  return (
    <>
      <Slider />
      {homeContent.map((element) => (
        <Content
          key={element.src}
          title={element.title}
          content={element.content}
          src={element.src}
          reverse={element.src === "/images/content2.jpg"}
        />
      ))}
      <Joincontainer/>
    </>
  );
}
export default HomePage;
