import React, { Component } from 'react'
import './Homepage.scss'
import Carousels from '../components/Carousels'
import Navbars from '../components/Navbars'
export default class Homepage extends Component {
    render() {
        return (
            <div>
                <Navbars />
                <Carousels/>
                <h1> this is home page</h1>
            </div>
        )
    }
}
