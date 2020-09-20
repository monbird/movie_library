import React, { Component } from "react";
import { Button, Form, Message } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { registerUser } from "../actions/authActions";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            email: null,
            password: null,
            password2: null,
            errors: {},
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to Movies
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
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
        };

        await this.props.registerUser(payload);
    };

    render() {
        const { errors } = this.state;

        return (
            <div className="container pageForm-container">
                <h2>Register</h2>
                <p>
                    To create a new account please provide your details below:
                </p>
                <div className="bg-secondary py-5 px-4">
                    <Form
                        error
                        className="mx-auto d-block"
                        noValidate
                        onSubmit={this.handleSubmit}
                        style={{ maxWidth: "700px" }}
                    >
                        <Message
                            hidden={!Object.keys(errors).length}
                            size="small"
                            error
                            header="Form validation failed"
                            content="Please check individual fields for errors"
                        />
                        <Form.Input
                            id="username"
                            icon="user"
                            iconPosition="left"
                            label="Username"
                            type="text"
                            placeholder="Username"
                            autoFocus
                            error={
                                errors.username && {
                                    content: errors.username,
                                    pointing: "above",
                                }
                            }
                            onChange={this.inputChange}
                        />
                        <Form.Input
                            id="email"
                            icon="mail"
                            iconPosition="left"
                            label="Email address"
                            type="email"
                            placeholder="Email address"
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
                        <Form.Input
                            id="password2"
                            icon="lock"
                            iconPosition="left"
                            label="Confirm password"
                            type="password"
                            placeholder="Confirm password"
                            error={
                                errors.password2 && {
                                    content: errors.password2,
                                    pointing: "above",
                                }
                            }
                            onChange={this.inputChange}
                        />
                        <Button
                            content="Create account"
                            className="semantic-btn d-block mx-auto px-5"
                        />
                    </Form>
                </div>
            </div>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(Register);
