import React, { useRef } from "react";
export default function Input({getItem}){
    const inputRef=useRef();
    // console.log(inputRef);
    function inputHandler(){
      let value=inputRef.current.value.trim() 
      if(value==''){
        alert("empty value")
      }  
     getItem(value );
     inputRef.current.value=""
        
    }
    
    return(
           <div className="input-group mb-3">
        <input ref={inputRef}
          type="text"
          className="form-control"
          placeholder="Todo Add.."
          aria-label="Recipient's  username "
          aria-describedby="basic-addon2"
        />
        <button onClick={inputHandler} className="input-group-text" id="basic-addon2">
          Add
        </button>
        <hr />
      </div>
    )
}