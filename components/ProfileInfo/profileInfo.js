import { useState } from "react";
// import { getUserEmail } from "../../config/utils";
import styles from "../../styles/profileInfo.module.scss";
const ProfileInfo = (props) => {
  const [open, setOpen] = useState(false);

  const logout = () => {
    // localStorage.removeItem("user");
    // props.history.push("/login");
  };

  return (
    <div onClick={() => setOpen(!open)} className={styles.profileInfoContainer}>
      <div className={styles.profile}>
        <img
          src="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648542208/default_m45zxb.png"
          alt="My Profile"
        />
      </div>

      <div
        //   className={open ? "info active" : "info"}

        className={styles.info + " " + `${open ? styles.active : " "}`}
      >
        {/* <div>{getUserEmail()}</div> */}
        <div onClick={logout}>Logout</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
