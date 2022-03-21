import styles from './FooterQuote.module.css'
function FooterQuote(){
    return(
        <blockquote className={styles.quote}>
            "It’s easier to take than to give. It’s nobler to give than to take.
             The thrill of taking lasts a day. The thrill of giving lasts a lifetime."
        </blockquote>
    );
}
export default FooterQuote;