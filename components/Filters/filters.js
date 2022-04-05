import { useState } from "react";
import styles from "../../styles/filters.module.scss";

const Filters = ({ data }) => {
  const [filterData, setFilterData] = useState(data);

  const handleClick = (value) => {
    const newValues = filterData.map((data) => {
      if (data.name === value) {
        return {
          ...data,
          isSelected: !data.isSelected,
        };
      } else {
        return {
          ...data,
        };
      }
    });

    setFilterData(newValues);
  };

  return (
    <div className={styles.filtersContainer}>
      {filterData.map((info) => {
        return (
          <div
            key={info.name}
            onClick={() => handleClick(info.name)}
            className={
              styles.filter +
              " " +
              `${info.isSelected ? styles.isSelected : ""}`
            }
          >
            <div className={styles.filterImage}>
              <img src={info.icon} alt="" />
            </div>
            <div className={styles.filterName}>{info.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Filters;
