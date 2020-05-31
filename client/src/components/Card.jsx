import React, { Component } from 'react';

import CardFront from './CardFront'
import CardBack from './CardBack'

class Card extends Component {
    render() {
        return (
            <div>
                <CardFront data={this.props.data} />
                <CardBack data={this.props.data} />
            </div>
        );
    }
}

export default Card;
