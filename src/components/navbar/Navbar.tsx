import React from 'react';
import styles from "./Navbar.module.css"
import {Dialogs} from "../dialogs/Dialogs";

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={styles.item}>
                <a href="/dialogs">Dialogs</a>
            </div>
            <div className={styles.item}>
                <a href="/messages">Messages</a>
            </div>
            <div className={styles.item}>
                <a href="/news">News</a>
            </div>
            <div className={styles.item}>
                <a href="/music">Music</a>
            </div>
            <div className={styles.item}>
                <a href="/settings">Settings</a>
            </div>
        </div>
    );
}