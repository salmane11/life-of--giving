import Request from "./Request";
import styles from './RequestList.module.css';

function RequestsList() {
  const requests = [
    {
      organizationId: 1,
      src: "/images/logo.png",
      organizationName: "AL Yussr",
      organizationDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      organizationId: 2,
      src: "/images/logo1.png",
      organizationName: "Attadamoun foundation",
      organizationDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      organizationId: 3,
      src: "/images/logo2.png",
      organizationName: "Childhood happyiness",
      organizationDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      organizationId: 4,
      src: "/images/logo3.png",
      organizationName: "Angels foundation",
      organizationDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      organizationId: 5,
      src: "/images/logo4.png",
      organizationName: "AL Yussr",
      organizationDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      organizationId: 6,
      src: "/images/logo5.png",
      organizationName: "Homelessness foundation",
      organizationDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
  ];
  return (
    <>
      <h1 className={styles.title}>Sign Up Requests</h1>
      <div className={styles.requestslist}>
        {requests.map((element) => (
          <Request
            key={element.organizationId}
            src={element.src}
            organizationName={element.organizationName}
            organizationDescription={element.organizationDescription}
          />
        ))}
      </div>
    </>
  );
}
export default RequestsList;
