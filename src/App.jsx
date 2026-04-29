import React, { useState } from "react";
import List from "./List";
import Input from "./Input";

function App() {
  const [items, setitems] = useState([]);
  function getItem(data){
    setitems([...items,data])
    
  }

  function removeItem(index){
    const newArray=items.filter(
      (data,i)=>{
        if(i!=index) return data
      }
    )
    // console.log(index);
    
    setitems(newArray)
  }
  return (
    <div className="w-50 mx-auto shadow p-4 border">
   <Input getItem={getItem}/>
   <hr />
      <List removeItem={removeItem} items={items}/>
        </div>
  );
}

export default App;
