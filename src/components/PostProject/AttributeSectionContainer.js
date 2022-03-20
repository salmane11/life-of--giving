import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './AttributeSectionContainer.module.css'

const AttributeSectionContainer = () => {

    const {register, handleSubmit, watch} = useForm();
    const hasEntity = watch("hasEntity", false);
    // const hasNoEntity = watch("hasNoEntity");


    const onSubmit = (data) => {
        console.log(data);
        console.log(hasEntity);
        
    }
   
    return (
        <div className={styles.attributeSection}>
                <button>Attributes</button>            
                <form onSubmit={handleSubmit(onSubmit)} className={styles.attributesForm}>
                    <div>
                        <label htmlFor='projectTitle'>Project Title</label> <br/>
                        <input name="projectTitle" {...register('projectTitle', { required: true } )} placeholder="e.g Winter is coming"/>
                    </div>
                    <div>
                        <label htmlFor='organizationName'>Organization Name</label> <br/>
                        <input  name="organizationName" {...register('organizationName', { required: true } )} required placeholder="the organization name"/>
                    </div>
                    <div>
                        <label htmlFor='limiteDate'>Due Date of the project</label> <br/>
                        <input name='limitDate' {...register('limitDate')} placeholder="the limite date for the project"/>
                    </div>
                    <div>
                        <label htmlFor='target'>Money Target</label> <br/>
                        <input name="target" {...register('target')} placeholder="e.g 1000$"/>
                    </div>
                    <div>
                        <label htmlFor='donationsCategory'>Donations Category</label> <br/>
                        <input name='donationsCategory' {...register('donationCategory')} placeholder="Children, Ramadan food, Caravan, ..." />
                    </div>
                    <div>
                        <p>Does your project have an entity?</p>
                        <p style={{color:'gray'}}>e.g : for each 10$ you help one family. family is the project entity in this example</p>
                        <div className={styles.radioButtons}>
                            <div className={styles.radioBtnItem}>
                                <input type="radio"
                                    id="hasEntity"
                                    name="HasProjectEntity" 
                                    value="Yes" {...register('hasEntity')}/>
                                <label htmlFor='hasEntity'>Yes</label>
                            </div>
                            <div className={styles.radioBtnItem}>
                                <input type="radio" 
                                    id="hasNoEntity" 
                                    name="HasProjectEntity" 
                                    value="No" {...register('hasEntity')} />
                                <label htmlFor='hasNoEntity'>No</label>
                            </div>
                        </div>
                        
                    </div>

                    {
                        (hasEntity==="Yes") && (
                            <div>
                                <div>
                                    <label htmlFor='projectEntity'>What is your project entity?</label>
                                    <input name="projectEntity" placeholder='Family, children, homeless person, ...'  {...register('projectEntity')}/>
                                </div>
                                <div>
                                    <label htmlFor='projectEntityValue'>What is your project entity value?</label>
                                    <input name='projectEntityValue' {...register('projectEntityValue')} placeholder="how much does cost each entity?"/>
                                </div>
                            </div>
                        )
                    }

                    <div className={styles.buttons}>
                        <button type='submit' id={styles.submitBtn}>Submit</button>
                        <button id={styles.cancelBtn}>Cancel</button>
                    </div>
               </form>
        </div>
    )
}

export default AttributeSectionContainer;