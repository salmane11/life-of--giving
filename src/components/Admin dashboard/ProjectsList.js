import { useContext, useEffect, useState } from "react";
import useHttp, { organizationshost } from "../../store/requests";
import userContext from "../../store/userContext";
import Button from "../ui/Button";
import styles from "./ProjectsList.module.css";

function ProjectsList() {
  //Todo : bring projects list from backend

  const userctx = useContext(userContext);

  const [projects, setProjects] = useState([]);
  const transformProjects = (list) => {
    const loadedProjects = [];
    for (var key in list) {
      loadedProjects.push({
        projectName: list[key].title,
        associationName: list[key].name,
        target: list[key].target,
        currentBalance: list[key].currentBalance,
      });
    }
    setProjects(loadedProjects);
  };
  const { isLoading, error, sendRequest: getProjects } = useHttp();

  useEffect(() => {
    getProjects(
      {
        url: organizationshost + "/organisations/projects/admin",
        method: "get",
        headers: {
          "Content-Type": "Application/json",
          Authorization: userctx.userToken,
        },
      },
      transformProjects
    );
  }, [getProjects, userctx.userToken]);

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
        {projects.slice(0,4).map((element) => (
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
