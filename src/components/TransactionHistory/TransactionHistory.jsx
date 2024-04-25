import css from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => {
  return (
    <div className={`${css.transaction_history} ${css['table-container']}`}>
      <table className={css.table}>
        <thead className={css.thead}>
          <tr className={css.header}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody className={css.body}>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.type}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
