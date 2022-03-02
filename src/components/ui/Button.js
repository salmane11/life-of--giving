import styles from './Button.module.css';

function Button (props){
    //in this ui button we can combine two css classes (the basic one and the one passed on props)
    return(
        <button onClick={props.onClick} className={`${styles.mybutton} ${props.className}`}>{props.children}</button>
    )
}
export default Button;