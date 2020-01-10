import React, { Component } from 'react'
import { AfnContext } from "../../Context";
import IngredientList from "./IngredientList"
import Navigation from "../Navigation"
import RecipeOverview from "./RecipeOverview"
import RecipeInstruction from "./RecipeInstructions"
import NextPrevButton from "./NextPrevButtons"
import Tags from "./Tags"

export default class RecipeDetails extends Component {
    static contextType = AfnContext;
    render() {
        let recipe = this.context;
        console.log(recipe.ingredients)

        return (
            <div className="container responsivegrid aem-GridColumn--offset--medium--0 aem-GridColumn--small--none aem-GridColumn--medium--none aem-GridColumn--default--none aem-GridColumn--medium--12 aem-GridColumn aem-GridColumn--small--12 aem-GridColumn--offset--small--0 aem-GridColumn--default--10 aem-GridColumn--offset--default--1">
                <div id="details-page-container" className="cmp-container">
                    <div className="aem-Grid aem-Grid--default--10 aem-Grid--medium--12 aem-Grid--small--12 ">
                        <Navigation recipe={recipe} />
                        <IngredientList numOfPeopleToServe={recipe.numOfPeopleToServe} ingredients={recipe.ingredients} />
                        <RecipeOverview recipe={recipe} />
                        <RecipeInstruction recipe={recipe} />
                        <NextPrevButton />
                        <Tags /> 
                    </div>
                </div>
            </div>
        )
    }
}
