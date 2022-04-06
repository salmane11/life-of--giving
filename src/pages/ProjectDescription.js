import ProjectContent from '../components/Projects/ProjectContent';
import ProjectTextDescription from '../components/Projects/ProjectTextDescription';
import {ProjectOrganization} from '../components/Projects/ProjectOrganization'
import { TitleSection } from '../components/Projects/ProjectOrganization';
import styles from './ProjectDescription.module.css';
import UpdateSection from '../components/Projects/UpdateItem';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import useHttp, { organizationshost } from '../store/requests';
import userContext from '../store/userContext';
 
const ProjectDescription = () => {
    const [projectInformations,setProjectInformations]=useState({});
    const {projectId}=useParams("projectId");
    console.log(projectId);

    const userctx=useContext(userContext);

    const {isLoading,error,sendRequest:getProject}=useHttp();
    useEffect(()=>{
        getProject(
            {
                url:organizationshost+`/organisations/projects/${projectId}`,
                method:"get",
                headers:{
                    Authorization: userctx.userToken
                }
            },
            (data)=>{setProjectInformations(data)}
        )
    },[userctx.userToken,getProject,projectId])


    return (
        <>
            <div className={styles.projectsPage}>
                <ProjectContent projectId={projectId} projectInformations={projectInformations}/>
                <ProjectTextDescription projectInformations={projectInformations}/>
                <ProjectOrganization organizationId={projectInformations.orgId}/>
                <TitleSection title={'Updates'}/>
                <UpdateSection/>
            </div>
        </>
    )
}

export default ProjectDescription;