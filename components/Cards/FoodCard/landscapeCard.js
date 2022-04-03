import CustomImage from "../../CustomImage/customImage";
import styles from "../../../styles/foodCard.module.scss";

const LandscapeCard = (props) => {
  const { name, image, about, price } = props;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.landscape}>
        <div className={styles.cardImage}>
          <CustomImage src={image} alt={name} />
        </div>

        <div className={styles.cardDetail}>
          <div className={styles.name}>{name}</div>

          <div className={styles.about}>{about}</div>

          <div className={styles.price}>{price}</div>
        </div>

        <div className={styles.cardCta}>
          <div className={styles.counter}>
            <div className={styles.decrease}>-</div>
            <div className={styles.number}>1</div>
            <div className={styles.increase}>+</div>
          </div>
          <div className={styles.cart}>+ Add to cart</div>
        </div>
      </div>
    </div>
  );
};

export default LandscapeCard;
