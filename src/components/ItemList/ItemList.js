import React from "react";
import Item from "../Item/Item";
import './ItemList.css'

const ItemList = ({gamesList}) => {
  return (
    <div className="itemContent">
      {gamesList.map((item) => {
        return (
          <Item
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            img={item.pictureURL}
            id={item.id}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
