function InputData() {
  return (
    <div>
      <div class="container text-center">
        
        <div class="row">
          <div class="col-4">
            <input type="text" className="text" placeholder="Enter Todo Name"/>
          </div>
          <div class="col-4">
             <input type="date" />
          </div>
          <div class="col-2">
          <button type="button" class="btn btn-success my-btn">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputData;
