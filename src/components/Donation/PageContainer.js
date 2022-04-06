import ProjectCarousel from "../Projects/ProjectCarousel"
import { TitleSection } from "../Projects/ProjectOrganization"
import styles from './PageContainer.module.css'
import EntityConverter from "./EntityConverter"
import StripeContainer from '../../Stripe/StripeContainer'
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import userContext from "../../store/userContext"
import useHttp, { organizationshost } from "../../store/requests"

const PageContainer = () => {

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
            <div className={styles.outsideContainer}>
                <div className={styles.insideContainer}>
                    <ProjectCarousel image={projectInformations.image}/>
                    <div id={styles.descriptionSection}>
                        <p>{projectInformations.description}</p>
                        <EntityConverter entity={'family'} entityPrice={20} target={projectInformations.target/20}/>
                    </div>
                </div>
                <TitleSection title={'Donation Information'} marginLeftTitle={'50%'}/>
                <StripeContainer />
            </div>
        </>
    )
}
export default PageContainer;