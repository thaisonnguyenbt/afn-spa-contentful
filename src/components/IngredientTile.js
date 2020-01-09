import React, { Component } from 'react'

export const IngredientTile = (items) => {
    return (
        <div>
            {items.map(item => {
                return <li className="m-recipeDetailList__item">
                    <p>{item}</p>
                </li>
            })}
        </div>
    )
}
export default IngredientTile