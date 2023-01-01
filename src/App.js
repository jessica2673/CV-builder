import React, { Component } from 'react';
import { useEffect } from 'react';
import General from './components/General';
import School from './components/School';
import Work from './components/Work';
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      schoolList: [ <School/> ],
      workList: [ <Work /> ],
      edit: 0 //where 0 represents not in edit mode.
    }

    this.changeToEdit = this.changeToEdit.bind(this);
    this.addSchool = this.addSchool.bind(this);
  };

  handleChangeGeneral = (e) => {
    this.setState({
      general: {
        name: e.target.value,
      }
    });
  };

  changeToEdit = (e) => {
    e.preventDefault();
    this.setState({
      edit: Math.abs(1 - this.state.edit)
    })
  }

  addSchool = (newSchool) => {
    let currSchools = [...this.state.schoolList];
    currSchools.push(newSchool);
    this.setState({
      schoolList: currSchools
    });
  }

  PrintSchool = () => {
    console.log(this.state.schoolList.name);
    return (
      <div>
        {this.state.schoolList.map((school) => (
            <div key={uniqid()}>{school}</div>
         ))}
       </div>
     )
   }

   addWork = () => {
    this.setState({
      workList: this.state.workList.concat(<Work />)
    });
  }

  remove = () => {
    const t = this.state.workList.indexOf(this.state);
    this.setState({
      workList: this.state.workList.splice(t, 1)
    });
    console.log(this.state.workList);
  }

  PrintWork = () => {
    return (
      <div>
        {this.state.workList.map((work) => (
            <div key={uniqid()}>
              <div>{work}</div>
              <button id={work.id} onClick={this.remove}>Remove</button>
            </div>
         ))}
       </div>
     )
   }

  render() {
    return (
      <div id="main">
        <h2>About</h2>
        <General/>
        <h2>Education</h2>
        <this.PrintSchool />   
        <button onClick={this.addSchool}>Add</button>
        <h2>Work Experience</h2>
        <this.PrintWork />
        <button onClick={this.addWork}>Add</button>
      </div>
    )
  }
}


export default App;
