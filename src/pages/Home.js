import React, { Component } from 'react'
import { AfnContext } from "../Context";
import Header from "../components/Header"
import Container from "../components/Container"
import Footer from "../components/Footer"

export default class Home extends Component {
    static contextType = AfnContext;
    render() {
        let recipe = this.context;
        return (
            <div>
                <Header />
                <Container>
                    <a href="/recipes/123">
                        <img src={require('../images/AFN_snow_fungus_main_image1.jpg')} alt={recipe.title}/>
                    </a>
                </Container>
                <Footer />
            </div>
        )
    }
}
