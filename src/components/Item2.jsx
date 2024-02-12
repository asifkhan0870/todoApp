function Item2() {

    let todoName='Go to College';
    let todoDate='13/02/2024'
  return (
    <div>
      <div class="container text-center">
        <div class="row">
          <div class="col-4">
            {todoName}
          </div>
          <div class="col-4">
            {todoDate}
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item2;
