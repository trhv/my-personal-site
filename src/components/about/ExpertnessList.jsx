import React, { Component } from 'react'
import Expertise from './Expertise';
import data from '../../data.json';


export default class About extends Component {

    getExpertness = () => {
        let expertness = data.expertness;
        return expertness.map((expertise, index) => {
            return (
                <Expertise name={expertise.name} description={expertise.description} icon={expertise.icon} color={index+1}></Expertise>
            )
        });
    }

    render() {
        return (

            <section className="colorlib-about">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">What I do?</span>
                            <h2 className="colorlib-heading">Here are some of my expertise</h2>
                        </div>
                    </div>
                    <div className="row row-pt-md">
                        {this.getExpertness()}
                    </div>
                </div>
            </section>
        );
    }
}