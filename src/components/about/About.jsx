import React, { Component } from 'react'
import AboutMe from './AboutMe';
import ExpertnessList from './ExpertnessList';

export default class About extends Component {

    render() {
        return (
            <div>
                <AboutMe />
                <ExpertnessList />
            </div>
        )
    }
}
