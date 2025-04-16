import React from 'react';
import styles from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={styles.dialog}>
            <div className={styles.dialogsItems}>
                <div className={styles.dialog}>
                    <NavLink to="/dialogs/1">Maksim</NavLink>
                </div>
                <div className={styles.dialog}>
                  <NavLink to="/dialogs/2">Larisa</NavLink>
                </div>
                <div className={styles.dialog}>
                   <NavLink to="/dialogs/3">Andrey</NavLink>
                </div>
                <div className={styles.dialog}>
                 <NavLink to="/dialogs/4">Bogdan</NavLink>
                </div>
            </div>

            <div className={styles.messageItems}>
                <div className={styles.messages}>
                    "Сынок, всегда помни: упорство и честность приведут к успеху."
                </div>
                <div className={styles.messages}>
                    "Дорогая, верь в себя и никогда не бойся мечтать."
                </div>
                <div className={styles.messages}>
                    "Мама, папа, спасибо за поддержку и веру в меня."
                </div>
                <div className={styles.messages}>
                    "Брат, помоги мне, пожалуйста, с домашним заданием по математике."
                </div>
            </div>
        </div>
    );
};

