import React, { Component } from 'react';

class Work extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            company: 'Company',
            position: 'Web Developer',
            date: '20XX - Present',
            description: 'Coded lol',
            editable: 0 //represents view mode and 1 represents edit mode
        }
    }

    edit = () => {
        this.setState({editable: 1});
    }

    handleChange = (e) => {
        this.setState ({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({editable: 0});
    }

    render() {
        const { company, position, date, description } = this.state;

        if(this.state.editable === 0) {
            return (
                <div>
                    <h3>{company}</h3>
                    <p>{position}</p>
                    <p>{date}</p>
                    <p>{description}</p>
                    <button onClick={this.edit}>Edit</button>
                </div>
            );
        } else {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="editable">Company: </label>
                        <input type="text" id="company" value={company} onChange={this.handleChange} />

                        <label htmlFor="editable">Position </label>
                        <input type="text" id="position" value={position} onChange={this.handleChange} />

                        <label htmlFor="editable">Date: </label>
                        <input type="text" id="date" value={date} onChange={this.handleChange} />

                        <label htmlFor="editable">Description: </label>
                        <input type="text" id="description" value={description} onChange={this.handleChange} />

                        <input type="submit" value="Save" />
                    </form>
                </div>
            );
        }
        
    }
}

export default Work;