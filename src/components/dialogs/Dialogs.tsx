import React from 'react';
import styles from "./Dialogs.module.css"
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {RootState} from "../../redux/State";


type Props = {
    state: RootState
}

export const Dialogs = (props: Props) => {

    const DialogElement = props.state.messagesPage.dialogItemArray.map((el) => {
        return <div key={el.id}><DialogItem userId={el.id} name={el.name}/></div>
    })
    const MessageElement = props.state.messagesPage.messageArray.map((el) => {
        return <div key={el.id}><Message message={el.message}/></div>
    })

    const newMessageElement = React.createRef<HTMLInputElement>()

    const adMessageHandler = () => {
        const text = newMessageElement.current?.value
        alert(text)
    }

    return (
        <div className={styles.dialog}>
            <div className={styles.dialogsItems}>
                <div className={styles.dialog}>{DialogElement}</div>
            </div>

            <div className={styles.messageItems}>
                <div className={styles.messages}>{MessageElement}</div>

                <input type={"text"}
                       placeholder={"add message"}
                       ref={newMessageElement}
                />
                <button onClick={adMessageHandler}>Add message</button>
            </div>
        </div>
    );
};

