import styles from "../../../styles/foodCard.module.scss";

const PortraitCard = (props) => {
  const { name, image, about, price } = props;
  return (
    <div className={styles.cardContainer}>
      <div>
        <div className={styles.cardImage}>
          <img src={image} alt={name} />
        </div>

        <div className={styles.cardDetail}>
          <div className={styles.name}>{name}</div>

          <div className={styles.about}>{about}</div>

          <div className={styles.cardFooter}>
            <div className={styles.price}>{price}</div>
            <div className={styles.cardCta}>+</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortraitCard;