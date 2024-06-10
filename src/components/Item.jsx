import styles from "./item.module.css";
const Item = ({fooditem, bought, handleBuyButtonClick}) => {
  return (
    <>
      <li className={`${styles["kg-item"]} list-group-item ${bought && 'active'}`}>
        {fooditem}
        <button
          className={`${styles.button} btn btn-info`}
          onClick={handleBuyButtonClick}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
