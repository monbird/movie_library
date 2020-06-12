import React, { Component } from 'react';

import CardFront from './CardFront';
import CardBack from './CardBack';

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data
        };

        this.refresher = this.refresher.bind(this);
    }

    refresher(data) {
        this.setState({
            data: data
        });
    }

    render() {
        if(!this.state.data.title) {
            return null;
        } else {
            return (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div>
                        <CardFront data={this.state.data} refresher={this.refresher} highlightedMovieId={this.props.highlightedMovieId}/>
                        <CardBack data={this.state.data} refresher={this.refresher}/>
                    </div>
                </div>
            );
        }
    }
}

export default Card;
