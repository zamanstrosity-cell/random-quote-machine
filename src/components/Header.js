import React, { Component } from 'react'
import GithubCorner from 'react-github-corner';

export class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header className="header">
                <GithubCorner href="https://github.com/zamanstrosity-cell" target="_blank" title="Visit Developer" />
                </header>
            </React.Fragment>
        )
    }
}

export default Header
