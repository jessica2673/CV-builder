import React, { Component } from 'react';

class Work extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            company: 'Company',
            position: 'Web Developer',
            date: '20XX - Present',
            description: 'Coded lol',
        }
    }

    render() {
        const { company, position, date, description } = this.state;
        return (
            <div>
                <h3>{company}</h3>
                <p>{position}</p>
                <p>{date}</p>
                <p>{description}</p>
                <button onClick={this.update}>Edit</button>
                <button onClick={this.add}>Add</button>
            </div>
        );
    }
}

export default Work;