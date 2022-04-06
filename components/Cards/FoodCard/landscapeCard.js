import { Card } from "antd";
import Image from "next/image";
import styles from "../../../styles/foodCard.module.scss";

const LandscapeCard = (props) => {
  const { name, image, about, price } = props;

  return (
    <Card className={styles.cardContainer}>
      {/* <div className={styles.cardContainer}> */}
      <div className={styles.landscape}>
        <div className={styles.cardImage}>
          <Image
            src={image}
            alt={name}
            width={150}
            height={150}
            layout="responsive"
          />
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
      {/* </div> */}
    </Card>
  );
};

export default LandscapeCard;
