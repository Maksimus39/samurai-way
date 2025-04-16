import React from 'react';
import {NavLink} from "react-router-dom";


type Props = {
    userId: number
    name: string
}
export const DialogItem = (props: Props) => {
    const {userId, name} = props;
    const path = `/dialogs/${userId}`

    return  <div><NavLink to={path}>{name}</NavLink></div>
};

