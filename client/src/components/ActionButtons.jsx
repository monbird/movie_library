import React, { Component } from 'react';

class ActionButtons extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <button className="btn btn-primary">+</button>
                        <label>Add new</label>
                    </div>
                    <div className="col-12 col-md-6">
                        <button className="btn btn-success">?</button>
                        <label>Can't decide? Pick for me!</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default ActionButtons;
