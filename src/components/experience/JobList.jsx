import React, { Component } from 'react';
import data from '../../data.json';
import Job from './Job';
export default class JobList extends Component {

    getJobs = () => {
        let jobs = data.experience;
        return jobs.map((job, index) => {
            return (
                <Job color={index+1} companySite={job.companySite} title={job.title} company={job.company} years={job.years} description={job.description}></Job>
            );
        })
    };

    render() {
        return (
            <div className="timeline-centered">
                {this.getJobs()}
            </div>
        );
    }
}
