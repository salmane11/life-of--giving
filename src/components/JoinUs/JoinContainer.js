import Join from "./Join";
import styles from "./JoinContainer.module.css";

function Joincontainer() {
  const joinContent = [
    {
      src: "/images/donor.jpg",
      title: "As A Donor",
      description: "you are their way to happiness ",
    },
    {
      src: "/images/organization.jpg",
      title: "As An Organization",
      description: "you are their way to happiness",
    },
  ];
  return (
    <>
      <h1 className={styles.title}>Join Us</h1>
      <div className={styles.container}>
        {joinContent.map((element) => (
          <Join
            key={element.title}
            title={element.title}
            src={element.src}
            description={element.description}
          />
        ))}
      </div>
    </>
  );
}
export default Joincontainer;
