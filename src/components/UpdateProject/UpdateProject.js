import React, { useState, useContext } from "react";
import styles from "./UpdateProject.module.css";
import useHttp, { organizationshost, useHttpImages } from "../../store/requests";
import userContext from '../../store/userContext'
import { useParams } from "react-router-dom";

const UpdateProject = () => {
  const [projectDescription, setProjectDescription] = useState("");
  const [projectImage, setProjectImage] = useState("");

  const {projectId}=useParams("projectId");

  const projectDescriptionHandler = (event) => {
    setProjectDescription(event.target.value);
  };
  const projectImageHandler = (event) => {
    setProjectImage(event.target.files[0]);
  };

  const { isLoading, error, sendRequest: postProject } = useHttpImages();
  const userctx = useContext(userContext);

  const submitHandler = (event) => {
    event.preventDefault();
    // Post the project data into backend
    console.log(projectId, projectImage,projectDescription);

    const updates=new FormData();
    updates.append("projectId",projectId);
    updates.append("description",projectDescription);
    if(projectImage){
      updates.append("image",projectImage);
    }

    postProject(
      {
        url: organizationshost + "/organ/updates",
        method: "post",
        headers: { 
          Authorization: userctx.userToken,
        },
        body: updates,
      },
      (data) => {
        console.log(data);
      }
    );
    setProjectDescription("");
    setProjectImage(null);
  };

  return (
    <div className={styles.updateSectionContainer}>
      <div className={styles.attributeSection}>
        <form onSubmit={submitHandler} className={styles.attributesForm}>
          <p className={styles.titles}>Project Description</p>
          <div>
            <textarea
              className={styles.textAreaContainer}
              placeholder="Describe your project's update..."
              rows={4}
              type="text"
              onChange={projectDescriptionHandler}
              value={projectDescription}
            />
          </div>
          <p className={styles.titles}>Attributes</p>
          <div>
            <label htmlFor="projectImage">Project Image</label> <br />
            <p>Upload an image for your projec's update</p>
            <input
              className={styles.formInput}
              name="projectImage"
              type="file"
              placeholder="Upload an image for your project's updates"
              onChange={projectImageHandler}
            />
          </div>

          <div className={styles.buttons}>
            <button id={styles.submitBtn} type="submit">
              Submit
            </button>
            <button id={styles.cancelBtn} to="/projects">
              Cancel
            </button>
          </div>
          {isLoading && <p>isLoading ...</p>}
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default UpdateProject;
