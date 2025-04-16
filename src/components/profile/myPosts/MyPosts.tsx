import React from 'react';
import styles from './MyPosts.module.css';
import {Post} from "./post/Post";
import {RootState} from "../../../redux/State";


type Props = {
    state: RootState
}

export const MyPosts = (props: Props) => {
    const PostElement = props.state.profilePage.postArray.map(el => {
        return <div key={el.id}><Post post={el.post} likes={el.likes}/></div>
    })

    return (
        <div>
            My post
            <div>
                <input type="text" placeholder={"post"}/>
                <button>Add post</button>
                {PostElement}
            </div>
        </div>
    );
}

