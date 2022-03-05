import { useEffect, useState } from "react";
import styles from './ProjectsListed.module.css'

import Button from "../ui/Button";

//importing images:
import project1 from '../../assets/3.jpg';
import project2 from '../../assets/5.jpg';
import project3 from '../../assets/1.jpg';
import project4 from '../../assets/dogs.jpg';
import project5 from '../../assets/3.jpg';
import project6 from '../../assets/4.jpg';
import project7 from '../../assets/oldpeople.jpg';
import project8 from '../../assets/recycling.jpg';
import project9 from '../../assets/freefood.jpg';

import SingleProject from "./SingleProject";

//the list of all projects listed in the page
function ProjectsListed() {

    const [projects, setProjects] = useState([
        {name: 'Mosque construction', image:project1, progression:90, target: '100$'},
        {name: 'Winter is coming', image:project2, progression: 30, target: '5000$'},
        {name: 'Food for Homeless', image:project3, progression: 50, target: '6500$'},
        {name: 'Save ill dogs', image:project4, progression: 53, target: '400$'},
        {name: 'Mosque construction', image:project5, progression: 12, target: '10000$'},
        {name: 'Fight Hunger', image:project6, progression:23, target: '600$'},
        {name: 'Help Old People', image:project7, progression:73, target: '900$'},
        {name: 'Charity project', image:project8, progression:78, target: '1400$'},
        {name: 'Free Food for Homeless children', image:project9, progression:51, target: '1800$'},
    ])

    return (
        <>
            <div className={styles.projectsContainer}>
                { projects.map ( (project) => (
                    <SingleProject name={project.name} src={project.image} progression={project.progression} target={project.target}/>
                ) ) }
            </div>
            <Button className={styles.loadMoreBtn}>Load more... </Button>
        </>
    );
}

export default ProjectsListed;