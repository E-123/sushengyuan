import React from 'react';
import {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import { Icon, Card, Button, Carousel } from 'antd';
import _ from 'lodash';
import {presentMaterial, detailTab} from './config';
let docWidth = document.body.clientWidth;

export default class Present extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    static defaultProps = {
        pageLinks: [{
            className: 'grjx',
            linkTo: 'isComing',
            width: 158 / 751,
            left: 121 / 751,
            top: 305 / 918
        }, {
            className: 'jtjx',
            linkTo: 'isComing',
            width: 173 / 751,
            left: 444 / 751,
            top: 415 / 918
        }, {
            className: 'scxsxk',
            linkTo: 'ingredients',
            width: 260 / 751,
            left: 377 / 751,
            top: 652 / 918
        }, {
            className: 'jycs',
            linkTo: 'isComing',
            width: 180 / 751,
            left: 62 / 751,
            top: 579 / 918
        }, {
            className: 'zyysz',
            linkTo: 'clock',
            width: 160 / 751,
            left: 499 / 751,
            top: 112 / 918
        }, {
            className: 'zyyszn',
            linkTo: 'isComing',
            width: 232 / 751,
            left: 161 / 751,
            top: 21 / 918
        }, {
            className: 'go',
            linkTo: 'isComing',
            width: 112 / 751,
            left: 317 / 751,
            top: 395 / 918
        }]
    }

    renderCircle() {
        return this.props.pageLinks.map((item, index) => {
            return <Link to={item.linkTo}
                className={item.className}
                key={index}
                style={{
                    width: item.width * docWidth,
                    height: item.width * docWidth,
                    left: item.left * docWidth,
                    top: item.top * (docWidth * 918 / 750),
                }}>
            </Link>;
        });
    }

    render() {
        return (
            <div className="better-food">
                <div className="circle" style={{height: docWidth * 918 / 750}}>
                    {this.renderCircle()}
                </div>
            </div>
        );
    }
}
