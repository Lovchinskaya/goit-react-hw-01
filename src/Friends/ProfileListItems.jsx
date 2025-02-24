import FriendList from './FriendList';

export default function FriendListItems({ props }) {
    return (
      <ul>
        {props.map((friends) => (
          <li key={friends.id} >
            <FriendList friends={friends} />
          </li>
        ))}
      </ul>
    );
  }