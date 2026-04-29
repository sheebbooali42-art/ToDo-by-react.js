import React from "react";

export default function List({ items,removeItem }) {
//   console.log(items);    

  return (
    <ul className="list-group">
      {items.map((data, index) => {
        return (
          <li key={index} className="list-group-item d-flex justify-content-between align-item-center">
            {data}
            <button onClick={()=>removeItem(index)} className="badge text-bg-primary rounded-pill">Remove</button >
          </li>
        )
      })}
    </ul>
  )
}
