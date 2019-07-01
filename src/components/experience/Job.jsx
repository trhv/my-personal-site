import React, { Component } from 'react'
import './Job.css';
export default class Job extends Component {

    render() {
        return (
            <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                <div className="timeline-entry-inner">
                    <div className={`timeline-icon color-${this.props.color}`}>
                        <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                        <h2><a href={this.props.companySite} target="_blank">{`${this.props.title} at ${this.props.company}`}</a> <span>{this.props.years}</span></h2>
                        <p >{this.props.description}</p>
                    </div>
                </div>
            </article>

        );
    }
}
