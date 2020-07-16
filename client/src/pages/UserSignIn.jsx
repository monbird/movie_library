import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Divider, Form, Grid, Segment, Icon, Message } from 'semantic-ui-react';
import { toast } from 'react-toastify';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            usernameError: null,
            passwordError: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.location.pathname === '/user/signout') {
            let msg = '👍 You have successfully signed out!';
            toast.dark(msg);
        }
    }

    handleSubmit = async (event) => {

        event.preventDefault();
        event.stopPropagation();

        if(this.state.username) {
            this.setState({usernameError: null});
        } else {
            this.setState({usernameError: 'Please provide your username.'});
        }
        if(this.state.password) {
            this.setState({passwordError: null});
        } else {
            this.setState({passwordError: 'Please provide your password.'});
        }
    }

    render() {
        return (
            <div className="container pageForm-container">
                <h2>Welcome to Digital&nbsp;Library</h2>
                <p><Icon name='angle double right'/>your online collection of movies, series &amp; many more to come.</p>
                <Segment placeholder className="bg-secondary">
                    <Grid columns={2} relaxed='very' stackable>
                        <Grid.Column>
                            <Form error action="#" className="py-4 py-md-0" noValidate onSubmit={this.handleSubmit}>
                                <Message
                                    // hidden
                                    size="small"
                                    error
                                    header='Account not found!'
                                    content='Account with provided username or email address not found. Please check your entry and try again.'
                                />
                                <Form.Input
                                    icon='user'
                                    iconPosition='left'
                                    label='Username'
                                    placeholder='Username'
                                    autoFocus
                                    error={this.state.usernameError && { content: this.state.usernameError, pointing: 'above' }}
                                    onChange={(e) => this.setState({username: e.target.value})}
                                />
                                <Form.Input
                                    icon='lock'
                                    iconPosition='left'
                                    label='Password'
                                    type='password'
                                    placeholder='Password'
                                    error={this.state.passwordError && { content: this.state.passwordError, pointing: 'above' }}
                                    onChange={(e) => this.setState({password: e.target.value})}
                                />
                                <Button type="submit" content='Sign In' className='semantic-btn' />
                            </Form>
                            <Divider horizontal className='d-md-none'>Or</Divider>
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle'>
                            <Button as={Link} to='/user/register' content='Register' icon='signup' size='big' className='semantic-btn d-none d-md-block' />
                            <Button as={Link} to='/user/register' content='Register' icon='signup' size='large' className='semantic-btn d-md-none mb-4' />
                        </Grid.Column>
                    </Grid>
                    <Divider vertical className='d-none d-md-block'>Or</Divider>
                </Segment>
            </div>
        );
    }
}

export default SignIn;
