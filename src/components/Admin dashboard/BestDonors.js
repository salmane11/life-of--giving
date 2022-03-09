import Button from "../ui/Button";
import styles from "./BestDonors.module.css";
function BestDonors() {
  const donors = [
    {
      donorName: "Olivier Gerroud",
      donation: 580,
    },
    {
      donorName: "Mohammed Labyad",
      donation: 404,
    },
    {
      donorName: "Markov Sebastien",
      donation: 380,
    },
    {
      donorName: "Ahmed Berrada",
      donation: 199,
    },
  ];
  return (
    <div className={styles.donorstable}>
      <table className={styles.donors}>
        <thead >
          <tr >
            <th className={styles.header}>Best Donors</th>
            <th className={styles.header}></th>
          </tr>
        </thead>
        {donors.map((element) => (
          <tbody key={element.donorName}>
            <tr>
              <td>{element.donorName}</td>
              <td>${element.donation}</td>
            </tr>
          </tbody>
        ))}
      </table>
      <Button>See More</Button>
    </div>
  );
}
export default BestDonors;
