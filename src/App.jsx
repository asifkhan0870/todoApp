import Heading from "./components/Heading";
import InputData from "./components/InputData";
import ItemRender from "./components/ItemRender";

import "./App.css";


function App() {
  const todoItems = [
    { name: "Buy Milk", dueDate: "12/12/2024" },
    { name: "Go to Namaz", dueDate: "08/1/2024" },
    { name: "Take rest", dueDate: "11/1/2024" },
    { name: "Go to college", dueDate: "08/12/2024" },
    { name: "take refreshment", dueDate: "08/12/2024" },
    { name: "Time for tea", dueDate: "08/12/2024" },
   

  ];

  return (
    <center className="todo-container">
      <Heading></Heading>
      <InputData />
      <ItemRender todoItems={todoItems}/>
      
    </center>
  );
}

export default App;
