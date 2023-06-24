import React, {Component} from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../../Notification/Notification';
import Section from '../../Section/Section';
import css from './App.module.css';

const feedbackOptions=['good', 'neutral', 'bad'];

class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  leaveFeedback = (feedback) => {

    // this.setState(prevState => ({
    //   [feedback]: prevState[feedback] + 1,
    // }));
    this.setState({
      [feedback]: this.state[feedback] + 1,
    });

  };

  countTotalFeedback(){
    return this.state.good+this.state.neutral+this.state.bad;
  }

  countPositiveFeedbackPercentage(){
    const total =  this.countTotalFeedback();
    return Math.round(this.state.good/(total)*100);
  }

  render(){
    const {good, neutral, bad} = this.state;
    const total=this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return(
    <>
      <Section title="Please leave feedback">
        <h2 className={css.Feedback__title}>Please leave feedback</h2>
        <FeedbackOptions options={feedbackOptions} onLeaveFeedback={this.leaveFeedback}/>
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

}

export default App;

