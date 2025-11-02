import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";
import "./AnimalShow.css";
import { useState } from "react";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};
export const AnimalShow = ({ type }) => {
  const [click, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(click + 1);
  };
  return (
    <div onClick={handleClick} className="animal-show">
      <img className="animal" src={svgMap[type]} alt="animal" />
      <img
        style={{ width: 10 + 10 * click + "px" }}
        className="heart"
        src={heart}
        alt="heart"
      />
    </div>
  );
};
