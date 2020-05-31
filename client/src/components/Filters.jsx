import React, { Component } from 'react';

class Filters extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="form-group">
                            <label htmlFor="genres">Genres</label>
                            <select className="form-control" id="genres" multiple>
                                <option>Drama</option>
                                <option>Comedy</option>
                                <option>Horror</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="form-group">
                            <label htmlFor="languages">Languages</label>
                            <select className="form-control" id="languages" multiple>
                                <option>English</option>
                                <option>Polish</option>
                                <option>Swedish</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="form-group">
                            <label htmlFor="include">Include</label>
                            <select className="form-control" id="include">
                                <option>All</option>
                                <option>Watched</option>
                                <option>Unwatched</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="form-group">
                            <label htmlFor="sortBy">Sort by</label>
                            <select className="form-control" id="sortBy">
                                <option>Title A-Z</option>
                                <option>Year ^</option>
                                <option>Year ~</option>
                                <option>Rating ^</option>
                                <option>Rating ~</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="search">Search</label>
                            <input className="form-control" id="search"></input>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filters;
