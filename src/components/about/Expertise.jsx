import React, { Component } from 'react'


export default class About extends Component {
    render() {
        return (
            <div>
                <div className="col-md-4 text-center animate-box">
                    <div className={`services color-${this.props.color}`}>
                        <span className="icon">
                            <i className={this.props.icon} />
                        </span>
                        <div className="desc">
                            <h3>{this.props.name}</h3>
                            <p>{this.props.description} </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}