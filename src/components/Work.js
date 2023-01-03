import React from 'react';
import data from './data';

class Work extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            company: 'Company',
            position: 'Web Developer',
            date: '20XX - Present',
            description: 'Coded lol',
            editable: false,
            tempIndex: 0
        }

        this.removeJob = this.removeJob.bind(this);
        this.addJob = this.addJob.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    edit = (e) => {
        data.work[e.target.id].editable = true;
        this.setState({
            index: this.state.index,
            company: data.work[e.target.id].company,
            position: data.work[e.target.id].position,
            date: data.work[e.target.id].date,
            description: data.work[e.target.id].description,
            editable: true,
            tempIndex: data.work[e.target.id].index
        })
    }

    handleChange = (e) => {
        this.setState ({
            [e.target.id]: e.target.value
        })
        e.preventDefault();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const index = this.state.tempIndex;
        const { company, position, date, description } = this.state;
        const editedWork = (() => { return { index, company, position, date, description, editable: false } })();
        let tempList = [...data.work];
        tempList.splice(index, 1, editedWork);
        data.work = tempList;
        this.setState({
            index: this.state.index,
            company: 'Company',
            position: 'Web Developer',
            date: '20XX - Present',
            description: 'Coded lol',
            editable: false
        });
        this.forceUpdate();
    }

    addJob = () => {
        const { company, position, date, description } = this.state;
        const newWork = (() => {
            return { index: this.state.index + 1, company, position, date, description, editable: false } })();
        let currWorkList = [...data.work];
        currWorkList.push( newWork );
        data.work = currWorkList;
        this.setState({index: this.state.index + 1})
        this.forceUpdate();
    }

    removeJob = (e) => {
        const temp1 = this.copyArrayUnchanged(data.work.slice(0, e.target.id));
        const temp2 = this.copyArrayChanged(data.work.slice(Number(e.target.id) + 1));
        data.work = [...temp1, ...temp2];
        this.setState({
            index: this.state.index - 1
        })
    }

    copyArrayUnchanged(workList) {
        let arr = [];
        workList.map((work) => {
          arr.push({...work});
        })
        return arr;
      }
    
      copyArrayChanged(workList) {
        let arr = [];
        workList.map((work) => {
            work.index = work.index - 1;
            arr.push({...work});
        })
        return arr;
      }

    render() {
        const { company, position, date, description } = this.state;

        return (
            <div>
              {data.work.map((job) => {
                    return (!job.editable) ? 
                    <div key={job.index}>
                        <h3>{job.company}</h3>
                        <p>{job.position}</p>
                        <p>{job.date}</p>
                        <p>{job.description}</p>
                        <button id={job.index} onClick={this.edit}>Edit</button>
                        <button id={job.index} onClick={this.removeJob}>Remove</button>
                    </div>
                    : 
                        <div key={job.index}>
                            <form onSubmit={this.handleSubmit}>
                                <label htmlFor="editable">Company: </label>
                                <input type="text" id="company" value={company} onChange={this.handleChange} />
        
                                <label htmlFor="editable">Position: </label>
                                <input type="text" id="position" value={position} onChange={this.handleChange} />
        
                                <label htmlFor="editable">Date: </label>
                                <input type="text" id="date" value={date} onChange={this.handleChange} />
        
                                <label htmlFor="editable">Description: </label>
                                <input type="text" id="description" value={description} onChange={this.handleChange} />
        
                                <input className='submitBtn' type="submit" value="Save" />
                            </form>
                        </div>
                    })}
               <button className='addBtn' onClick={this.addJob.bind(this)}>Add</button>
           </div>
        )
    }
}

export default Work;