import css from './FriendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem';
const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(frend => {
        return (
          <FriendListItem
            key={frend.id}
            id={frend.id}
            avatar={frend.avatar}
            name={frend.name}
            isOnline={frend.isOnline}
          />
        );
      })}
    </ul>
  );
};

export default FriendList;
