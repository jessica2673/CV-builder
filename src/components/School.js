import React, { Component } from 'react';
import uniqid from "uniqid";

class School extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            school: {
                name: 'University of School',
                date: '20XX - Present',
                study: 'Computer Science',
                description: 'Ad Omnia Paratus',
                editable: 0, //represents view mode and 1 represents edit mode
            },
            schoolList: [<School/>],
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    addSchool = (e) => {
        e.preventDefault();
        this.setState({
          schoolList: this.state.schoolList.concat(<School />)
        });
      }
    
      PrintSchool = () => {
        return (
          <div>
            {this.state.schoolList.map((school) => (
                <div key={uniqid()}>{school}</div>
             ))}
           </div>
         )
       }

    render() {   
        const { name, date, study, description } = this.state.school;
        if(this.state.editable === 0) {
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

export default School;