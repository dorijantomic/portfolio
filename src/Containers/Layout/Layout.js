import React, { Component } from 'react'
import Navigation from '../../Components/Navigation/Navigation'
import { HashRouter, Route } from 'react-router-dom'

export default class Layout extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <Route path='/' component={Navigation}/>
                </HashRouter>
           
            </div>
        )
    }
}
