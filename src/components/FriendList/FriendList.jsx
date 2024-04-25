import css from './FriendList.module.css'
const FriendList = ({friends}) => {
  return (
    <ul className={css.friendList}>
        {friends.map((frend) => {
        return(
        <li className={css.friendListItem} key={frend.id}>
            <img className={css.friendsImg} src={frend.avatar} alt={frend.name} width="125"/>
            <p className={css.label}>{frend.name}</p>
            {frend.isOnline ? <p className={css.online}>Online</p> : <p className={css.ofline}>Ofline</p>}
        </li>)
        })}

    </ul>
  )
}

export default FriendList