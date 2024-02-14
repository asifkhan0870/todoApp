import { useEffect, useState } from "react";

function InputData({ onAddItem }) {
  const [currName, setName] = useState();
  const [currDate, setDate] = useState();

  const takingName = (event) => {
      
    setName(event.target.value);
  };

  const takingDate = (event) => {
       
    setDate(event.target.value);
  };

  const sentNewValue=()=>{
        
    onAddItem(currName,currDate);
    setName("");
    setDate("");
  }

  return (
    <div>
      <div class="container text-center">
        <div class="row">
          <div class="col-4">
            <input value={currName}
              type="text"
              className="text"
              placeholder="Enter Todo Name"
              onChange={takingName}
            />
          </div>
          <div class="col-4">
            <input value={currDate} type="date" onChange={takingDate} />
          </div>
          <div class="col-2">
            <button
              type="button"
              class="btn btn-success my-btn"
              onClick={sentNewValue}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputData;
