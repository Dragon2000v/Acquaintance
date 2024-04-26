import css from './FriendList.module.css'
import clsx from 'clsx'
const FriendList = ({friends}) => {
  return (
    <ul className={css.friendList}>
        {friends.map((frend) => {
        return(
        <li className={css.friendListItem} key={frend.id}>
            <img className={css.friendsImg} src={frend.avatar} alt={frend.name} width="125"/>
            <p className={css.label}>{frend.name}</p>
            {frend.isOnline ? <p className={clsx(css.text,css.online)}>Online</p> : <p className={clsx(css.text, css.ofline)}>Ofline</p>}
            {/* <p className={clsx(css.text,{[css.online]: frend.isOnline, [css.ofline]: !frend.isOnline })}>Online</p> */}
        </li>)
        })}

    </ul>
  )
}

export default FriendList