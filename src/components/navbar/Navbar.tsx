import React from 'react';
import styles from "./Navbar.module.css"

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.item}>
                <a href="">Profile</a>
            </div>
            <div className={styles.item}>
                <a href="">Messages</a>
            </div>
            <div className={styles.item}>
                <a href="">News</a>
            </div>
            <div className={styles.item}>
                <a href="">Music</a>
            </div>
            <div className={styles.item}>
                <a href="">Settings</a>
            </div>
        </div>
    );
}

