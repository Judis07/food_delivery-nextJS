import CartIcon from "./cart.svg";
import Input from "../Inputs/inputs";

import styles from "../../styles/layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <header className={styles.header}>
        <div className={styles.innerContainer}>
          <div className={styles.flexContainer}>
            <div className={styles.flexContainer}>
              <div className={styles.logo}>
                <img
                  src="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648211535/logo_twd2km.svg"
                  alt="Food Delivery"
                />
              </div>

              <div className={styles.searchBar}>
                <Input
                  type="text"
                  label=""
                  placeholder="Search"
                  icon="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648188073/search_h2cotd.png"
                  getValue={() => {}}
                  isRequired={true}
                  variant="variant2"
                />
              </div>
            </div>

            <nav className={styles.navigation + " " + styles.flexContainer}>
              <div className={styles.link}>Restaurants</div>
              <div className={styles.link}>Deals</div>
              <div className={styles.link}>My orders</div>
              <div className={styles.cart}>
                <div className={styles.items}>4</div>
                {/* <img src={CartIcon} alt="Cart" /> */}
              </div>

              {/* <ProfileInfo /> */}

              {/* <MobileNav /> */}
            </nav>
          </div>
        </div>
      </header>
      <div className={styles.innerContainer}>{children}</div>
    </div>
  );
};

export default Layout;
