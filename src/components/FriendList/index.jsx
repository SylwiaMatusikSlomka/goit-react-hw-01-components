import PropTypes from 'prop-types';
import styles from './FriendList.module.scss';
import { Component } from "react";


export default class FriendList extends Component {
    static propTypes = {
        firends: PropTypes.array,
    };

    render(){
        return (
            <ul className={styles.friendList}>
              {this.props.friends.map(({ avatar, name, isOnline, id }) => {
                return (
                  <li className={styles.friendItem} key={id}>
                    {isOnline ? (
                      <span className={styles.statusOnline}></span>
                    ) : (
                      <span className={styles.statusOffline}></span>
                    )}
                    <img
                      className={styles.friend-avatar}
                      src={avatar}
                      alt="User avatar"
                      width="48"
                    />
                    <p className={styles.friendName}>{name}</p>
                  </li>
                );
              })}
            </ul>
          );
    }
};



