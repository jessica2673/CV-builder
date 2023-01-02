import React from 'react';
import data from './data';
import uniqid from "uniqid";

class School extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            name: 'School',
            date: '2000 - 2004',
            study: 'Major',
            description: 'Ad Omnia Paratus',
            editable: false       
        }

        this.removeSchool = this.removeSchool.bind(this);
        this.addSchool = this.addSchool.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    edit = (e) => {
        data.education[e.target.id].editable = true;
        this.setState({
            index: data.education[e.target.id].index,
            name: data.education[e.target.id].name,
            date: data.education[e.target.id].date,
            study: data.education[e.target.id].study,
            description: data.education[e.target.id].description,
            editable: true
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        e.preventDefault();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { index, name, date, study, description } = this.state;
        const editedSchool = (() => { return { index, name, date, study, description, editable: false } })();
        let tempList = [...data.education];
        tempList.splice(index, 1, editedSchool);
        data.education = tempList;
        this.setState({
            index: index,
            name: 'School',
            date: '2000 - 2004',
            study: 'Major',
            description: 'Ad Omnia Paratus',
            editable: false 
        });
        console.log(data.education);
        this.forceUpdate();
    }

    addSchool = (e) => {
        const { index, name, date, study, description } = this.state;
        const newSchool = (() => {
            return { index: this.state.index + 1, name, date, study, description, editable: false } })();
        let currSchools = [...data.education];
        currSchools.push( newSchool );
        data.education = currSchools;
        this.setState({index: this.state.index + 1})
        this.forceUpdate();
    }

    removeSchool = () => {

    }

    render() {   
        const { name, date, study, description } = this.state;
        return (
            <div>
              {data.education.map((school) => {
                    return (!school.editable) ? 
                    <div key={school.index}>
                        <h3>{school.name}</h3>
                        <p>{school.date}</p>
                        <p>{school.study}</p>
                        <p>{school.description}</p>
                        <button id={school.index} onClick={this.edit}>Edit</button>
                        <button index={school.index} onClick={this.removeSchool}>Remove</button>
                    </div>
                    : 
                        <div key={school.index}>
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
                    })}
               <button onClick={this.addSchool.bind(this)}>Add</button>
            </div>
        )
    }
}

export default School;