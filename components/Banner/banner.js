import BannerCard from "../Cards/BannerCard/bannerCard";

import styles from "../../styles/banner.module.scss";
const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <BannerCard
        title="All deserts"
        discount="20"
        target="Deserty"
        image="https://res.cloudinary.com/dyvivj6d5/image/upload/v1649336522/deserty_v8fiag_bysib4.webp"
        color="#4E60FF"
        bgColor="#F3F4FF"
      />
      <BannerCard
        title="Big Burgers"
        discount="50"
        target="Fooddies"
        image="https://res.cloudinary.com/dyvivj6d5/image/upload/v1649336546/fooddies_bemtx8_ittfuy.webp"
        color="#FD6D22"
        bgColor="#FFF3ED"
      />
    </div>
  );
};

export default Banner;
