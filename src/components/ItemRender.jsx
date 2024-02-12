let ItemRender = ({todoName,todoDate}) => {
    return (
      <div className="container">

        <div className="row">
          <div className="col-4">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger my-btn">
              Delete
            </button>
          </div>
        </div>
      </div>
    );

//   return <h2>This is h2 tag from the render</h2>;
};

export default ItemRender;
