import { useEffect, useState } from "react";

const Card = ({ data, search }) => {
  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(search)
  );

  return (
    <div>
      {filtered.length > 0
        ? filtered.map((item, index) => {
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
        : data.map((item, index) => {
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
          })}
    </div>
  );
};

export default Card;
