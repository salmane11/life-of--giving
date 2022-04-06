import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useHttp, { organizationshost } from "../../store/requests";
import userContext from "../../store/userContext";
import styles from "./AssociationsProjects.module.css";

function AssociationsProjects() {
  const [associationProjects, setAssociationProjects] = useState([]);

  const userctx = useContext(userContext);
  const { isLoading, error, sendRequest: getAssociationProjects } = useHttp();

  const transformProjects = (data) => {
    const projects = [];
    for (var key in data) {
      projects.push({
        projectId: data[key].id,
        projectName: data[key].title,
        limitDate: data[key].dateLimit,
        target: data[key].target,
        currentBalance: data[key].currentBalance,
      });
    }
    setAssociationProjects(projects);
  };

  useEffect(() => {
    getAssociationProjects(
      {
        url: organizationshost + `/organisations/${userctx.userId}/projects`,
        method: "get",
        headers: {
          "Content-Type": "Application/json",
          Authorization: userctx.userToken,
        },
      },
      transformProjects
    );
  }, [getAssociationProjects,userctx.userId,userctx.userToken]);

  return (
    <div className={styles.projects}>
      <h1>Current Projects</h1>
      <table>
        <thead>
          <tr className={styles.header}>
            <td>project </td>
            <td> target</td>
            <td>current balence</td>
            <td>limit date</td>
            <td>update</td>
          </tr>
        </thead>
        <tbody>
          {associationProjects.slice(0, 5).map((project) => (
            <tr className={styles.line} key={project.projectId}>
              <td>{project.projectName}</td>
              <td>{project.target}</td>
              <td>{project.currentBalance}</td>
              <td>{project.limitDate ? project.limitDate :"no limit date"}</td>
              <td><Link to={`/update-project/${project.projectId}`}>add update</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default AssociationsProjects;
