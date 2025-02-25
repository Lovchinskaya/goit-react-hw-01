import css from "./Profile.module.css";


export default function Profile ({username, tag, location, image, stats: {followers, views, likes}}) {
return (
    <div className={css.list}>
        <div className={css.wrapper}>
            <img className={css.avatar}
                src={image}
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