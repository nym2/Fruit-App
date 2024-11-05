import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [fruits, setFruits] = useState([]);
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/fruits')
      .then((response) => response.json())
      .then((data) => setFruits(data));
  }, []);

  // Function to handle form submission
  const handleAddFruit = (e) => {
    e.preventDefault();
    const newFruit = { name, color, price: parseFloat(price) };

    fetch('http://localhost:3001/fruits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFruit),
    })
      .then((response) => response.json())
      .then((data) => setFruits([...fruits, data]));

    setName('');
    setColor('');
    setPrice('');
  };

  // Function to handle deleting a fruit
  const handleDelete = (id) => {
    fetch(`http://localhost:3001/fruits/${id}`, {
      method: 'DELETE',
    })
      .then(() => setFruits(fruits.filter(fruit => fruit.id !== id)));
  };

  return (
    <div>
      <h1>Fruit App</h1>
      <div className="fruit-list">
        {fruits.map((fruit) => (
          <div key={fruit.id} className="fruit">
            <h2>{fruit.name}</h2>
            <p>Color: {fruit.color}</p>
            <p>Price: ${fruit.price}</p>
            <button onClick={() => handleDelete(fruit.id)}>Delete</button>
          </div>
        ))}
      </div>

      {/* Add Fruit Form */}
      <form onSubmit={handleAddFruit}>
        <h2>Add New Fruit</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Fruit</button>
      </form>
    </div>
  );
}

export default App;
