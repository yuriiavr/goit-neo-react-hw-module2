import css from './Options.module.css'

const Options = ({ feedBackFunc: { updateFeedback, resetFeedback } }) => {
  return (
    <div className={css.optionsContainer}>
      <button onClick={() => updateFeedback("good")}>😊</button>
      <button onClick={() => updateFeedback("neutral")}>😐</button>
      <button onClick={() => updateFeedback("bad")}>☹️</button>
      <button onClick={resetFeedback}>Reset</button>
    </div>
  );
};

export default Options;
