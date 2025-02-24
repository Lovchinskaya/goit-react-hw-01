import friends from "../friends.json";
import css from "./FriendList.module.css";

const {avatar, name, isOnline, id} = friends;

export default function FriendList (){
    return (
        <div className={css.wrapper}>
            <img className={css.image}
                src={avatar}
                alt={name}
            />
            <span>{name}</span>
            <span>{isOnline}</span>
        </div>
    )
}