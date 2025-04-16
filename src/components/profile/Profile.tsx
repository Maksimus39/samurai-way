import styles from "./Profile.module.css"
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {RootState} from "../../redux/State";


type Props = {
    state: RootState
}
export const Profile = (props: Props) => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts state={props.state}/>
        </div>
    )
}