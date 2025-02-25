import css from './FriendListItem.module.css'


export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.wrapper}>
      <li className={css.list}>
      <img src={avatar} alt={name} width="75" className={css.avatar} />
      <p className={css.name}>{name}</p>
      <p className={css.online}>{isOnline ? "Online" : <span className={css.offline}>Offline</span>}</p>
      </li>
    </div>
  );
}