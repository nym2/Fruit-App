import React, { useState } from 'react';

function FruitForm({ addFruit }) {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFruit = { id: Date.now(), name };
        addFruit(newFruit);
        setName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter fruit name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Add Fruit</button>
        </form>
    );
}

export default FruitForm;
