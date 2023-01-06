import React from 'react';
import General from './components/General';
import School from './components/School';
import Work from './components/Work';
import './styles/App.css'

class App extends React.Component {
  constructor() {
    super();
  };

  hide = () => {
    const openForms = document.querySelectorAll("form");
    let cont = true;
    
    openForms.forEach((form) => {
      if(cont && form.addEventListener) {
        document.querySelector('.message').textContent = "Submit form first.";
        cont = false;
      }
    })

    if(cont) {
      this.removeBtns();
    }
  }

  removeBtns = () => {
    const buttons = document.querySelectorAll("button");
    document.querySelector('.message').textContent = "";
    buttons.forEach((button) => {
      button.style.display = 'none';
    });

    document.querySelector('.toggleOn').style.display = 'block';
    document.querySelector('.toggleOff').style.display = 'none';
  }

  show = () => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.style.display = 'block';
    });
    document.querySelector('.toggleOn').style.display = 'none';
    document.querySelector('.toggleOff').style.display = 'block';
  }

  render() {
    return (
      <div className='overall'>
        <div className='header'>CV Builder</div>
        <div className='body'>
          <button className='toggleOff' onClick={this.hide}>View</button>
          <button className='toggleOn' onClick={this.show}>Edit</button>
          <div className='message'></div>
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
