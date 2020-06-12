import React, { Component } from 'react';

import { AddNewButton, PickRandomButton } from './ActionButtons';
import Filters from './Filters';

class CardListControllers extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <AddNewButton type={this.props.type} />
                        </div>
                        <div className="col-12 col-md-6">
                            <PickRandomButton data={this.props.data} highlightMovie={this.props.highlightMovie}/>
                        </div>
                    </div>
                </div>
                <Filters data={this.props.movies}/>
            </div>
        );
    }
}

export default CardListControllers;
