import styles from './FriendListItem.module.css';
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.friend_list_item}>
      <div className={styles.friend_card}>
        <img src={avatar} alt="Avatar" width="48" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={clsx(styles.status, {
            [styles.online]: isOnline,
            [styles.offline]: !isOnline,
        })}>
            {isOnline ? 'Online' : 'Offline'}
        </p>
      </div>
    </li>
  );
};

export default FriendListItem;