import styles from './Button.module.css';

function Button (props){
    return(
        <button onClick={props.children} className={`${styles.mybutton} ${props.className}`}>{props.children}</button>
    )
}
export default Button;