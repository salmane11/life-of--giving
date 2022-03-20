import styles from './PostProjectForm.module.css';
import { TitleSection } from '../Projects/ProjectOrganization';
import ImageUploader from './ImageUploader';
import AttributeSectionContainer from './AttributeSectionContainer';
import React, { useState } from 'react';

const TextEditor = () => {

    const [projectDescription,setProjectDescription] = useState("");

  
    return (
        <form>
                <textarea
                className={styles.textAreaContainer}
                placeholder='Tell us about your project...'
                rows={6}
                type="text"
                value={projectDescription}
                onChange={ e => {
                    setProjectDescription(e.target.value);
                }}
                />
        </form>
    )
  }
  



const PostProjectForm = () => {

    return (
        <div className={styles.container}>
            <TitleSection title={'Post a new project'} marginLeftTitle={50} />
            <header className={styles.AppHeader}>
                Project Description
            </header>
            <div className={styles.formSection}>
                <div className={styles.item} id={styles.textEditorItem}>
                    <TextEditor />
                    <AttributeSectionContainer />
                </div>
                <div className={styles.item} id={styles.imageUploader}>
                    <ImageUploader />
                    {/* <Triangle/> */}
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default PostProjectForm;