import css from './Feedback.module.css'

const Feedback = ({states: {good, bad, neutral, totalFeedback, positiveFeedbackPer}}) => {

    const positiveClass = positiveFeedbackPer >= 50 ? {color: 'green'} : null;

    return(
        <ul className={css.feedbackList}>
            <li>Good: <span>{good}</span> </li>
            <li>Neutral: <span>{neutral}</span> </li>
            <li>Bad: <span>{bad}</span> </li>
            <li>Total Feedback: <span>{totalFeedback}</span> </li>
            <li>Positive: <span style={positiveClass}>{positiveFeedbackPer}%</span></li>
        </ul>
    )
}

export default Feedback