import React from 'react';

const DrinkIngredients = ({ name, amount, unit }) => {
    return (
        <main className="ingredient-content">
            <div className="ingredient-content-item">
                { amount } { unit } { name }
            </div>
        </main>
    );
}

export default DrinkIngredients;