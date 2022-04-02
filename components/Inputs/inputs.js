import { useState } from "react";

import styles from "../../styles/inputs.module.scss";

const Input = (props) => {
  const {
    type,
    label,
    placeholder,
    getValue,
    changeShowPass,
    isRequired,
    icon,
  } = props;

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    getValue(event.target.name, event.target.value);

    setValue(event.target.value);
  };
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={label}>{label}</label>

      <input
        type={type}
        name={label}
        value={value}
        onChange={handleChange}
        required={isRequired}
        placeholder={placeholder}
      />

      {icon && (
        <div onClick={changeShowPass} className={styles.inputIcon}>
          <img src={icon} alt="" />
        </div>
      )}
    </div>
  );
};

export default Input;
