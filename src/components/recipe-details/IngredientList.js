import React from 'react'

export const IngredientList = ({ numOfPeopleToServe, ingredients }) => {
    return (
        <div className="recipeingredients aem-GridColumn--offset--medium--0 aem-GridColumn--small--none aem-GridColumn--medium--none aem-GridColumn--default--none aem-GridColumn--medium--12 aem-GridColumn aem-GridColumn--small--12 aem-GridColumn--offset--small--0 aem-GridColumn--default--3 aem-GridColumn--offset--default--0">
            <div className="col o-recipe__right desktop">
                <div className="m-sticky-container -sticky -active" data-sticky="sidebar">
                    <span className="col m-recipeDetailList">
                        <div className="cmp-title">
                            <h3 className="cmp-title__text">Ingredients</h3>
                        </div>
                        <ul>
                            <li className="m-recipeDetailList__item">
                                <strong>Serves {numOfPeopleToServe} people</strong>
                            </li>
                            
                            {ingredients && ingredients.map(item => {
                                return <li className="m-recipeDetailList__item">
                                    <p>{item}</p>
                                </li>
                            })} 
                        </ul>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default IngredientList