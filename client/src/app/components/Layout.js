/**
 * @file demo 整体页面布局
 * @author hancong
 * @date 2016-10-25
 */

import React from 'react';
import {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import {Icon, message} from 'antd';
import './style.less';

message.config({
    duration: 2.5
});

export default class Layout extends Component {
    render() {
        let {children} = this.props;
        message.success('hello world');
        return (
            <div className="wrapper">
            	<div className="header">
            		header
            	</div>
                <div className="main">{children}</div>
                <div className="header">
            		footer
            	</div>
            </div>
        );
    }
}
