import React from 'react';
import {Component} from 'react';
import {Icon, message} from 'antd';
import './style.less';

message.config({
    duration: 2.5
});

export default class Layout extends Component {
	componentWillMount = () => {
        this.props.getUser();
    };
    render() {
        let {children} = this.props;
        console.log(this.props)
        return (
            <div className="wrapper">
                <div className="main">{children}</div>
            </div>
        );
    }
}
