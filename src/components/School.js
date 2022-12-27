import React, { Component } from 'react';

class School extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'University of School',
            date: '20XX - Present',
            study: 'Computer Science',
            description: 'Lorem ipsum',
        }
    }

    render() {
        const { name, date, study, description } = this.state;
        return (
            <div>
                <h3>{name}</h3>
                <p>{date}</p>
                <p>{study}</p>
                <p>{description}</p>
                <button onClick={this.update}>Edit</button>
                <button onClick={this.add}>Add</button>
            </div>
        );
    }
}

export default School;