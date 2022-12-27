import React, { Component } from 'react';
//import GeneralEdit from './GeneralEdit';

class General extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: 'First',
            lastName: 'Last',
            email: 'abc@email.com',
            phone: '1112223333',
            website: 'helloworld.com',
            editable: 0 //represents view mode
        }
        this.handleChange = this.handleChange.bind(this);
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

    render() {
        const { firstName, lastName, email, phone, website } = this.state;

        if(this.state.editable === 0) {
            return (
                <div>
                    <h1>{firstName} {lastName}</h1>
                    <p>{email}</p>
                    <p>{phone}</p>
                    <p>{website}</p>
                    <button onClick={this.edit}>Edit</button>
                </div>
            );
        } else {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="editable">First Name: </label>
                        <input type="text" id="firstName" value={this.state.firstName} onChange={this.handleChange} />

                        <label htmlFor="editable">Last Name: </label>
                        <input type="text" id="lastName" value={this.state.lastName} onChange={this.handleChange} />

                        <label htmlFor="editable">Email: </label>
                        <input type="text" id="email" value={this.state.email} onChange={this.handleChange} />

                        <label htmlFor="editable">Phone </label>
                        <input type="text" id="phone" value={this.state.phone} onChange={this.handleChange} />

                        <label htmlFor="editable">Website: </label>
                        <input type="text" id="website" value={this.state.website} onChange={this.handleChange} />
                        <input type="submit" value="Save" />
                    </form>
                </div>
            )
        }
    }
}

export default General;