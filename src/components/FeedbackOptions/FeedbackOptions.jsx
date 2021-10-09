import { Component } from "react";
import PropTypes from 'prop-types';

export default class FeedbackOptions extends Component{
    render() {
        const { good, neutral, bad } = this.props;
        return (
            <>
                <button onClick={good}>Good</button>
                <button onClick={neutral}>Neutral</button>
                <button onClick={bad}>Bad</button>
            </>
        );
    }
}

FeedbackOptions.propTypes = {
    good: PropTypes.func,
    neutral: PropTypes.func,
    bad:PropTypes.func,
}