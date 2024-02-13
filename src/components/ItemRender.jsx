import Item from "./Item";

const ItemRender = ({ todoItems }) => {
  return (
    <div className="items-container">
      
      {todoItems.map(item=>
          <Item todoName={item.name} todoDate={item.dueDate}></Item>
          
      )}
    </div>
  );
};

export default ItemRender;
