import React from 'react';
import General from './components/General';
import School from './components/School';
import Work from './components/Work';
import './styles/App.css'

class App extends React.Component {
  constructor() {
    super();
  };


  render() {
    return (
      <div>
        <div className='header'>CV Builder</div>
        <div className='body'>
          <div id='main'>
            <General/>
            <h2>Education</h2>
            <School />   
            <h2>Work Experience</h2>
            <Work />
          </div>
        </div>
      </div>
    )
  }
}


export default App;
