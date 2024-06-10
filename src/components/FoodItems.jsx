import { useState } from "react";
import Item from "./Item";
let Fooditems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onByButton = (event, item) => {
    let newActiveItem = [...activeItems, item];
    setActiveItems(newActiveItem)
  }
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          fooditem={item}
          bought = {activeItems.includes(item)}
          handleBuyButtonClick={(event) => onByButton(event, item)}
        ></Item>
      ))}
    </ul>
  );
};

export default Fooditems;
