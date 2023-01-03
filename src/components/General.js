import React from 'react';
import data from './data';

class General extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: 'First',
            lastName: 'Last',
            email: 'abc@email.com',
            phone: '1112223333',
            website: 'helloworld.com',
            editable: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.edit = this.edit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    edit = () => {
        data.general.editable = true;
        this.setState({ editable: true});
    }

    handleChange = (e) => {
        this.setState ({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        data.general.editable = false;
        const { firstName, lastName, email, phone, website } = this.state;
        const editedGeneral = (() => {return { firstName, lastName, email, phone, website, editable: false }})();
        data.general = editedGeneral;
        this.setState({ editable: false });
    }

    render() {
        const { firstName, lastName, email, phone, website } = this.state;
        if(!data.general.editable) {
            return (
                <div>
                    <h1>{data.general.firstName} {data.general.lastName}</h1>
                    <p>{data.general.email}</p>
                    <p>{data.general.phone}</p>
                    <p>{data.general.website}</p>
                    <button onClick={this.edit}>Edit</button>
                </div>
            );
        } else {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="editable">First Name: </label>
                        <input type="text" id="firstName" value={firstName} onChange={this.handleChange} />

                        <label htmlFor="editable">Last Name: </label>
                        <input type="text" id="lastName" value={lastName} onChange={this.handleChange} />

                        <label htmlFor="editable">Email: </label>
                        <input type="text" id="email" value={email} onChange={this.handleChange} />

                        <label htmlFor="editable">Phone </label>
                        <input type="text" id="phone" value={phone} onChange={this.handleChange} />

                        <label htmlFor="editable">Website: </label>
                        <input type="text" id="website" value={website} onChange={this.handleChange} />
                        <input type="submit" value="Save" />
                    </form>
                </div>
            )
        }
    }
}

export default General;