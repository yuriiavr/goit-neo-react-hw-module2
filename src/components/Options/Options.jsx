import css from './Options.module.css'

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={css.optionsContainer}>
      <button onClick={() => updateFeedback("good")}>😊</button>
      <button onClick={() => updateFeedback("neutral")}>😐</button>
      <button onClick={() => updateFeedback("bad")}>☹️</button>
     {totalFeedback >= 1 ? <button onClick={resetFeedback}>Reset</button> : null} 
    </div>
  );
};

export default Options;
