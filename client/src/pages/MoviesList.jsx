import React, { Component } from 'react';
import apis from '../api';

import { ActionButtons, Filters, Card } from '../components';

class MoviesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }

    componentDidMount = async () => {
        await apis.getAllMovies().then(movies => {
            this.setState({
                movies: movies.data.data
            })
        })
    }

    render() {
        return (
            <div>
                <ActionButtons />
                <Filters />
                <div className="container">
                    <div className="row">
                    {this.state.movies.map(movie => (
                        <div class="col-3">
                            <Card data={movie} />
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default MoviesList;
