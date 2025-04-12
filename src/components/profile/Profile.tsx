import styles from "./Profile.module.css"
import {MyPosts} from "./myPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={styles.content}>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images
                ?q=tbn:ANd9GcTp9Wjg-P4GX9FojakVN-Ll7ZcYry60pxLwnA&s"
                     alt=""/>
            </div>
            <div>Ava + description</div>
           <MyPosts />
        </div>
    )
}