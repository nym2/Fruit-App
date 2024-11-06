import React, { useState, useEffect } from 'react';
import './App.css';
import FruitList from './Components/FruitList';
import FruitForm from './Components/FruitForm';

function App() {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/fruits')
      .then(response => response.json())
      .then(data => setFruits(data));
  }, []);

  const addFruit = (newFruit) => {
    setFruits([...fruits, newFruit]);
  };

  const deleteFruit = (id) => {
    setFruits(fruits.filter(fruit => fruit.id !== id));
  };

  return (
    <div>
      <h1>Fruit App</h1>
      <FruitForm addFruit={addFruit} />
      <FruitList fruits={fruits} deleteFruit={deleteFruit} />
    </div>
  );
}

export default App;
