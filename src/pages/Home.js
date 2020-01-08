import React, { Component } from 'react'
import Header from "../components/Header"
import Container from "../components/Container"
import Footer from "../components/Footer"

export default class Home extends Component {
    
    render() {
        const { location, children } = this.props
        return (
            <div>
                <Header />
                <Container>
                    <span>asdasdasdasdas</span>
                </Container>
                <Footer />
            </div>
        )
    }
}
