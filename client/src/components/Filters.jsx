import React, { Component } from 'react';
import { Dropdown, Checkbox } from 'semantic-ui-react';

class Filters extends Component {

    FILTERS = ['genre', 'country', 'platform']
    OPTIONS_SORT_BY = [
        { key: 'alphabet', text: 'Alphabetically', value: 'alphabet', icon: 'sort alphabet down' },
        { key: 'recently_added', text: 'Recently added', value: 'recently_added', icon: 'calendar alternate outline' },
        { key: 'year_newest', text: 'Year - newest', value: 'year_newest', icon: 'sort numeric descending' },
        { key: 'year_oldest', text: 'Year - oldest', value: 'year_oldest', icon: 'sort numeric ascending' },
        { key: 'rating_highest', text: 'Rating - highest', value: 'rating_highest', icon: 'sort amount down' },
        { key: 'rating_lowest', text: 'Rating - lowest', value: 'rating_lowest', icon: 'sort amount up' }
    ];

    constructor(props) {
        super(props);

        this.state = {
            filterOptions: {},
            anyWatched: false
        }

        this.FILTERS.map((filter) => {
            this.state.filterOptions[filter] = []
        });
    }

    collectFilterOptions(filter) {
        let options = '';
        for (let i = 0; i < this.props.data.length; i++) {
            options += (this.props.data[i][filter] || '') + ', ';
        }
        options = options.toLowerCase().split(', ');
        let optionsUnique = [...new Set(options)].sort();

        let filterOptions = [];
        for (let i = 0; i < optionsUnique.length; i++) {
            if(!optionsUnique[i]) {
                continue;
            }
            let option = optionsUnique[i][0].toUpperCase() + optionsUnique[i].slice(1);
            filterOptions.push({
                key: option,
                text: option,
                value: option
            });
        }
        return filterOptions;
    }

    componentDidUpdate() {
        let filterOptions = {};

        for (let i = 0; i < this.FILTERS.length; i++) {
            filterOptions[this.FILTERS[i]] = this.collectFilterOptions(this.FILTERS[i]);
        }

        if(JSON.stringify(this.state.filterOptions) !== JSON.stringify(filterOptions)) {
            this.setState({
                filterOptions: filterOptions
            })
        }

        let anyWatched = false;
        for (let i = 0; i < this.props.data.length; i++) {
            if(this.props.data[i].is_watched) {
                anyWatched = true;
                break;
            }
        }

        if(this.state.anyWatched !== anyWatched) {
            this.setState({
                anyWatched: anyWatched
            })
        }
    }

    // filterChange() {
    //     let filterOptions = {

    //     };
    //     for (let i = 0; i < this.FILTERS.length; i++) {
    //         filterOptions
    //     }
    //     //filterCards
    // }

    render() {
        return (
            <div className="col-12 py-2">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 px-0 px-sm-3 px-md-0 pr-md-3">
                        <div className="form-group">
                            <Dropdown placeholder='Genre' fluid multiple selection clearable={true} options={this.state.filterOptions.genre} disabled={this.state.filterOptions.genre.length <= 0} onChange={this.filterChange}/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 px-0 px-sm-3 px-md-0 pl-md-3 pr-lg-3">
                        <div className="form-group">
                            <Dropdown placeholder='Country' fluid multiple selection clearable={true}  options={this.state.filterOptions.country} disabled={this.state.filterOptions.country.length <= 0} onChange={this.filterChange}/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 px-0 px-sm-3 px-md-0 pr-md-3 pl-lg-3 pr-lg-0">
                        <div className="form-group">
                            <Dropdown placeholder='Platform' fluid multiple selection clearable={true}  options={this.state.filterOptions.platform} disabled={this.state.filterOptions.platform.length <= 0} onChange={this.filterChange}/>
                        </div>
                    </div>
                    <div className="col-6 col-lg-4 valign-parent pr-0 pl-1 pl-sm-3 pl-lg-0">
                        <div className="form-group valign">
                            <Checkbox toggle label='Hide watched' className="semantic-toggle" disabled={!this.state.anyWatched}/>
                        </div>
                    </div>
                    <div className="col-6 col-lg-4 offset-md-6 offset-lg-4 px-0 pr-sm-3 pr-md-0 pl-md-3">
                        <div className="form-group">
                            <Dropdown placeholder='Sort by' fluid selection clearable={true} options={this.OPTIONS_SORT_BY} disabled={this.props.data.length <= 0}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filters;
