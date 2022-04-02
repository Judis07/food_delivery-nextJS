import { useState } from "react";

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
    <div className="input-container">
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
        <div onClick={changeShowPass} className="input-icon">
          <img src={icon} alt="" />
        </div>
      )}
    </div>
  );
};

export default Input;
