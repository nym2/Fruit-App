import React from 'react';

function FruitItem({ fruit, deleteFruit }) {
    return (
        <div>
            <p>{fruit.name}</p>
            <button onClick={() => deleteFruit(fruit.id)}>Delete</button>
        </div>
    );
}

export default FruitItem;
