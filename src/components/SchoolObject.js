import React, { Component } from 'react';
import data from './data';
import uniqid from "uniqid";

class SchoolObject extends React.Component {
    constructor(props) {
        super(props);

        

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    edit = () => {
        this.setState({editable: true});
    }

    handleChange = (e) => {
        this.setState ({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, date, study, description } = this.state;
        const newSchool = (() => {
            return { name, date, study, description} })();
        this.addSchool(newSchool);
        this.setState({editable: false});
        console.log(data.education);
    }

    addSchool = (newSchool) => {
        // let currSchools = [...data.education];
        // currSchools.push( newSchool );
        // data.education = currSchools;
        // console.log(data.education);
        data.education.push(newSchool);
    }

    render() {   
        const { name, date, study, description } = this.state;
        if(!this.state.editable) {
            return (
                <div>
                    <h3>{name}</h3>
                    <p>{date}</p>
                    <p>{study}</p>
                    <p>{description}</p>
                    <button onClick={this.edit}>Edit</button>
                </div>
            );
        } else {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="editable">School name: </label>
                        <input type="text" id="name" value={name} onChange={this.handleChange} />

                        <label htmlFor="editable">Date of Study: </label>
                        <input type="text" id="date" value={date} onChange={this.handleChange} />

                        <label htmlFor="editable">Subject of Study: </label>
                        <input type="text" id="study" value={study} onChange={this.handleChange} />

                        <label htmlFor="editable">Description: </label>
                        <input type="text" id="description" value={description} onChange={this.handleChange} />

                        <input type="submit" value="Save" />
                    </form>
                </div>
            );
        }
    }
}

export default SchoolObject;