import { useState } from "react";

// (ES)Nota: El componente App es una función de flecha que devuelve JSX.
// (EN)Note: The App component is an arrow function that returns JSX.

const button = (text, onClick) => <button onClick={onClick}>{text}</button>;

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

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


const MaxAnecdote = ({ anecdotes, votes }) => {
  const maxVotes = Math.max(...votes);
  const maxIndex = votes.indexOf(maxVotes);

  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[maxIndex]}</p>
      <p>has {maxVotes} votes</p>
    </div>
  );
}

const App = () => {
  //(ES)guarda los clics de cada botón en su propio estado
  //(EN)store the clicks of each button in its own state
  //Excercise 1.6 to 1.11
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  //Excercise 1.12 to 1.14
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [selected, setSelected] = useState(0);


  return (
    <>
      <div>
        <h1>Anecdotes</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
        <Button
          text="vote"
          onClick={() => {
            const newVotes = [...votes];
            newVotes[selected] += 1;
            setVotes(newVotes);
          }}
        />
        <Button
          text="next anecdote"
          onClick={() =>
            setSelected(Math.floor(Math.random() * anecdotes.length))
          }
        />
        <MaxAnecdote anecdotes={anecdotes} votes={votes} />
      </div>
      <div>
        <h1>give feedback</h1>
        <Button text="good" onClick={() => setGood(good + 1)} />
        <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
        <Button text="bad" onClick={() => setBad(bad + 1)} />
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </>
  );
}

//(ES)Nota: El export al final se omite en estos ejemplos, ahora y en el futuro. Todavía será necesario para que el código funcione.
//(EN)Note: The export at the end is omitted in these examples, now and in the future. It will still be necessary for the code to work.
export default App;
