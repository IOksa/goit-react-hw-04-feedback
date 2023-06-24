import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions=({options, onLeaveFeedback})=>(
 <ul className={css.ButtonsFeedback__list}>
   {options.map((option) => (
      <li key={option}>
        <button className={css.ButtonsFeedback__button} onClick={() => onLeaveFeedback(option)}>{option}</button>
      </li>
    ))}
    </ul>
);

export default FeedbackOptions;


FeedbackOptions.propTypes={
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};    