import React, { Component } from 'react'
import Experties from './Experties';
import data from '../../data.json';


export default class About extends Component {

    getExperties = () => {
        let experties = data.experties;
        return experties.map((expertie, index) => {
            return (
                <Experties name={expertie.name} description={expertie.description} icon={expertie.icon} color={index+1}></Experties>
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
                        {this.getExperties()}
                    </div>
                </div>
            </section>
        );
    }
}