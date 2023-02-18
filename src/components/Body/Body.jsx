import { useState } from "react";
import { data } from "../../utils/data";
import Card from "./Card";

const Body = () => {
  const [search, setSearch] = useState("");
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <input type="text" value={search} onChange={searchHandler} />
      <Card data={data} search={search} />
    </div>
  );
};

export default Body;
