import React, { Component } from 'react';
import General from './components/General';
import School from './components/School';
import Work from './components/Work';

class App extends Component {
  constructor() {
    super();

    this.state = {
    }
  };

  handleChangeGeneral = (e) => {
    this.setState({
      general: {
        name: e.target.value,
      }
    });
  };

  render() {
    return (
      <div>
        <h2>About</h2>
        <General/>
        <h2>Education</h2>
        <School/>
        <h2>Work Experience</h2>
        <Work />
      </div>
    )
  }
}


export default App;
