import { useState } from "react";
import { data } from "./data";
import { Carousel } from "antd";
import styles from "../../styles/slider.module.scss";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    // background: "#364d79",
  };

  return (
    <div className={styles.containerSlider}>
      <Carousel>
        {data.map((obj, index) => {
          return (
            <div key={obj.id}>
              <div className="title">{obj.title}</div>

              <div className="subtitle">{obj.subTitle}</div>
            </div>
          );
        })}
      </Carousel>
      {/* {data.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideIndex === index + 1
                ? styles.slide + " " + styles.activeAnim
                : styles.slide
            }
          >
            <div className={styles.title}>{obj.title}</div>

            <div className={styles.subtitle}>{obj.subTitle}</div>
          </div>
        );
      })} */}

      {/* <div className={styles.containerDots}>
        {data.map((_, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={
              slideIndex === index + 1
                ? styles.dot + " " + styles.active
                : styles.dot
            }
          ></div>
        ))}
      </div> */}
    </div>
  );
}
