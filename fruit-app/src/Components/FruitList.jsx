import React from 'react';
import FruitItem from './FruitItem';

function FruitList({ fruits, deleteFruit }) {
    return (
        <div>
            <h2>Fruit List</h2>
            {fruits.map(fruit => (
                <FruitItem key={fruit.id} fruit={fruit} deleteFruit={deleteFruit} />
            ))}
        </div>
    );
}

export default FruitList;
