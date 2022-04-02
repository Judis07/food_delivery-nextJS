import styles from "../../styles/checkbox.module.scss";

const Checkbox = ({ label }) => {
  return (
    <label className={styles.checkboxContainer}>
      <span className={styles.labelTxt}>{label}</span>
      <input type="checkbox" />
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default Checkbox;
