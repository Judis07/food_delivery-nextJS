import styles from "../../styles/cart.module.scss";

const Cart = ({ count }) => {
  return (
    <div className={styles.cartContainer}>
      {count > 0 ? (
        <div className={styles.filledCart}>
          <img
            src="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648462415/shopping_bag_w0zvlb.svg"
            alt=""
          />

          <div className={styles.items}>{count}</div>
        </div>
      ) : (
        <div className={styles.emptyCart}>
          <img
            src="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648462296/empty-cart_fzczcb.svg"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
