import React, { Component } from 'react';
import General from './components/General';
import School from './components/School';
import Work from './components/Work';
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      schoolList: [<School/>],
      workList: [<Work />],
      edit: 0 //where 0 represents not in edit mode.
    }
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

  addSchool = () => {
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

   addWork = () => {
    this.setState({
      schoolList: this.state.schoolList.concat(<School />)
    });
  }

  PrintWchool = () => {
    return (
      <div>
        {this.state.workList.map((work) => (
            <div key={uniqid()}>{work}</div>
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
        <this.PrintSchool />
        <button onClick={this.addWork}>Add</button>
      </div>
    )
  }
}


export default App;
