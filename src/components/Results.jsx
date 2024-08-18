import { formatter } from '../utils/investment';
import classes from './Results.module.css';

function Results({ records }) {
  let initialInvestment = 0;

  if (records.length > 0) {
    initialInvestment =
      records[0].valueEndOfYear -
      records[0].interest -
      records[0].annualInvestment;
  }

  return (
    <section>
      <table className={classes.results}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => {
            const totalInterest =
              record.valueEndOfYear -
              initialInvestment -
              record.annualInvestment * record.year;
            const totalInvestedAmount = record.valueEndOfYear - totalInterest;

            return (
              <tr key={record.year}>
                <td>{record.year}</td>
                <td>{formatter.format(record.valueEndOfYear)}</td>
                <td>{formatter.format(record.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalInvestedAmount)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default Results;
