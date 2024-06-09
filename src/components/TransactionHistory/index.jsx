import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.scss';
import { Component } from "react";


export default class TransactionHistory extends Component {
    static propTypes = {
        transactions: PropTypes.array.isRequired,
    };

    render(){
        return (
            <table className={styles.transactionHistory}>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Currency</th>
                </tr>
              </thead>
              <tbody>
                {this.props.transactions.map(({ id, type, amount, currency }) => {
                  return (
                    <tr key={id}>
                      <td>{type}</td>
                      <td>{amount}</td>
                      <td>{currency}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          );
    }
};



