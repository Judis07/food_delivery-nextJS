import { Card } from "antd";
import Image from "next/image";
import styles from "../../../styles/foodCard.module.scss";

const PortraitCard = (props) => {
  const { name, image, about, price } = props;
  return (
    <Card className={styles.cardContainer}>
      <div>
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

          <div className={styles.cardFooter}>
            <div className={styles.price}>{price}</div>
            <div className={styles.cardCta}>+</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PortraitCard;
