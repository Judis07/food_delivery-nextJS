import LandscapeCard from "../Cards/FoodCard/landscapeCard";
import PortraitCard from "../Cards/FoodCard/potraitCard";
import RatingCard from "../Cards/RatingCard/ratingCard";
// import RatingCard from "../RatingCard";
// import Slider from "../Slider";
import styles from "../../styles/review.module.scss";

const Review = () => {
  return (
    <div className={styles.reviewSection}>
      <div className={styles.gridContainer}>
        <div className={styles.firstCard}>
          <RatingCard />
        </div>
        <div className={styles.secondCard}>
          <PortraitCard
            name="Roll set"
            image="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648281740/roll_set_se4jcy.png"
            about="Ea his sensibus eleifend, mollis iudicabit omittantur id mel. Et cum
            ignota euismod corpora, et saepe."
            price="$ 22.56"
          />
        </div>

        <div className={styles.bottomCard}>
          <LandscapeCard
            name="Nigiri Set"
            image="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648281052/nigiri_set_jukgnn.png"
            about="Ea his sensibus eleifend, mollis iudicabit omittantur id mel. Et cum
            ignota euismod corpora, et saepe."
            price="$ 16.80"
          />
        </div>
      </div>

      {/* <Slider /> */}
    </div>
  );
};

export default Review;
