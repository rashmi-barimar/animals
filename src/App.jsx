import { useState } from "react";
import "./App.css";
import { AnimalShow } from "./AnimalShow";

const getRandomAnimals = () => {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
};

const App = () => {
  const [animals, setAnimals] = useState([]);
  const renderAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimals()]);
  };
  return (
    <div className="app">
      <button onClick={handleClick}>Add animals</button>
      <div className="animal-list">{renderAnimals}</div>
    </div>
  );
};
export default App;
