import React from "react";
import Item from "./Item";

function List(props) {
  return (
    <div className="list">
      {props.items.map((item) => (
        <Item
          key={item.id} //añadir key especifica para identificar cada elemento
          id={item.id}
          title={item.title}
          image={item.image}
          rating={item.rating}
        />
      ))}
    </div>
  );
}

export default List;
