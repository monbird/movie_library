import React, { Component } from 'react';

import ModalImdbCard from './ModalImdbCard';
import apis from '../api';

class ModalImdb extends Component {
    componentDidMount() {
        if (this.props.title) {
            apis.getImdbTitles({
                title: this.props.title,
                year: this.props.year,
                type: this.props.type
            })
                .then((response) => {
                    // this.setState({...response.data.data});
                })
                .catch((error) => {
                //     this.setState({
                //         doRedirect: true,
                //     });
                //     let msg = '👎 We couldn\'t find the ' + this.props.type + ' you are after!';
                //     toast.error(msg);
                });
        }
    }

    render() {
        return (
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Choose your movie/series?</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>Based on the information you provided we have found the following titles:</p>
                            <ModalImdbCard />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalImdb;
