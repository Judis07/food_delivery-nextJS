import CustomImage from "../../CustomImage/customImage";
import styles from "../../../styles/ratingCard.module.scss";

const RatingCard = () => {
  return (
    <div className={styles.ratingCardContainer}>
      <div className={styles.head}>
        <div className={styles.section}>
          <div className={styles.overallTxt}>Overall rating</div>

          <div className={styles.votes}>
            <span className={styles.ratingTxt}>4.2</span>
            <span>
              <img
                src="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648283850/4-stars_aiqewi.svg"
                alt="4 starts"
              />
            </span>

            <span className={styles.voteTxt}>3 votes</span>
          </div>
        </div>
        <div className={styles.reviewBtn}>Leave review</div>
      </div>

      <div className={styles.sort}>
        <div>
          Sort by: <span> Newest first</span>
        </div>
      </div>

      <div className={styles.userReviews}>
        <div className={styles.review}>
          <div className={styles.userImage}>
            <CustomImage
              src="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648284883/savannah_hmboli.png"
              alt=""
            />
          </div>

          <div className={styles.userDetail}>
            <div className={styles.name}>Savannah Miles</div>

            <div className={styles.rating}>
              <span>
                <img
                  src="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648283850/4-stars_aiqewi.svg"
                  alt="4 starts"
                />
              </span>

              <span className={styles.days}>10 days ago</span>
            </div>
            <div className={styles.comment}>
              Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei
              doming aperiam delicata est.
            </div>

            <div className={styles.likeAction}>
              <img
                src="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648285852/like-dislike_zq78pi.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className={styles.review}>
          <div className={styles.userImage}>
            <CustomImage
              src="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648285496/jacob_pxo4qn.png"
              alt=""
            />
          </div>

          <div className={styles.userDetail}>
            <div className={styles.name}>Jacob Jones</div>
            <div className={styles.rating}>
              <span>
                <img
                  src="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648283850/4-stars_aiqewi.svg"
                  alt="4 starts"
                />
              </span>

              <span className={styles.days}>1 day ago</span>
            </div>
            <div className={styles.comment}>
              Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei
              doming aperiam delicata est.
            </div>

            <div className={styles.likeAction}>
              <img
                src="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648285852/like-dislike_zq78pi.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
