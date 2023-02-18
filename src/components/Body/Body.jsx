import { useState } from "react";
import { data } from "../../utils/data";
import Card from "./Card";
import styles from "./Body.module.scss";

const Body = () => {
  const [search, setSearch] = useState("");
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  const clickHandler = () => {
    setSearch("");
  };
  return (
    <div className={styles["main-container"]}>
      <div className="form-section">
        <input
          placeholder="Search Player..."
          type="text"
          value={search}
          onChange={searchHandler}
        />
      </div>
      <div className={styles.container}>
        <Card data={data} search={search} />
      </div>
    </div>
  );
};

export default Body;
