import React from 'react';
import styles from "./Dialogs.module.css"


export const Dialogs = () => {
    return (
        <div className={styles.dialog}>
            <div className={styles.dialogsItems}>
                <div className={styles.dialog}>Maksim</div>
                <div className={styles.dialog}>Larisa</div>
                <div className={styles.dialog}>Andrey</div>
                <div className={styles.dialog}>Bogdan</div>
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

