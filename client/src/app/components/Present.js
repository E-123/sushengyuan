/**
 * @file demo login
 * @author hancong
 * @date 2016-11-02
 */

import React from 'react';
import {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import { Icon, Card, Button, Carousel } from 'antd';
import _ from 'lodash';
import {presentMaterial, detailTab} from './config';

export default class Present extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentType: 'old',
            currentTab: 'detail'
        }
    }

    changeCurrent = (type) => {
        this.setState({
            currentType: type
        });
    };

    goToDetail = (id) => {
        browserHistory.push('/present?id=' + id);
        this.setState({
            currentTab: 'detail'
        });
    };

    renderPresentList = () => {
        let {currentType} = this.state;
        let currentTypeItem = _.find(presentMaterial, {type: currentType});
        return currentTypeItem.materialList.map((item, index) => {
            return <Card key={index} onClick={this.goToDetail.bind(this, item.id)}>
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

    renderCarousel = (carouselMaterial) => {
        return carouselMaterial.map((item, index) => {
            return <div key={index}>
                <Link to={item.href}>
                    <img src={item.imgSrc} />
                </Link>
            </div>
        });
    };

    changeDetailTab = (tab) => {
        this.setState({
            currentTab: tab
        });
    };

    renderTabs = () => {
        let {currentTab} = this.state;
        return detailTab.map((item, index) => {
            return <span
                className={currentTab === item.key ? 'current' : ''}
                key={index}
                onClick={this.changeDetailTab.bind(this, item.key)}>
                {item.title}
            </span>;
        });
    };

    renderPresentDetail = () => {
        let {id} = this.props.location.query;
        let {currentType, currentTab} = this.state;
        let {materialList} = _.find(presentMaterial, {type: currentType});
        let currentPresentItem = _.find(materialList, {id: Number(id)});
        let {detail} = currentPresentItem;
        let imageSrc = detail[`${currentTab}ImageSrc`];
        return <div>
            <div className="present-title">{currentPresentItem.name}：{detail.contain}</div>
            <Carousel autoplay>
                {this.renderCarousel(detail.carouselMaterial)}
            </Carousel>
            <div className="detail-tab">
                {this.renderTabs()}
            </div>
            <div className="detail-tab-content">
                <img src={`${imageSrc}`} width="100%" />
            </div>
        </div>;
    };

    render() {
        let {id} = this.props.location.query;
        return (
            <div className="present">
                {
                    !id
                    ? <div className="present-resume">
                        <div className="present-tab-nav">
                            {this.renderPresentNav()}
                        </div>
                        <div className="present-list">
                            {this.renderPresentList()}
                        </div>
                    </div>
                    : <div className="present-detail">
                        {this.renderPresentDetail()}
                    </div>
                }
            </div>
        );
    }
}
