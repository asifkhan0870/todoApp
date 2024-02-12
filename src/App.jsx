import Heading from "./components/Heading";
import InputData from "./components/InputData";
import Item1 from "./components/Item1";
import Item2 from "./components/Item2";
import './App.css'

function App() {
  return (
    <center className="todo-container">
      <Heading></Heading>
      <InputData/>
      <Item1/>
      <Item2/>
    </center>
  );
}

export default App;
