import { Component } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import Statistics from './components/Stats/Stats';



class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    }
  
  handleGoodButton = () => {
    
    this.setState(prevState =>({good: prevState.good +1}))
   }
  handleNeutralButton = () => {
    
    this.setState( prevState=>({neutral:prevState.neutral +1}))
  }
  handleBadButton = () => {
    
    this.setState( prevState=>({bad:prevState.bad +1}))
  }
 
  
  
    
  
  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + neutral + bad;
    return (<Section title={'Please leave feedback'}>
      <FeedbackOptions
        good={this.handleGoodButton}
        neutral={this.handleNeutralButton}
        bad={this.handleBadButton}
      />
      
      <Statistics title={'Statistics'}
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback}
        positivePercentage={Math.round((good / countTotalFeedback) * 100)}
      />
    
    </Section>
    );

  }
}

export default App