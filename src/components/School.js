import React, { Component } from 'react';
import SchoolObject from './SchoolObject';
import data from './data';
import uniqid from "uniqid";

class School extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editable: 0
        }

        this.removeSchool = this.removeSchool.bind(this);
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
        const { name, date, study, description } = this.state;
        const newSchool = (() => {
            return { name, date, study, description } })();
        this.addSchool(newSchool);
        console.log(data.education);
    }

    addSchool = (newSchool) => {
        // let currSchools = [...data.education];
        // currSchools.push( newSchool );
        // data.education = currSchools;
        // console.log(data.education);
        data.education.push(newSchool);
    }

    removeSchool = () => {

    }

    render() {   
        return (
            <div>
              {data.education.map((school) => {
                    return (this.state.editable === 0) ? 
                    <div key={uniqid()}>
                        <h3>{school.name}</h3>
                        <p>{school.date}</p>
                        <p>{school.study}</p>
                        <p>{school.description}</p>
                        <button onClick={this.edit}>Edit</button>
                        <button onClick={this.removeSchool}>Remove</button>
                    </div>
                    : 
                        <div key={uniqid()}>
                            <form onSubmit={this.handleSubmit}>
                                <label htmlFor="editable">School name: </label>
                                <input type="text" id="name" value={school.name} onChange={this.handleChange} />
        
                                <label htmlFor="editable">Date of Study: </label>
                                <input type="text" id="date" value={school.date} onChange={this.handleChange} />
        
                                <label htmlFor="editable">Subject of Study: </label>
                                <input type="text" id="study" value={school.study} onChange={this.handleChange} />
        
                                <label htmlFor="editable">Description: </label>
                                <input type="text" id="description" value={school.description} onChange={this.handleChange} />
        
                                <input type="submit" value="Save" />
                            </form>
                        </div>
                    })};
               <button onClick={this.addSchool}>Add</button>
            </div>
        )
    }
}

export default School;