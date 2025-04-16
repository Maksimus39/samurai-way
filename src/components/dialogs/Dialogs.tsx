import React from 'react';
import styles from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {DialogItemArrayType, MessageArrayType} from "../../index";


type Props = {
    dialogItemArray: DialogItemArrayType[]
    messageArray: MessageArrayType[]
}

export const Dialogs = (props:Props) => {

    const DialogElement = props.dialogItemArray.map((el) => {
        return <div key={el.id}><DialogItem userId={el.id} name={el.name}/></div>
    })
    const MessageElement = props.messageArray.map((el) => {
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

