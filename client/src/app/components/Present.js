/**
 * @file demo login
 * @author hancong
 * @date 2016-11-02
 */

import React from 'react';
import {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import { Icon, Card, Button, Checkbox } from 'antd';
import moment from 'moment';
import _ from 'lodash';
import {presentMaterial} from './config';

export default class Present extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentType: 'old'
        }
    }

    changeCurrent = (type) => {
        this.setState({
            currentType: type
        });
    };

    renderPresentList = () => {
        let {currentType} = this.state;
        let currentTypeItem = _.find(presentMaterial, {type: currentType});
        return currentTypeItem.materialList.map((item, index) => {
            return <Card key={index}>
                <span className="img"
                    style={{backgroundImage: `url(${item.imgSrc})`}}>
                </span>
                <span className="info">
                    {item.name}
                    <span className="origin">
                        <Icon type="environment" /> {item.origin}
                    </span>
                    <br />
                    价格<em>{item.price}</em>元／套
                </span>
            </Card>
        });
    };

    renderPresentNav = () => {
        return presentMaterial.map((item, index) => {
            return <span
                key={index}
                onClick={this.changeCurrent.bind(this, item.type)}
                className={item.type === this.state.currentType ? 'current' : ''}>
                {item.title}
            </span>;
        });
    };

    render() {
        return (
            <div className="present">
                <div className="present-tab-nav">
                    {this.renderPresentNav()}
                </div>
                <div className="present-list">
                    {this.renderPresentList()}
                </div>
            </div>
        );
    }
}
