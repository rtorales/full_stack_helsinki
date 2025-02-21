const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  );
}
const Part = (props) => {
  return <p>{props.part} {props.exercises}</p>;
}

const Footer = (props) => {
  return <p>Number of exercises {props.exercises1[0].exercises + props.exercises1[1].exercises + props.exercises1[2].exercises}</p>;
}


const App = () => {
  // const-definitions
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Footer exercises1={parts} />
    </div>
  );
}

//(ES)Nota: El export al final se omite en estos ejemplos, ahora y en el futuro. Todavía será necesario para que el código funcione.
export default App;
