function Item1() {

    let todoName='Buy Milk';
    let todoDate='04/10/2023'
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
            <button type="button" class="btn btn-danger my-btn">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item1;
