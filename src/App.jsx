import Heading from "./components/Heading";
import InputData from "./components/InputData";
import Item from "./components/Item";
import "./App.css";

function App() {

  
  const todoItems = [
    { name: "Buy Milk", dueDate: "08/12/2024" },
    { name: "Buy ", dueDate: "08/12/2024" },
    { name: "Buy Milk", dueDate: "08/12/2024" },
    { name: "Buy ", dueDate: "08/12/2024" },
    { name: "Buy Milk", dueDate: "08/12/2024" },
    { name: "Buy ", dueDate: "08/12/2024" },
  ];


  return (
    <center className="todo-container">
      <Heading></Heading>
      <InputData />
      <Item todoItems={todoItems} />
    </center>
  );
}

export default App;
