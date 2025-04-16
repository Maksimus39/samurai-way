import React from 'react';
import styles from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";


type DialogItemArrayType = {
    id: number
    name: string
}
type MessageArrayType = {
    id: number
    message: string
}

export const Dialogs = () => {

    const dialogItemArray: DialogItemArrayType[] = [
        {id: 1, name: "Maksim"},
        {id: 2, name: "Larisa"},
        {id: 3, name: "Andrey"},
        {id: 4, name: "Bogdan"}
    ]
    const messageArray: MessageArrayType[] = [
        {id: 1, message: "Сынок, всегда помни: упорство и честность приведут к успеху."},
        {id: 2, message: "Дорогая, верь в себя и никогда не бойся мечтать."},
        {id: 3, message: "Мама, папа, спасибо за поддержку и веру в меня."},
        {id: 4, message: "Брат, помоги мне, пожалуйста, с домашним заданием по математике."}
    ]

    const DialogElement = dialogItemArray.map((el) => {
        return <div key={el.id}><DialogItem userId={el.id} name={el.name}/></div>
    })
    const MessageElement = messageArray.map((el) => {
        return <div key={el.id}><Message message={el.message}/></div>
    })

    return (
        <div className={styles.dialog}>
            <div className={styles.dialogsItems}>
                <div className={styles.dialog}>{DialogElement}</div>
            </div>

            <div className={styles.messageItems}>
                <div className={styles.messages}>{MessageElement}</div>
            </div>
        </div>
    );
};

