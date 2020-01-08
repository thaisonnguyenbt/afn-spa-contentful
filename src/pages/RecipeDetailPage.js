
import React, { Component } from 'react'
import { AfnContext } from "../Context";
import Header from "../components/Header"
import Container from "../components/Container"
import Footer from "../components/Footer"
import RecipeDetail from "../components/RecipeDetails"
    
export default class RecipeDetailPage extends Component {
    static contextType = AfnContext;
    render() {
        let recipe = this.context;
        return (
            <div>
                <Header />
                <Container>
                    <RecipeDetail />
                </Container>
                <Footer />
            </div>
        )
    }
}
    