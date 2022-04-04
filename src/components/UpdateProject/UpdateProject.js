import React, { useState } from "react";
import styles from "./UpdateProject.module.css";
import useHttp, { host } from "../../store/requests";

const UpdateProject = () => {
  const [projectDescription, setProjectDescription] = useState("");
  const [projectImage, setProjectImage] = useState(null);
  const [dueDate, setDueDate] = useState(null);
  const [donationCategory, setDonationCategory] = useState("");
  const [projectEntity, setProjectEntity] = useState("");
  const [projectEntityValue, setProjectEntityValue] = useState("");
  const [projectEntityBool, setProjectEntityBool] = useState("");

  const projectDescriptionHandler = (event) => {
    setProjectDescription(event.target.value);
  };
  const projectImageHandler = (event) => {
    setProjectImage(event.target.files[0]);
  };
  const dueDateHandler = (event) => {
    setDueDate(event.target.value);
  };
  const donationCategoryHandler = (event) => {
    setDonationCategory(event.target.value);
  };
  const projectEntityBoolHandler = (event) => {
    setProjectEntityBool(event.target.value);
  };
  const projectEntityHandler = (event) => {
    setProjectEntity(event.target.value);
  };
  const projectEntityValueHandler = (event) => {
    setProjectEntityValue(event.target.value);
  };

  const { isLoading, error, sendRequest: postProject } = useHttp();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(projectImage);
    // Post the project data into backend
    postProject(
      {
        url: host + "/pojects",
        method: "put",
        headers: { "Content-Type": "Application/json" },
        body: {
          description: projectDescription,
          image: projectImage,
          limiteDate: dueDate,
          category: donationCategory,
          projectEntity: projectEntity,
          projectEntityValue: projectEntityValue,
        },
      },
      (data) => {
        console.log(data);
      }
    );
    setProjectDescription("");
    setProjectImage(null);
    setDueDate("");
    setDonationCategory("");
    setProjectEntity("");
    setProjectEntityValue("");
    setProjectEntityBool("");
  };

  return (
    <div className={styles.updateSectionContainer}>
      <div className={styles.attributeSection}>
        <form onSubmit={submitHandler} className={styles.attributesForm}>
          <p className={styles.titles}>Project Description</p>
          <div>
            <textarea
              className={styles.textAreaContainer}
              placeholder="Update your project description..."
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
              value={projectImage}
              onChange={projectImageHandler}
            />
          </div>
          <div>
            <label htmlFor="limiteDate">Limit Date of the project</label> <br />
            <input
              className={styles.formInput}
              name="limitDate"
              placeholder="set the new limite date for the project"
              onChange={dueDateHandler}
            />
          </div>
          <div>
            <label htmlFor="donationsCategory">Donations Category</label> <br />
            <input
              className={styles.formInput}
              name="donationsCategory"
              onChange={donationCategoryHandler}
              value={donationCategory}
              placeholder="Children, Ramadan food, Caravan, ..."
            />
          </div>
          <div>
            <p>Does your project have an entity?</p>
            <p style={{ color: "gray" }}>
              e.g : for each 10$ you help one family. family is the project
              entity in this example
            </p>
            <div className={styles.radioButtons}>
              <div className={styles.radioBtnItem}>
                <input
                  type="radio"
                  className={styles.formInput}
                  id="hasEntity"
                  name="HasProjectEntity"
                  value="Yes"
                  onChange={projectEntityBoolHandler}
                />
                <label htmlFor="hasEntity">Yes</label>
              </div>
              <div className={styles.radioBtnItem}>
                <input
                  type="radio"
                  className={styles.formInput}
                  id="hasNoEntity"
                  name="HasProjectEntity"
                  value="No"
                  onChange={projectEntityBoolHandler}
                />
                <label htmlFor="hasNoEntity">No</label>
              </div>
            </div>
          </div>

          {projectEntityBool === "Yes" && (
            <div>
              <div>
                <label htmlFor="projectEntity">
                  What is your project entity?
                </label>
                <input
                  className={styles.formInput}
                  name="projectEntity"
                  placeholder="Family, children, homeless person, ..."
                  onChange={projectEntityHandler}
                  value={projectEntity}
                />
              </div>
              <div>
                <label htmlFor="projectEntityValue">
                  What is your project entity value?
                </label>
                <input
                  className={styles.formInput}
                  name="projectEntityValue"
                  placeholder="how much does cost each entity?"
                  onChange={projectEntityValueHandler}
                  value={projectEntityValue}
                />
              </div>
            </div>
          )}

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
