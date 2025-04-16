import React from 'react';
import styles from './MyPosts.module.css';
import {Post} from "./post/Post";
import {PostType} from "../../../index";

type Props = {
    postArray: PostType[]
}

export const MyPosts = (props:Props) => {
    const PostElement = props.postArray.map(el => {
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

