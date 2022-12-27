import React, { Component } from 'react';
import GeneralEdit from './GeneralEdit';

class General extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: 'First',
            lastName: 'Last',
            email: 'abc@email.com',
            phone: '1112223333',
            website: 'helloworld.com',
        }
    }

    render() {
        const { firstName, lastName, email, phone, website } = this.state;
        return (
            <div>
                <h1>{firstName} {lastName}</h1>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{website}</p>
            </div>
        );
    }
}

export default General;