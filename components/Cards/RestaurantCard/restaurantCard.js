import { Card } from "antd";
import Image from "next/image";
import Cart from "../../Cart/cart";
import styles from "../../../styles/restaurants.module.scss";

const RestaurantCard = (props) => {
  const { image, name, distance, minPrice, tags, inCart, isFeatured } = props;
  return (
    <Card
      className={styles.restaurantCard}
      // cover={<img alt="" src={image} />}

      cover={
        <Image
          alt=""
          src={image}
          width={50}
          height={25}
          layout="responsive"
          // priority={true}
        />
      }
    >
      {isFeatured && <div className={styles.featured}>Featured</div>}

      {/* <div className={styles.cardImage}><img src={image} alt="" /></div> */}

      <div className={styles.cardDetail}>
        <div className={styles.flexContainer}>
          <div className={styles.cardName}>{name}</div>

          <Cart count={inCart} />
        </div>

        <div className={styles.cardInfo}>
          <div className={styles.timeIcon}>
            <img
              src="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648188899/clock_qzn6ck.svg"
              alt=""
            />
          </div>
          <div className={styles.distance}>{distance}</div>
          <div className={styles.circle}></div>
          <div className={styles.price}>{minPrice}</div>
        </div>

        <div className={styles.cardTags}>
          {tags.map((tag) => (
            <div key={tag.id} className={styles.cardTag}>
              <div className={styles.tagIcon}>
                <img src={tag.icon} alt="" />
              </div>
              <div>{tag.name}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;
