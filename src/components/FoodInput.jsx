import styles from "./FoodInput.module.css";
const FoodInput = ({ handleKeyDownEvent }) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Items here"
      className={styles.input}
      onKeyDown={handleKeyDownEvent}
    />
  );
};

export default FoodInput;
