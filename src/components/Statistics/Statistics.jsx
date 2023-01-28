import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <ul className={css.feedbackStatistics}>
            <li className={css.statistic}>Good: {good}</li>
            <li className={css.statistic}>Neutral: {neutral}</li>
            <li className={css.statistic}>Bad: {bad}</li>
            <li className={css.statistic}>Total: {total}</li>
            <li className={css.statistic}>Positive feedback: {positivePercentage}%</li>
        </ul>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };
  
  export default Statistics;