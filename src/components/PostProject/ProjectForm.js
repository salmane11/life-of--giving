import React, { useContext, useState } from 'react';
import styles from './ProjectForm.module.css'
import useHttp, { host, organizationshost, useHttpImages } from "../../store/requests";
import userContext from '../../store/userContext';

const ProjectForm = () => {

    const [projectDescription,setProjectDescription] = useState("");
    const [projectImage, setProjectImage] = useState("");
    const [projectTitle, setProjectTitle] = useState("");
    const [organizationName, setOrganizationName] = useState("");
    const [dueDate, setDueDate] = useState(new Date());
    const [moneyTarget, setMoneyTarget] = useState("");
    const [donationCategory, setDonationCategory] = useState("");
    const [projectEntity, setProjectEntity] = useState("");
    const [projectEntityValue, setProjectEntityValue] = useState("");
    const [projectEntityBool, setProjectEntityBool]= useState("");

    const projectDescriptionHandler = (event)=>{
        setProjectDescription(event.target.value);
    }
    const projectImageHandler = (event) => {
        setProjectImage(event.target.files[0]);
    }
    const projectTitleHandler = (event) => {
        setProjectTitle(event.target.value);
    }
    const organizationNameHandler = (event) => {
        setOrganizationName(event.target.value);
    }
    const dueDateHandler = (event) => {
        setDueDate(event.target.value);
    }
    const moneyTargetHandler = (event) => {
        setMoneyTarget(event.target.value);
    }
    const donationCategoryHandler = (event) => {
        setDonationCategory(event.target.value);
    }
    const projectEntityBoolHandler = (event) => {
        setProjectEntityBool(event.target.value);
    }
    const projectEntityHandler = (event) => {
        setProjectEntity(event.target.value);
    }
    const projectEntityValueHandler = (event) => {
        setProjectEntityValue(event.target.value);
    }

    const userctx=useContext(userContext);

    const {isLoading, error, sendRequest: postProject} = useHttpImages();

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(projectImage);
        console.log(projectTitle);
        console.log(organizationName);
        console.log(projectDescription);
        // Post the project data into backend

        const project=new FormData();
        project.append("title",projectTitle);
        project.append("description",projectDescription);
        project.append("image",projectImage);
        project.append("orgId",userctx.userId);
        project.append("dateLimit",dueDate);
        project.append("target",+moneyTarget);
        project.append("currentBalance",0);

        // project.append("category",donationCategory);
        // project.append("projectEntity",projectEntity);
        // project.append("project",projectEntityValue);

        postProject( {
            url: organizationshost + "/organisations/projects",
            method: "post",
            headers: {Authorization:userctx.userToken},
            body: project,
        },
        (data) => {console.log(data);} 
    );
        setProjectTitle("");
        setProjectDescription("");
        setProjectImage(null);
        setOrganizationName("");
        setDueDate("");
        setMoneyTarget("");
        setDonationCategory("");
        setProjectEntity("");
        setProjectEntityValue("");
        setProjectEntityBool("");
    };

    return (
        <div className={styles.attributeSection}>
                <form onSubmit={submitHandler} className={styles.attributesForm}>
                    <p className={styles.titles}>Project Description</p>            
                    <div>
                        <textarea
                            className={styles.textAreaContainer}
                            placeholder='Tell us about your project...'
                            rows={4}
                            type="text"
                            onChange={projectDescriptionHandler}
                            value={projectDescription}
                        />
                    </div>
                    <p className={styles.titles}>Attributes</p>            
                    <div>
                        <label htmlFor='projectImage'>Project Image</label> <br/>
                        <input 
                        className={styles.formInput}
                        name="projectImage" 
                        type="file"
                        onChange={ projectImageHandler }
                        />
                    </div>
                    <div>
                        <label htmlFor='projectTitle'>Project Title</label> <br/>
                        <input 
                        className={styles.formInput}
                        name="projectTitle" 
                        value={projectTitle}
                        placeholder="e.g Winter is coming"
                        onChange={projectTitleHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor='limiteDate'>Due Date of the project</label> <br/>
                        <input 
                        className={styles.formInput}
                        name='limitDate' 
                        placeholder="the limite date for the project" 
                        onChange={dueDateHandler}/>
                    </div>
                    <div>
                        <label htmlFor='target'>Money Target</label> <br/>
                        <input 
                        className={styles.formInput}
                        name="target" 
                        placeholder="e.g 1000$"
                        onChange={moneyTargetHandler}
                        value={moneyTarget}
                        />
                    </div>
                    <div>
                        <label htmlFor='donationsCategory'>Donations Category</label> <br/>
                        <input 
                        className={styles.formInput}
                        name='donationsCategory' 
                        onChange={donationCategoryHandler}
                        value={donationCategory}
                        placeholder="Children, Ramadan food, Caravan, ..."/>
                    </div>
                    <div>
                        <p>Does your project have an entity?</p>
                        <p style={{color:'gray'}}>e.g : for each 10$ you help one family. family is the project entity in this example</p>
                        <div className={styles.radioButtons}>
                            <div className={styles.radioBtnItem}>
                                <input type="radio"
                                    className={styles.formInput}
                                    id="hasEntity"
                                    name="HasProjectEntity" 
                                    value="Yes" 
                                    onChange={projectEntityBoolHandler}/>
                                <label htmlFor='hasEntity'>Yes</label>
                            </div>
                            <div className={styles.radioBtnItem}>
                                <input type="radio" 
                                    className={styles.formInput}
                                    id="hasNoEntity" 
                                    name="HasProjectEntity" 
                                    value="No" 
                                    onChange={projectEntityBoolHandler}/>
                                <label htmlFor='hasNoEntity'>No</label>
                            </div>
                        </div>
                    </div>

                    {
                        (projectEntityBool==="Yes") && (
                            <div>
                                <div>
                                    <label htmlFor='projectEntity'>What is your project entity?</label>
                                    <input 
                                    className={styles.formInput}
                                    name="projectEntity" 
                                    placeholder='Family, children, homeless person, ...'  
                                    onChange={projectEntityHandler}
                                    value={projectEntity}/>
                                </div>
                                <div>
                                    <label htmlFor='projectEntityValue'>What is your project entity value?</label>
                                    <input 
                                    className={styles.formInput}
                                    name='projectEntityValue' 
                                    placeholder="how much does cost each entity?"
                                    onChange={projectEntityValueHandler}
                                    value={projectEntityValue} />
                                </div>
                            </div>
                        )
                    }

                    <div className={styles.buttons}>
                        <button id={styles.submitBtn} type="submit">Submit</button>
                        <button id={styles.cancelBtn} to="/projects">Cancel</button>
                    </div>
                    {isLoading && <p>isLoading ...</p>}
                    {error && <p>{error}</p>}
               </form>
        </div>
    );
}

export default ProjectForm;