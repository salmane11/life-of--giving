import { useContext, useEffect, useState } from "react";
import styles from "./ProjectsListed.module.css";

import Button from "../ui/Button";

//importing images:
import project9 from "../../assets/freefood.jpg";

import SingleProject from "./SingleProject";
import useHttp, { organizationshost } from "../../store/requests";
import userContext from "../../store/userContext";

//the list of all projects listed in the page
function ProjectsListed() {

  const userctx = useContext(userContext);

  const [loadedProjects, setLoadedProjects] = useState([]);
  const transformProjects=(list)=>{
      const projects=[];
      for(var key in list){
          projects.push({
            ProjectId:list[key].id,
            name: list[key].title,
            image: project9,
            progression: +100*((+list[key].currentBalance)/(+list[key].target)),
            target: list[key].target,
          })
      }
      console.log(projects);
      setLoadedProjects(projects);
  }
  const { isLoading, error, sendRequest: getAllProjects } = useHttp();

  useEffect(() => {
    getAllProjects(
      {
        url: organizationshost + "/organisations/projects",
        method: "get",
        headers: {
          "Content-Type": "Application/json",
          Authorization: userctx.userToken,
        },
      },
      transformProjects
    );
  }, [getAllProjects,userctx.userToken]);

  return (
    <>
      <div className={styles.projectsContainer}>
          {isLoading && <p>isLoading ...</p>}
          {error && <p>{error}</p>}
        {loadedProjects.map((project) => (
          <SingleProject
            key={project.ProjectId}
            name={project.name}
            src={project.image}
            progression={project.progression}
            target={project.target}
          />
        ))}
      </div>
      <Button className={styles.loadMoreBtn}>Load more... </Button>
    </>
  );
}

export default ProjectsListed;
