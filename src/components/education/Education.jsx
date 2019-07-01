import React, { Component } from 'react'
import data from '../../data.json';

let text="<b>B.Sc Software Engineering</b>, ORT Braude College in Karmiel, Holder of a Diploma of Electrical Engineering - Electronics, School of Technology Rodman Kiryat Yam .";

export default class Education extends Component {
  
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="education">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Education</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className={`timeline-icon color-1`}>
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <p><b>B.Sc Software Engineering</b>, ORT Braude College in Karmiel, Holder of a Diploma of Electrical Engineering - Electronics, School of Technology Rodman Kiryat Yam .</p>
                        <p>{data.education}</p>
                        <p>{text}</p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
