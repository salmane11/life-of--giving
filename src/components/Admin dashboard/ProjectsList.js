import Button from "../ui/Button";
import styles from "./ProjectsList.module.css";

function ProjectsList() {
  //Todo : bring projects list from backend
  const projects = [
    {
      projectName: "homeless people",
      associationName: "Alyussr",
      target: 100000,
      currentBalance: 58000,
    },
    {
      projectName: "winter is coming",
      associationName: "CAS",
      target: 500000,
      currentBalance: 300000,
    },
    {
      projectName: "Happy childhood",
      associationName: "Childhood Fundation",
      target: 100000,
      currentBalance: 42000,
    },
    {
      projectName: "Mosque construction",
      associationName: "Alyussr",
      target: 100000,
      currentBalance: 580000,
    },
  ];
  return (
    <div className={styles.projectslist}>
      <table className={styles.projectstable}>
        <thead>
          <tr>
            <th>Project</th>
            <th>Association</th>
            <th>Target</th>
            <th>CurrentBalance</th>
          </tr>
        </thead>
        {projects.map((element) => (
          <tbody key={element.projectName}>
            <tr>
              <td>{element.projectName}</td>
              <td>{element.associationName}</td>
              <td>${element.target}</td>
              <td>${element.currentBalance}</td>
            </tr>
          </tbody>
        ))}
      </table>
      <Button>See More</Button>
    </div>
  );
}
export default ProjectsList;
