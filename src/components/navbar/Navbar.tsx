import React from 'react';
import styles from "./Navbar.module.css"
import {Dialogs} from "../dialogs/Dialogs";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.item}>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/dialogs">Dialogs</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/messages">Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/settings">Settings</NavLink>
            </div>
        </div>
    );
}