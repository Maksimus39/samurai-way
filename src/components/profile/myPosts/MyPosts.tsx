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
            <Post post={"Post-1"}
                  likes={20}/>
            <Post post={"Post-2"}
                  likes={40}/>
        </div>
    );
}

