import styles from './PostProjectContainer.module.css';
import { TitleSection } from '../Projects/ProjectOrganization';
import AttributeSectionContainer from './ProjectForm';
import React from 'react';

const PostProjectContainer = () => {

    return (
        <div className={styles.container}>
            <TitleSection title={'Post a new project'} marginLeftTitle={'52%'} />
            <div className={styles.formSection}>
                    <AttributeSectionContainer />
            </div>
        </div>
    )
}

export default PostProjectContainer;