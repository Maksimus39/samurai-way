import React from 'react';
import styles from './MyPosts.module.css';
import {Post} from "./post/Post";

export const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <input type="text" placeholder={"post"}/>
                <button>Add post</button>
            </div>
            <Post/>
            <Post/>
        </div>
    );
}

