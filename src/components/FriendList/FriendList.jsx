import styles from './FriendList.module.scss'
import PropTypes from 'prop-types'

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li className={styles.item} key={id}>
            <span
              className={`${styles.status} ${
                isOnline ? styles.online : styles.offline
              }`}
            ></span>
            <img
              className={styles.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={styles.name}>{name}</p>
          </li>
        )
      })}
    </ul>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  )
}
