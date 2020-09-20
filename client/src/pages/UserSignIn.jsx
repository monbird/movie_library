import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Divider,
    Form,
    Grid,
    Segment,
    Icon,
    Message,
} from "semantic-ui-react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signInUser } from "../actions/authActions";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            errors: {},
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to Movies
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/movies");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/movies");
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors,
            });
        }
    }

    inputChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        let payload = {
            email: this.state.email,
            password: this.state.password,
        };

        await this.props.signInUser(payload);
    };

    render() {
        const { errors } = this.state;

        return (
            <div className="container pageForm-container">
                <h2>Welcome to Digital&nbsp;Library</h2>
                <p>
                    <Icon name="angle double right" />
                    your online collection of movies, series &amp; many more to
                    come.
                </p>
                <Segment placeholder className="bg-secondary">
                    <Grid columns={2} relaxed="very" stackable>
                        <Grid.Column>
                            <Form
                                error
                                className="py-4 py-md-0"
                                noValidate
                                onSubmit={this.handleSubmit}
                            >
                                <Message
                                    hidden={!errors.nonField}
                                    size="small"
                                    error
                                    header="Account not found!"
                                    content={errors.nonField}
                                />
                                <Form.Input
                                    id="email"
                                    icon="mail"
                                    iconPosition="left"
                                    label="Email address"
                                    placeholder="Email address"
                                    autoFocus
                                    error={
                                        errors.email && {
                                            content: errors.email,
                                            pointing: "above",
                                        }
                                    }
                                    onChange={this.inputChange}
                                />
                                <Form.Input
                                    id="password"
                                    icon="lock"
                                    iconPosition="left"
                                    label="Password"
                                    type="password"
                                    placeholder="Password"
                                    error={
                                        errors.password && {
                                            content: errors.password,
                                            pointing: "above",
                                        }
                                    }
                                    onChange={this.inputChange}
                                />
                                <Button
                                    type="submit"
                                    content="Sign In"
                                    className="semantic-btn"
                                />
                            </Form>
                            <Divider horizontal className="d-md-none">
                                Or
                            </Divider>
                        </Grid.Column>
                        <Grid.Column verticalAlign="middle">
                            <Button
                                as={Link}
                                to="/user/register"
                                content="Register"
                                icon="signup"
                                size="big"
                                className="semantic-btn d-none d-md-block"
                            />
                            <Button
                                as={Link}
                                to="/user/register"
                                content="Register"
                                icon="signup"
                                size="large"
                                className="semantic-btn d-md-none mb-4"
                            />
                        </Grid.Column>
                    </Grid>
                    <Divider vertical className="d-none d-md-block">
                        Or
                    </Divider>
                </Segment>
            </div>
        );
    }
}

SignIn.propTypes = {
    signInUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
});

export default connect(mapStateToProps, { signInUser })(SignIn);
