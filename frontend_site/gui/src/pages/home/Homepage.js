import React, { Component } from 'react'
import './Homepage.scss'
import Carousels from '../../components/carousels/Carousels'
import Navbars from '../../components/navbar_home/Navbars'
export default class Homepage extends Component {
    render() {
        return (
            <div style={{height: '2000px'}}>
                <Navbars />
                <Carousels/>    
                <h1> this is home page</h1> 
            </div>
        )
    }
}
