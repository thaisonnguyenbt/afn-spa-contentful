import React, { Component } from 'react'
import { AfnContext } from "../Context";
import Header from "../components/Header"
import Container from "../components/Container"
import Footer from "../components/Footer"

export default class Home extends Component {
    static contextType = AfnContext;
    render() {
        let recipe = this.context;
        console.log(recipe.title)
        return (
            <div>
                <Header />
                <Container>
                    <span>{recipe.title}</span>
                </Container>
                <Footer />
            </div>
        )
    }
}
