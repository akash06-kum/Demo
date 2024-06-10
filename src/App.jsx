import { KgButton } from "./KgButton";
import Hello from "./Hello";
import Fooditems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import { Children, useState } from "react";
import Container from "./components/Container";
import "./App.css";
import FoodInput from "./components/FoodInput";
function App() {
  let [fooditems, setFoodItems] = useState([]);

  const handleKeyDownEvent = (event) => {
    if(event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = ""
      let newItem = [...fooditems, newFoodItem]
      setFoodItems(newItem)
      console.log(newFoodItem)
    }
  };

  return (
    <>
      <Container>
        <h1 className="heading">Food Items</h1>
        <FoodInput handleKeyDownEvent={handleKeyDownEvent} />
        <ErrorMessage items={fooditems}></ErrorMessage>
        <Fooditems items={fooditems}></Fooditems>
      </Container>
    </>
  );
}

export default App;
