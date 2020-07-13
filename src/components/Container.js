import React, { Component } from 'react'

export class Container extends Component {
    render() {
        return (
            <div id="quote-box">
                <div id="text"></div>
                <div id="author"></div>
                <div id="new-quote"></div>
                <div id="tweet-quote"></div>
            </div>
        )
    }
}

export default Container
