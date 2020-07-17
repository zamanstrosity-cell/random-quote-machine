import React, { Component } from 'react'
import { getColor } from '../general/colors'
import QuoteCard from './QuoteCard'

export class Body extends Component {
    state = {
        myStyle: {
            backgroundColor: getColor(),
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }
    
    }
    newBg = () => {
        this.setState( {
            myStyle:  {
                ...this.state.myStyle,
                backgroundColor: getColor()
            }
        })
    }

    render() {
        return (
            <div className="container" style={ this.state.myStyle }>
                <QuoteCard background={this.state.myStyle.backgroundColor} newBg={this.newBg}/>
            </div>
        )
    }
}

export default Body