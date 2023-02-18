import { useEffect, useState } from "react";
import styles from "./Card.module.scss";
import { FaTimes } from "react-icons/fa";

const Card = ({ data, search }) => {
  const [text, setText] = useState(["No Matches!!!"]);
  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(search)
  );
  console.log(data);

  // useEffect(() => {
  //   console.log(text);

  // }, [search]);

  return (
    <div className={styles["card-container"]}>
      {filtered.length === 0 ? (
        <h6>{text}</h6>
      ) : search.length > 0 ? (
        filtered.map((item, index) => {
          const { name, img, statistics } = item;
          return (
            <div key={index} className={styles.card}>
              <div className={styles.image}>
                <p className={styles.stats}>
                  {statistics.map((item) => {
                    return (
                      <li>
                        {<FaTimes />}
                        {item}
                      </li>
                    );
                  })}
                </p>
                <img src={img} alt="" />
              </div>
              <div className={styles.name}>
                <h2>{name}</h2>
              </div>
            </div>
          );
        })
      ) : (
        filtered.length >= 1 &&
        data.map((item, index) => {
          const { name, img, statistics } = item;
          return (
            <div key={index} className={styles.card}>
              <div className={styles.image}>
                <p className={styles.stats}>
                  {statistics.map((x) => {
                    return <li>{x}</li>;
                  })}
                </p>
                <img src={img} alt="" />
              </div>
              <div className={styles.name}>
                <h2>{name}</h2>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Card;
