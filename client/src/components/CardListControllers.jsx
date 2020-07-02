import React, { Component } from 'react';
import { Input, Icon, Button } from 'semantic-ui-react';
import $ from 'jquery';

import { AddNewButton, PickRandomButton } from './ActionButtons';
import Filters from './Filters';

class CardListControllers extends Component {

    componentDidMount() {
        $(document).click(function(e) {
            let closest_nav = $(e.target).closest('nav');
            if (!closest_nav.length) {
                $('nav').find('.collapse').collapse('hide');
            }
        });
    }

    render() {
        let type_plural = this.props.type  === 'movie' ? 'movies' : this.props.type;
        let type_upper = type_plural.charAt(0).toUpperCase() + type_plural.slice(1);

        return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-light filters-container pt-4 pb-0">
                <div className="container flex-column">
                    <div className="row w-100 mb-2 mb-md-4">
                        <div className="col-8 col-sm-6 col-md-3 pl-0 pl-sm-3 pl-md-0">
                            <div className="row">
                                <div className="col-6 pr-2">
                                    <AddNewButton type={this.props.type} />
                                </div>
                                <div className="col-6 pl-2">
                                    <PickRandomButton data={this.props.data} highlightMovie={this.props.highlightMovie}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 col-sm-6 col-md-3 order-md-3 pr-0 pr-sm-3 pr-md-0 pl-0 pl-sm-3">
                            <Button id="filter-toggler" className="semantic-btn float-right w-100 mr-0" data-toggle="collapse" data-target="#filters">
                                <Icon name='filter' className="d-none d-sm-inline-block"/>FILTER &amp; SORT <Icon name='sort' className="d-none d-sm-inline-block"/>
                            </Button>
                        </div>
                        <div className="col-12 col-md-6 order-md-2 py-3 py-md-0 px-0 px-sm-3">
                            <Input fluid icon='search' iconPosition='left' placeholder={`Search in ${type_upper}`} />
                        </div>
                    </div>
                    <div id="filters" className="collapse row w-100">
                        <Filters data={this.props.movies}/>
                    </div>
                </div>
            </nav>
        );
    }
}

export default CardListControllers;
