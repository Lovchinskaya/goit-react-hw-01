import userData from "../userData.json";
import css from "./Profile.module.css";

const {username, tag, location, avatar, stats: {followers, views, likes}} = userData;

export default function Profile () {
return (
    <div className={css.list}>
        <div className={css.wrapper}>
            <img className={css.avatar}
                src={avatar}
                alt={username}
            />
            <p className={css.title}>{username}</p>
            <p className={css.subtitle}>@{tag}</p>
            <p className={css.subtitle}>{location}</p>
       </div>
       <div className={css.wrapperlist}>
       <ul className={css.item}>
          <li className={css.items}>
            <span className={css.titleSocial}>Followers</span>
            <span className={css.numbers}>{followers}</span>
          </li>
          <li className={css.items}>
            <span className={css.titleSocial}>Views</span>
            <span className={css.numbers}>{views}</span>
          </li>
          <li className={css.items}>
            <span className={css.titleSocial}>Likes</span>
            <span className={css.numbers}>{likes}</span>
          </li>
       </ul>
       </div>
    </div>
);
};