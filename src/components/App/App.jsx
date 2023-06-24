import React, {useState} from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../../Notification/Notification';
import Section from '../../Section/Section';
import css from './App.module.css';

const feedbackOptions=['good', 'neutral', 'bad'];

function App () {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const leaveFeedback = (feedback) => {
    switch (feedback) {
      case 'good':
        setGood(prevFeedback => prevFeedback + 1);
        break;

      case 'neutral':
        setNeutral(prevFeedback => prevFeedback + 1);
        break;

      case 'bad':
        setBad(prevFeedback => prevFeedback + 1);
        break;

      default:
        return;
    }

  };

  const countTotalFeedback=()=>(good+neutral+bad);
  
  const countPositiveFeedbackPercentage=()=>{
    const total =  countTotalFeedback();
    return Math.round(good/(total)*100);
  };

  const total=countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return(
    <>
      <Section title="Please leave feedback">
        <h2 className={css.Feedback__title}>Please leave feedback</h2>
        <FeedbackOptions options={feedbackOptions} onLeaveFeedback={leaveFeedback}/>
      </Section>
      <Section title="Statistics">
        <h2 className={css.Feedback__statisticTitle}>Statistics</h2>
        {total>0
        ?<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>
        : <Notification message="There is no feedback"/>}
      </Section>
    </>
  );
  

}

export default App;

