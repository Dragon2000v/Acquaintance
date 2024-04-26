import css from './FriendListItem.module.css';
import clsx from 'clsx';
const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li className={css.friendListItem} key={id}>
      <img className={css.friendsImg} src={avatar} alt={name} width="125" />
      <p className={css.label}>{name}</p>
      {isOnline ? (
        <p className={clsx(css.text, css.online)}>Online</p>
      ) : (
        <p className={clsx(css.text, css.ofline)}>Ofline</p>
      )}
    </li>
  );
};

export default FriendListItem;
