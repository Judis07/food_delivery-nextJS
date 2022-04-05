import { RestaurantsData, FilterData } from "./data";

import styles from "../../styles/restaurants.scss";

const Restaurants = () => {
  return (
    <div className={styles.restaurantsContainer}>
      <Filters data={FilterData} />
      <div className={styles.sectionTitle}>Nearby restaurants</div>
      <div className={styles.flexContainer}>
        {RestaurantsData.map((info) => (
          <Card key={info.name} {...info} />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
