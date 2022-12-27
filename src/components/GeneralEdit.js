import React, { Component } from 'react';

class GeneralEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: props.firstName,
            lastName: props.lastName,
            email: props.email,
            phone: props.phone,
            website: props.website,
        }
    }

    render() {
        const { firstName, lastName, email, phone, website } = this.state;
        return (
            <div>
                <form>
                    <label htmlFor="editable">First Name: </label>
                    <input type="text" value={firstName} onChange={this.handleChange} />

                    <label htmlFor="editable">Last Name: </label>
                    <input type="text" value={lastName} onChange={this.handleChange} />

                    <label htmlFor="editable">Email: </label>
                    <input type="text" value={email} onChange={this.handleChange} />

                    <label htmlFor="editable">Phone </label>
                    <input type="text" value={phone} onChange={this.handleChange} />

                    <label htmlFor="editable">Website: </label>
                    <input type="text" value={website} onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

export default GeneralEdit;
