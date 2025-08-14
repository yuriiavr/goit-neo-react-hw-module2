import { useEffect, useState } from "react";
import "./App.css";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

function App() {
  const getStoredValue = (key, defaultValue) => {
    try {
      const storedValue = localStorage.getItem(key);
      const parsedValue = storedValue ? JSON.parse(storedValue) : defaultValue;
      return typeof parsedValue === "number" ? parsedValue : defaultValue;
    } catch (error) {
      console.error(`Error: Can't download ${key} from localStorage:`, error);
      return defaultValue;
    }
  };

  const [good, setGood] = useState(() => getStoredValue("good", 0));
  const [neutral, setNeutral] = useState(() => getStoredValue("neutral", 0));
  const [bad, setBad] = useState(() => getStoredValue("bad", 0));

  useEffect(() => {
    try{
      localStorage.setItem('good', JSON.stringify(good));
      localStorage.setItem('neutral', JSON.stringify(neutral));
      localStorage.setItem('bad', JSON.stringify(bad));
    } catch (error){
      console.error("Can't download feedbacks", error)
    }
  }, [good, neutral, bad]);

  const updateFeedback = (feedbackType) => {
    switch (feedbackType) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
    }
  };

  const resetFeedback = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  };

  const totalFeedback = good + neutral + bad;

  const positiveFeedbackPer = Math.round((good / totalFeedback) * 100);

  return (
    <>
      <h1 className="title">Sip Happens Café</h1>
      <span className="description">
        Please leave your feedback about our service by selecting one of the
        options below.
      </span>
      <Options feedBackFunc={{ updateFeedback, resetFeedback }} />
      {totalFeedback >= 1 ? (
        <Feedback
          states={{ good, bad, neutral, totalFeedback, positiveFeedbackPer }}
        />
      ) : (
        <span className="noFeedback">No feedback yet</span>
      )}
    </>
  );
}

export default App;
