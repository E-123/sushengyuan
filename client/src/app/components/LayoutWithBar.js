import React from 'react';
import {Component} from 'react';
import {Icon, message} from 'antd';
import './style.less';

message.config({
    duration: 2.5
});

export default class LayoutWithBar extends Component {
	componentWillMount = () => {
        this.props.getUser();
    };
    backward() {
        history.back();
    };
    render() {
        let {children, userInfo} = this.props;
        return (
            <div className="wrapper management">
            	<div className="header">
                    <span onClick={this.backward}>
                        <Icon type="left" /> 返回
                    </span>
            	</div>
                <div className="content">{children}</div>
                <div className="footer">
                </div>
            </div>
        );
    }
}
