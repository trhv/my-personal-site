import React, { Component } from 'react'
import data from '../../data.json'

export default class About extends Component {

    render() {
        return (
            <section className="colorlib-about" data-section="about">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                <div className="col-md-12">
                                    <div className="about-desc">
                                        <span className="heading-meta">About Me</span>
                                        <h2 className="colorlib-heading">Who Am I?</h2>
                                        <p>{data.aboutMe}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        );
    }
}


