import React, { Component } from 'react'
import JobList from './JobList'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Professional Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <JobList />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
