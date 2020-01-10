
import React, { Component } from 'react'
import { AfnContext } from "../Context";
import Header from "../components/Header"
import Container from "../components/Container"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import IngredientList from "../components/recipe-details/IngredientList"
import RecipeOverview from "../components/recipe-details/RecipeOverview"
import RecipeInstructions from "../components/recipe-details/RecipeInstructions"
import NextPrevButtons from "../components/recipe-details/NextPrevButtons"
import Tags from "../components/recipe-details/Tags"
    
export default class RecipeDetailPage extends Component {
    static contextType = AfnContext;
    render() {
        let recipe = this.context;
        return (
            <div>
                <Header />
                <Container>
                    <div className="container responsivegrid aem-GridColumn--offset--medium--0 aem-GridColumn--small--none aem-GridColumn--medium--none aem-GridColumn--default--none aem-GridColumn--medium--12 aem-GridColumn aem-GridColumn--small--12 aem-GridColumn--offset--small--0 aem-GridColumn--default--10 aem-GridColumn--offset--default--1">
                        <div id="details-page-container" className="cmp-container">
                            <div className="aem-Grid aem-Grid--default--10 aem-Grid--medium--12 aem-Grid--small--12 ">
                                <Navigation recipe={recipe} />
                                <IngredientList numOfPeopleToServe={recipe.numOfPeopleToServe} ingredients={recipe.ingredients} />
                                <RecipeOverview recipe={recipe} />
                                <RecipeInstructions recipe={recipe} />
                                <NextPrevButtons />
                                <Tags /> 
                            </div>
                        </div>
                    </div>
                </Container>
                <Footer />
            </div>
        )
    }
}
    