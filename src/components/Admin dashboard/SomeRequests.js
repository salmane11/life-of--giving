import Button from "../ui/Button";
import styles from "./BestDonors.module.css";

function SomeRequests() {
  const requests = [
    {
      associationName: "Alyussr",
      associationCategory: "children",
    },
    {
      associationName: "CAS",
      associationCategory: "poor",
    },
    {
      associationName: "Tadamoun",
      associationCategory: "homelesseness",
    },
    {
      associationName: "Alyussr2",
      associationCategory: "children",
    },
  ];
  return (
    <div className={styles.donorstable}>
      <table className={styles.donors}>
        <thead>
          <tr>
            <th className={styles.header}>new requests</th>
            <th className={styles.header}></th>
          </tr>
        </thead>
        {requests.map((element) => (
          <tbody key={element.associationName}>
            <tr>
              <td>{element.associationName}</td>
              <td>{element.associationCategory}</td>
            </tr>
          </tbody>
        ))}
      </table>
      <Button>See More</Button>
    </div>
  );
}
export default SomeRequests;
