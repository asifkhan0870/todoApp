import Item from "./Item";

const ItemRender = ({ todoItems,onDelete }) => {
  return (
    <div className="items-container">
      
      {todoItems.map(item=>
          <Item todoName={item.name} todoDate={item.dueDate} onDelete={onDelete}></Item>
          
      )}
    </div>
  );
};

export default ItemRender;
