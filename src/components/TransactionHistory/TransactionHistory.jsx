import css from "./TransactionHistory.module.css"

export default function TransactionHistory ({transactions}){
    return (
        <div className={css.wrappertable}>
            <table className={css.table}>
            <thead>
    <tr>
      <th className={css.rows}>Type</th>
      <th className={css.rows}>Amount</th>
      <th className={css.rows}>Currency</th>
    </tr>
  </thead>

  <tbody>
  {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={css.rows}>{type}</td>
            <td className={css.rows}>{amount}</td>
            <td className={css.rows}>{currency}</td>
          </tr>
        ))}
  </tbody>
 
           </table>
           </div>
);
}