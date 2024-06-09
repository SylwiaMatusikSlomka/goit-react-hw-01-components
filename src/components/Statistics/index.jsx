import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';
import { Component } from "react";


export default class Statistics extends Component {
    static defaultProps = {
        title: "Upload stats"
    };

    static propTypes = {
        title: PropTypes.string,
        stats: PropTypes.array.isRequired,
    };

    render(){
        return (
            <section className={styles.statistics}>
              <h2 className={styles.title}>{this.props.title}</h2>
        
              <ul className={styles['stat-list']}>
                {this.props.stats.map(({ id, label, percentage }) => (
                  <li className={styles['stat-item']} key={id}>
                    <span className={styles['stat-label']}>{label}</span>
                    <span className={styles.percentage}>{percentage}%</span>
                  </li>
                ))}
              </ul>
            </section>
          );
    }
};



