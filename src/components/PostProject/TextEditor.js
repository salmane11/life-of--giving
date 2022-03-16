import React, { useState } from 'react';
import { ContentState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from './TextEditor.module.css'
// import './App.css';
const MyEditor = () => {
  let _contentState = ContentState.createFromText('Tell us about your project');
  const raw = convertToRaw(_contentState)
  const [contentState, setContentState] = useState(raw) // ContentState JSON
  return (
    <div className="App">
      <header className={styles.AppHeader}>
        Project Description
      </header>
      <Editor 
        defaultContentState={contentState}
        onContentStateChange={setContentState}
        wrapperClassName={styles.wrapperClass}
        editorClassName={styles.editorClass}
        toolbarClassName={styles.toolbarClass}
      />
    </div>
  )
}
export default MyEditor;