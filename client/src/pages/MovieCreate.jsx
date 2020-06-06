import React, { Component } from 'react';
import { CreateNewForm } from '../components'

class MovieCreate extends Component {
    render() {
        return (
            <CreateNewForm type="movie"/>
        );
    }
}

export default MovieCreate;