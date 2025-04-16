import React from 'react';
import styles from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";

export const Dialogs = () => {
    return (
        <div className={styles.dialog}>
            <div className={styles.dialogsItems}>

                <div className={styles.dialog}>
                  <DialogItem userId={1} name={"Maksim"}/>
                  <DialogItem userId={2} name={"Larisa"}/>
                  <DialogItem userId={3} name={"Andrey"}/>
                  <DialogItem userId={4} name={"Bogdan"}/>
                </div>

            </div>

            <div className={styles.messageItems}>

                <div className={styles.messages}>
                    <Message message={"Сынок, всегда помни: упорство и честность приведут к успеху."}/>
                    <Message message={"Дорогая, верь в себя и никогда не бойся мечтать."}/>
                    <Message message={"Мама, папа, спасибо за поддержку и веру в меня."}/>
                    <Message message={"Брат, помоги мне, пожалуйста, с домашним заданием по математике."}/>
                </div>

            </div>
        </div>
    );
};

