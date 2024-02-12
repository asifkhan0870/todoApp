// import ItemRender from "./ItemRender";

let Item = ({ todoItems }) => {
  return (
    <div >
      {todoItems.map((item) => {
        // console.log("first");
        <div className="container">
          <div className="row">
            <div className="col-4">{item.name}</div>
            <div className="col-4">{item.dueDate}</div>
            <div className="col-2">
              <button type="button" className="btn btn-danger my-btn">
                Delete
              </button>
            </div>
          </div>
        </div>;
      })}
    </div>
  );
};

export default Item;
