import styles from "./Profile.module.scss"
import PropTypes from "prop-types"
import { Component } from "react";

export default class Profile extends Component{
    static propTypes = {
        image: PropTypes.string,
        username: PropTypes.string,
        tag: PropTypes.string,
        location: PropTypes.string,
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number
    };

    render(){
            return (
                <div className={styles.profile}>
                <div className={styles.description}>
                  <img src={this.props.image} alt="User avatar" className={styles.avatar} />
                  <p className={styles.name}>{this.props.username}</p>
                  <p className={styles.tag}>{this.props.tag}</p>
                  <p className={styles.location}>{this.props.location}</p>
                </div>
                    
                <ul className={styles.stats}>
                  <li>
                    <span className={styles.label}>Followers</span>
                    <span className={styles.quantity}>{this.props.followers}</span>
                  </li>
                  <li>
                    <span className={styles.label}>Views</span>
                    <span className={styles.quantity}>{this.props.views}</span>
                  </li>
                  <li>
                    <span className={styles.label}>Likes</span>
                    <span className={styles.quantity}>{this.props.likes}</span>
                  </li>
                </ul>
              </div>
        )
    }
}

