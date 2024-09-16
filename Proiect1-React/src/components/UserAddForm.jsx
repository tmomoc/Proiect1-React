import React from 'react';
import './UserAddForm.css';
import './Button.css'

class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            isGoldClient: false,
            errors: { 
                name: '',
                email: ''
            }
        };
    }

    updateName(event) {
        this.setState({name: event.target.value});
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updateIsGoldClient(event) {
        this.setState({isGoldClient: event.target.checked});
    }

    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    handleSubmit(event) {
        event.preventDefault();
        const { name, email, isGoldClient } = this.state;
        let isValid = true;
        let errors = { name: '', email: '' };

        if (name.trim() === '') {
            errors.name = 'The name cannot be empty.';
            isValid = false;
        }

        if (!this.validateEmail(email)) {
            errors.email = 'Enter a valid email.';
            isValid = false;
        }

        this.setState({ errors });

        if (isValid) {
            this.props.submitAddForm(event, name, email, isGoldClient);
        }

        this.setState({
            name: '',
            email: '',
            isGoldClient: false,
            errors: { name: '', email: '' }
        });
    }


    render() {
        const {name, email, isGoldClient,errors} = this.state;

        return (
            <form
                className="user-add-form"
                onSubmit={(event) => this.handleSubmit(event)}
            >
                <h2>Add new user:</h2>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(event) => this.updateName(event)}
                />
                    {errors.name && <p className="error">{errors.name}</p>}
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    value={email}
                    name="email"
                    onChange={(event) => this.updateEmail(event)}
                />
                    {errors.email && <p className="error">{errors.email}</p>}
                <label htmlFor="is-gold-client">Client GOLD</label>
                <input
                    type="checkbox"
                    name="is-gold-client"
                    value="true"
                    onChange={(event) => this.updateIsGoldClient(event)}
                />

                <input type="submit"  className="user-add-button" value="Add user"/>
            </form>
        )
    }
}

export default UserAddForm;