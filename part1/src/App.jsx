import { useState } from "react";

// (ES)Nota: El componente App es una función de flecha que devuelve JSX.
// (EN)Note: The App component is an arrow function that returns JSX.

const button = (text, onClick) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({ text, value }) => <tr><td>{text}</td><td>{value}</td></tr>;

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = good / all * 100;

  if (all === 0) {
    return <p>No feedback given</p>;
  } else {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive + " %"} />
          </tbody>
        </table>
      </div>
    );
  }
}

const App = () => {
  //(ES)guarda los clics de cada botón en su propio estado
  //(EN)store the clicks of each button in its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      {button("good", () => setGood(good + 1))}
      {button("neutral", () => setNeutral(neutral + 1))}
      {button("bad", () => setBad(bad + 1))}
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

//(ES)Nota: El export al final se omite en estos ejemplos, ahora y en el futuro. Todavía será necesario para que el código funcione.
//(EN)Note: The export at the end is omitted in these examples, now and in the future. It will still be necessary for the code to work.
export default App;
