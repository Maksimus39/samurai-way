import styles from "./Profile.module.css"
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {PostType} from "../../index";


type Props = {
    postArray: PostType[]
}
export const Profile = (props: Props) => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts postArray={props.postArray}/>
        </div>
    )
}