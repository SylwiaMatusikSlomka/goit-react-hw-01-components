import styles from "./App.module.scss"
import Profile from "./Profile";
import Statistics from "./Statistics";
import FriendList from "./FriendList";
import TransactionHistory from "./TransactionHistory";
import user from '../users/user.json';
import data from '../data/data.json';
import friends from '../friends/friends.json';
import transactions from '../transactions/transactions.json';

export const App = () => {
    return (
      <div className={styles.container}>
        <Profile 
          image={user.avatar}
          username={user.username}
          tag={user.tag}
          location={user.location}
          followers={user.stats.followers}
          likes={user.stats.likes}
          views={user.stats.views}
        />
        <Statistics 
          stats={data} 
        />
        <FriendList 
          friends={friends} 
        />
        <TransactionHistory 
          transactions={transactions} 
        />;
      </div>
    )
}
