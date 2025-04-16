import React from 'react';
import styles from './MyPosts.module.css';
import {Post} from "./post/Post";

type PostType = {
    id: number
    post: string
    likes: number
}
export const MyPosts = () => {

    const postArray: PostType[] = [
        {id: 1, post: "Post-1", likes: 20},
        {id: 2, post: "Post-2", likes: 40},
    ]


    return (
        <div>
            My post
            <div>
                <input type="text" placeholder={"post"}/>
                <button>Add post</button>
            </div>

            {postArray.map(el => {
                return <div key={el.id}><Post post={el.post} likes={el.likes}/></div>
            })}
        </div>
    );
}

