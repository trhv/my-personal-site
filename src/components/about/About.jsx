import React, { Component } from 'react'
import AboutMe from './AboutMe';
import ExpertiesList from './ExpertiesList';

export default class About extends Component {

    render() {
        return (
            <div>
                <AboutMe />
                <ExpertiesList />
            </div>
        )
    }
}
