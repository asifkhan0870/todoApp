import { useState } from "react";


function Item({todoName,todoDate,onDelete}) {
      
    
 
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button  type="button" className="btn btn-danger my-btn"  onClick={()=>onDelete(todoName,todoDate)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
