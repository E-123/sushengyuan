/**
 * @file demo login
 * @author hancong
 * @date 2016-11-02
 */

import React from 'react';
import {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import moment from 'moment';
import _ from 'lodash';

const FormItem = Form.Item;

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    state = {
    };

    componentWillMount = () => {
    };

    render() {
        return (
            <div className="home">
                <div className="header">
                    溯生源
                </div>
                <div className="content">
                    <Link to="">均衡膳食</Link>
                    <Link to="login">净化卫士</Link>
                </div>
            </div>
        );
    }
}
