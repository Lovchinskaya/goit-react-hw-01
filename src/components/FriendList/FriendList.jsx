import FriendListItem from '../FriendListItems/FriendListItems';
import css from './FriendList.module.css';




export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
}

