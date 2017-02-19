import React from 'react';
import {Component} from 'react';
import {Link, browserHistory} from 'react-router';

export default class Present extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="iscoming">
                正在建设中...
            </div>
        );
    }
}
