import { useState } from "react";
import { Drawer } from "antd";
import styles from "../../styles/mobileNav.module.scss";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className={styles.navbar}>
      <div
        // onClick={() => setOpen(!open)}
        onClick={showDrawer}
        className={styles.navLogo}
      >
        <img
          src="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648459974/menu_nfbixf.svg"
          alt="navbar"
        />
      </div>

      <Drawer
        className={styles.sidenav}
        title=""
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <div>Restaruants</div>
        <div>Deals</div>
        <div>My orders</div>
      </Drawer>

      {/* <div className={styles.sidenav + " " + `${open ? styles.active : ""}`}>
        <div onClick={() => setOpen(!open)} className={styles.closeIcon}>
          X
        </div>
        <div>Restaruants</div>
        <div>Deals</div>
        <div>My orders</div>
      </div> */}
    </div>
  );
};

export default MobileNav;
