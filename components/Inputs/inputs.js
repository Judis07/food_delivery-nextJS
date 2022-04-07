import { useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

import styles from "../../styles/inputs.module.scss";

const Input = (props) => {
  const {
    type,
    label,
    placeholder,
    getValue,
    changeShowPass,
    showPass,
    isRequired,
    icon,
    variant,
  } = props;

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    getValue(event.target.name, event.target.value);

    setValue(event.target.value);
  };
  return (
    <div className={styles[variant]}>
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

        {placeholder === "Search" ? (
          <div className={styles.inputIcon}>
            <img src={icon} alt="" />
          </div>
        ) : (
          icon &&
          (showPass ? (
            <div onClick={changeShowPass} className={styles.inputIcon}>
              <EyeOutlined />
            </div>
          ) : (
            <div onClick={changeShowPass} className={styles.inputIcon}>
              <EyeInvisibleOutlined />
            </div>
          ))
        )}

        {/* {icon && (
          <div onClick={changeShowPass} className={styles.inputIcon}>
            <img src={icon} alt="" />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Input;
