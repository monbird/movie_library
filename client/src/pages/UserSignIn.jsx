import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Divider, Form, Grid, Segment, Icon } from 'semantic-ui-react';
import { toast } from 'react-toastify';

class SignIn extends Component {
    componentDidMount() {
        if (this.props.location.pathname === '/user/signout') {
            let msg = '👍 You have successfully signed out!';
            toast.dark(msg);
        }
    }

    render() {
        return (
            <div className="container pageForm-container">
                <h2>Welcome to Digital&nbsp;Library</h2>
                <p><Icon name='angle double right' size="large"/>your online collection of movies, series &amp; many more to come.</p>
                <Segment placeholder className="signin-form">
                    <Grid columns={2} relaxed='very' stackable>
                        <Grid.Column>
                            <Form className="pt-4 pb-5 py-md-0">
                                <Form.Input
                                    icon='user'
                                    iconPosition='left'
                                    label='Username'
                                    placeholder='Username'
                                />
                                <Form.Input
                                    icon='lock'
                                    iconPosition='left'
                                    label='Password'
                                    type='password'
                                />
                                <Button content='Sign In' className='semantic-btn' />
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
