import React, { Component } from 'react';
import General from './components/General';
import GeneralEdit from './components/GeneralEdit';
import School from './components/School';
import Work from './components/Work';

class App extends Component {
  constructor() {
    super();

    this.state = {
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

  ChooseRender = (chooseClass) => {
    const editable = (this.state.edit === 0 ? true : false);
    if(editable) {
      return <General />;
    } else {
      return <GeneralEdit />;
    }
  }

  render() {
    return (
      <div id="main">
        <h2>About</h2>
        <this.ChooseRender/>
        <button className="edit" onClick={this.changeToEdit}>{ (this.state.edit === 0) ? "Edit" : "Save" }</button>
        <h2>Education</h2>
        <School/>
        <h2>Work Experience</h2>
        <Work />
      </div>
    )
  }
}


export default App;
