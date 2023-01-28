import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = option => {
    console.log(option);
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback() {
    const feedbackValues = Object.values(this.state);
    let totalFeedbackValues = 0;

    for (const value of feedbackValues) {
      totalFeedbackValues += value;
    }

    return totalFeedbackValues;
  }

  countPositivePercentage() {
    const positiveFeedbackValues = this.state.good;
    const positiveFeedbackPercentage =
      (positiveFeedbackValues / this.countTotalFeedback()) * 100;

    return Number.parseInt(positiveFeedbackPercentage);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositivePercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;