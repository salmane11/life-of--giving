import React from 'react';
import Logo from './Logo';
import styles from './Header.module.css';
import Navigation from './Navigation';
import LoginButton from './LoginButton';

function Header(props){
    return(
        <div className={styles.header}>
            <Logo/>
            <Navigation/>
            <LoginButton/>
        </div>
    );
}
export default Header;