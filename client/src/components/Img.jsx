import React, { Component } from 'react';

class Img extends Component {
    constructor (props) {
        super(props);

        this.state = {
            error: false
        };
    }

    render () {
        const props = {...this.props}; // clone props so we can mutate

        if (this.state.error || !props.src) {
            props.src = props.imgAlt;
        }

        delete props.imgAlt;

        return <img {...props} onError={e => this.setState({ error: true })}/>;
    }
}

export default Img;