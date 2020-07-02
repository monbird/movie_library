import React, { Component } from 'react';
import { Dropdown, Checkbox } from 'semantic-ui-react';

const optionsGenre = [
    { key: 'drama', text: 'Drama', value: 'drama' },
    { key: 'comedy', text: 'Comedy', value: 'comedy' },
    { key: 'horror', text: 'Horror', value: 'horror' },
    { key: 'thriller', text: 'Thriller', value: 'thriller' },
    { key: 'crime', text: 'Crime', value: 'crime' }
];

const optionsCountry = [
    { key: 'Poland', text: 'Poland', value: 'Poland' },
    { key: 'USA', text: 'USA', value: 'USA' },
    { key: 'Sweden', text: 'Sweden', value: 'Sweden' },
    { key: 'Japan', text: 'Japan', value: 'Japan' },
    { key: 'Germany', text: 'Germany', value: 'Germany' }
];

const optionsPlatform = [
    { key: 'Netflix', text: 'Netflix', value: 'Netflix' },
    { key: 'CDA', text: 'CDA', value: 'CDA' },
    { key: 'Player.pl', text: 'Player.pl', value: 'Player.pl' }
];

const optionsSortBy = [
    { key: 'alphabet', text: 'Alphabetically', value: 'alphabet', icon: 'sort alphabet down' },
    { key: 'year_newest', text: 'Year - newest', value: 'year_newest', icon: 'sort numeric down' },
    { key: 'year_oldest', text: 'Year - oldest', value: 'year_oldest', icon: 'sort numeric up' },
    { key: 'rating_highest', text: 'Rating - highest', value: 'rating_highest', icon: 'sort amount down' },
    { key: 'rating_lowest', text: 'Rating - lowest', value: 'rating_lowest', icon: 'sort amount up' }
];

class Filters extends Component {
    render() {
        return (
            <div className="col-12 py-2">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 px-0 px-sm-3 px-md-0 pr-md-3">
                        <div className="form-group">
                            <Dropdown placeholder='Genre' fluid multiple selection clearable={true} options={optionsGenre} />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 px-0 px-sm-3 px-md-0 pl-md-3 pr-lg-3">
                        <div className="form-group">
                            <Dropdown placeholder='Country' fluid multiple selection clearable={true}  options={optionsCountry} />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 px-0 px-sm-3 px-md-0 pr-md-3 pl-lg-3 pr-lg-0">
                        <div className="form-group">
                            <Dropdown placeholder='Platform' fluid multiple selection clearable={true}  options={optionsPlatform} />
                        </div>
                    </div>
                    <div className="col-6 col-lg-4 valign-parent pr-0 pl-1 pl-sm-3 pl-lg-0">
                        <div className="form-group valign">
                            <Checkbox toggle label='Hide watched' className="semantic-toggle" />
                        </div>
                    </div>
                    <div className="col-6 col-lg-4 offset-md-6 offset-lg-4 px-0 pr-sm-3 pr-md-0 pl-md-3">
                        <div className="form-group">
                            <Dropdown placeholder='Sort by' fluid selection clearable={true} options={optionsSortBy} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filters;
