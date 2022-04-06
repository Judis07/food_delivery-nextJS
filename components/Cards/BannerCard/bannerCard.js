import Image from "next/image";
import styles from "../../../styles/banner.module.scss";

const BannerCard = (props) => {
  const { title, discount, target, image, bgColor, color } = props;
  return (
    <div style={{ backgroundColor: bgColor }} className={styles.discountCard}>
      <div className={styles.cardImage}>
        {/* <img src={image} alt={target} loading="lazy" /> */}

        <Image
          src={image}
          alt={target}
          width={300}
          height={200}
          layout="responsive"
        />
      </div>

      <div className={styles.details}>
        <div className={styles.title}>{title}</div>
        <div className={styles.discount} style={{ color: color }}>
          {discount}% Off
        </div>

        <div className={styles.target}>{target}</div>
      </div>
    </div>
  );
};

export default BannerCard;
