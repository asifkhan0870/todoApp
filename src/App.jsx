import Heading from "./components/Heading";
import InputData from "./components/InputData";
import ItemRender from "./components/ItemRender";

import "./App.css";
import { useState } from "react";
import Message from "./components/Message";

function App() {
  let [currFood, setFood] = useState([]);

  const HandlertoAddNewItem = (itemName, itemDate) => {
    const newFooditems = [...currFood, { name: itemName, dueDate: itemDate }];

    setFood(newFooditems);
  };

  const HandlerDelete=(itemName,itemDate)=>{
       
    const newListOfFood=currFood.filter(item=>item.name!==itemName && item.dueDate!==itemDate);

    setFood(newListOfFood);

  

    



    

    
  };

  return (
    <center className="todo-container">
      <Heading></Heading>
      <InputData onAddItem={HandlertoAddNewItem} />
      {currFood.length == 0 && <Message></Message>}
      <ItemRender todoItems={currFood} onDelete={HandlerDelete} />
    </center>
  );
}

export default App;
