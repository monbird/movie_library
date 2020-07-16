import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            email: null,
            password: null,
            confirmPassword: null,
            usernameError: null,
            emailError: null,
            passwordError: null,
            confirmPasswordError: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = async (event) => {

        event.preventDefault();
        event.stopPropagation();

        if(this.state.username) {
            this.setState({usernameError: null});
        } else {
            this.setState({usernameError: 'Please provide your username.'});
        }

        if(this.state.email) {
            this.setState({emailError: null});
        } else {
            this.setState({emailError: 'Please provide your email address.'});
        }

        if(this.state.password) {
            this.setState({passwordError: null});
        } else {
            this.setState({passwordError: 'Please provide your password.'});
        }

        if(this.state.confirmPassword) {
            this.setState({confirmPasswordError: null});
        } else {
            this.setState({confirmPasswordError: 'Please confirm your password.'});
        }
    }

    render() {
        return (
            <div className="container pageForm-container">
                <h2>Register</h2>
                <p>To create a new account please provide your details below:</p>
                <div className="bg-secondary py-5 px-4">
                    <Form error action="#" className="mx-auto d-block" noValidate onSubmit={this.handleSubmit} style={{'max-width': '700px'}} >
                        <Message
                            // hidden
                            size="small"
                            error
                            header='Account already exists'
                            content='bli bli bla bla'
                        />
                        <Form.Input
                            icon='user'
                            iconPosition='left'
                            label='Username'
                            type='text'
                            placeholder='Username'
                            autoFocus
                            error={this.state.usernameError && { content: this.state.usernameError, pointing: 'above' }}
                            onChange={(e) => this.setState({username: e.target.value})}
                        />
                        <Form.Input
                            icon='mail'
                            iconPosition='left'
                            label='Email address'
                            type='email'
                            placeholder='Email address'
                            error={this.state.emailError && { content: this.state.emailError, pointing: 'above' }}
                            onChange={(e) => this.setState({email: e.target.value})}
                        />
                        <Form.Input
                            icon='lock'
                            iconPosition='left'
                            label='Password'
                            type='password'
                            placeholder='Password'
                            error={this.state.passwordError && { content: this.state.passwordError, pointing: 'above' }}
                            onChange={(e) => this.setState({passwordError: e.target.value})}
                        />
                        <Form.Input
                            icon='lock'
                            iconPosition='left'
                            label='Confirm password'
                            type='password'
                            placeholder='Confirm password'
                            error={this.state.confirmPasswordError && { content: this.state.confirmPasswordError, pointing: 'above' }}
                            onChange={(e) => this.setState({confirmPassword: e.target.value})}
                        />
                        <Button content='Create account' className='semantic-btn d-block mx-auto px-5' />
                    </Form>
                </div>
            </div>
        );
    }
}

export default Register;
