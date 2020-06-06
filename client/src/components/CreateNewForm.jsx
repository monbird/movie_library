import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

import icon_imdb from '../images/icon-imdb.png';
import icon_rt from '../images/icon-rt.png';
import icon_fw from '../images/icon-fw.png';
import { SwitchButton } from './ActionButtons';
import apis from '../api';

class CreateNewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type_plural: this.props.type === 'movie' ? 'movies' : this.props.type,
            title: '',
            year: '',
            genre: '',
            country: '',
            language: '',
            director: '',
            cast: '',
            runtime: '',
            platform: '',
            plot: '',
            rating_imdb: '',
            rating_rt: '',
            rating_fw: '',
            comments: '',
            is_watched: false,
            message: '',
            redirectSuccess: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSwitchBtn = this.handleSwitchBtn.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        $('[data-toggle="tooltip"]').tooltip();
    }

    handleChange = async (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        await this.setState({[nam]: val});
    }

    handleSwitchBtn = async (checked) => {
        await this.setState({['is_watched']: checked});
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        let payload = {
            title: this.state.title,
            year: this.state.year,
            genre: this.state.genre,
            country: this.state.country,
            language: this.state.language,
            director: this.state.director,
            cast: this.state.cast,
            runtime: this.state.runtime,
            platform: this.state.platform,
            plot: this.state.plot,
            rating_imdb: this.state.rating_imdb,
            rating_rt: this.state.rating_rt,
            rating_fw: this.state.rating_fw,
            comments: this.state.comments,
            type: this.props.type,
            is_watched: this.state.is_watched

            // imdb_id: {type: String},
            // poster: {type: String},
        }

        await apis.createMovieOrSeries(payload)
            .then(() => {
                this.setState({
                    redirectSuccess: true,
                });

                let typeTitle = payload.type.charAt(0).toUpperCase() + payload.type.slice(1);
                let msg = '👍 ' + typeTitle + ' "' + payload.title + '" created!';
                toast.success(msg);
            })
            .catch(error => {
                let msg = null;
                if(error.response && error.response.data) {
                    msg = '👎 Could not add ' + payload.type + ": " + error.response.data.message;
                } else {
                    let typeTitle = payload.type.charAt(0).toUpperCase() + payload.type.slice(1);
                    msg = '👎 ' + typeTitle + ' not created!\n';
                }
                toast.error(msg);
            });
    }

    render() {
        if(this.state.redirectSuccess) {
            return (
                <Redirect to={{
                    pathname: '/' + this.state.type_plural
                }} /> 
            )
        } else {
            return (
                <div className="container">
                    <h2>Create new {this.props.type}</h2>
                    <div className="row">
                        <div className="col-12">
                            <p>
                                Complete the form yourself or&nbsp;
                                <a href="#" className="btn btn-warning btn-sm">
                                    <FontAwesomeIcon icon={faAngleDoubleDown} /> fetch data from <b>IMDb </b>
                                    <FontAwesomeIcon icon={faAngleDoubleDown} />
                                </a>
                            </p>
                        </div>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text justify-content-end">*Title:</span>
                                        </div>
                                        <input type="text" className="form-control" id="title" placeholder="your title.." name="title" onChange={this.handleChange} autoFocus/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text justify-content-end">Year:</span>
                                        </div>
                                        <input type="text" className="form-control" id="year" placeholder="your year.." name="year" onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text justify-content-end">Genre:</span>
                                        </div>
                                        <input type="text" className="form-control" id="genre" placeholder="your genre.." name="genre" onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text justify-content-end">Country:</span>
                                        </div>
                                        <input type="text" className="form-control" id="country" placeholder="your country.." name="country" onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text justify-content-end">Language:</span>
                                        </div>
                                        <input type="text" className="form-control" id="language" placeholder="your language.." name="language" onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text justify-content-end">Director:</span>
                                        </div>
                                        <input type="text" className="form-control" id="director" placeholder="your director.." name="director" onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text justify-content-end">Cast:</span>
                                        </div>
                                        <input type="text" className="form-control" id="cast" placeholder="your cast.." name="cast" onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text justify-content-end">Runtime:</span>
                                        </div>
                                        <input type="text" className="form-control" id="runtime" placeholder="your runtime.." name="runtime" onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text justify-content-end">Platform:</span>
                                        </div>
                                        <input type="text" className="form-control" id="platform" placeholder="your platform.." name="platform" onChange={this.handleChange}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text justify-content-end">Plot:</span>
                                        </div>
                                        <textarea className="form-control" id="plot" placeholder="your plot.." name="plot" onChange={this.handleChange} rows="5"></textarea>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <p>Ratings:</p>
                                    <div className="row">
                                        <div className="col-12 col-lg-4">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <div className="input-group-prepend prepend-original" data-toggle="tooltip" data-placement="bottom" title="IMDb">
                                                        <span className="input-group-text justify-content-center">
                                                            <img src={icon_imdb} alt="imdb icon" className="rating-icon-form"></img>
                                                        </span>
                                                    </div>
                                                    <input type="text" className="form-control" id="title" placeholder="rating.." name="rating_imdb" onChange={this.handleChange}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <div className="input-group-prepend prepend-original" data-toggle="tooltip" data-placement="top" title="Rotten Tomatoes">
                                                        <span className="input-group-text justify-content-center">
                                                            <img src={icon_rt} alt="imdb icon" className="rating-icon-form"></img>
                                                        </span>
                                                    </div>
                                                    <input type="text" className="form-control" id="title" placeholder="rating.." name="rating_rt" onChange={this.handleChange}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <div className="input-group-prepend prepend-original" data-toggle="tooltip" data-placement="top" title="Filmweb">
                                                        <span className="input-group-text justify-content-center">
                                                            <img src={icon_fw} alt="imdb icon" className="rating-icon-form"></img>
                                                        </span>
                                                    </div>
                                                    <input type="text" className="form-control" id="title" placeholder="rating.." name="rating_fw" onChange={this.handleChange}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text justify-content-end">Comments:</span>
                                        </div>
                                        <textarea className="form-control" id="comments" placeholder="your comments.." name="comments" onChange={this.handleChange} rows="4"></textarea>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <p>Status:</p>
                                    <div className="input-group">
                                        <SwitchButton showText={true} onChange={this.handleSwitchBtn}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="float-right">
                                    <a href={`/${this.state.type_plural}`} className="btn btn-danger">Cancel</a>
                                    <button type="submit" className="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            );
        }
    }
}

export default CreateNewForm;
