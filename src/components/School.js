import React, { Component } from 'react';
import SchoolObject from './SchoolObject';
import uniqid from "uniqid";

class School extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            schoolList: [ <SchoolObject /> ], //a list of SchoolObjects in the form of divs.
        }

        this.removeSchool = this.removeSchool.bind(this);
        this.addSchool = this.addSchool.bind(this);
    }

    removeSchool = () => {

    }

    addSchool = () => {
        let currSchools = [...this.state.schoolList];
        console.log(currSchools);
        currSchools.push( <SchoolObject /> );
        this.setState({
          schoolList: currSchools
        });
        console.log(this.state.schoolList.length);
    }

    render() {   
        return (
            <div>
              {this.state.schoolList.map((school) => (
                  <div key={uniqid()}>
                    {school}
                    <button onClick={this.removeSchool}>Remove</button>
                  </div>
               ))}
               <button onClick={this.addSchool}>Add</button>
             </div>
           )
    }
}

export default School;