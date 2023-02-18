import { useEffect, useState } from "react";

const Card = ({ data, search }) => {
  const [text, setText] = useState(["No Matches!!!"]);
  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(search)
  );

  // useEffect(() => {
  //   console.log(text);
  //   setText(search);
  // }, [search]);

  return (
    <div>
      {filtered.length === 0 ? (
        <p>{text}</p>
      ) : search.length > 0 ? (
        filtered.map((item, index) => {
          const { name, img } = item;
          return (
            <div key={index}>
              <div className="image">
                <img width="100px" src={img} alt="" />
              </div>
              <div className="name">
                <h2>{name}</h2>
              </div>
            </div>
          );
        })
      ) : (
        filtered.length >= 1 &&
        data.map((item, index) => {
          const { name, img } = item;
          return (
            <div key={index}>
              <div className="image">
                <img width="100px" src={img} alt="" />
              </div>
              <div className="name">
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
