import React from 'react';
import {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import { Icon, Carousel } from 'antd';
import {homeCarouselMaterial} from './config';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    state = {
    };

    componentWillMount = () => {
        this.props.getUser();
    };

    goToPage = (pageName, e) => {
        e.preventDefault();
        browserHistory.push(`/${pageName}`);
    };

    renderCarousel = () => {
        return homeCarouselMaterial.map((item, index) => {
            return <div key={index}>
                <Link to={item.href}>
                    <img src={item.imgSrc} />
                </Link>
            </div>;
        });
    };

    userAction = (e) => {
        let userInfo = this.props.userInfo;
        if (!userInfo.sid) {
            browserHistory.push('/login');
        }
    };

    render() {
        let userInfo = this.props.userInfo;
        return (
            <div className="home">
                <div className="header">
                    <Carousel autoplay>
                        {this.renderCarousel()}
                    </Carousel>
                </div>
                <div className="user-bar" onClick={this.userAction}>
                    <span className="left">
                        <Icon type="user" /> {userInfo && userInfo.nickname || '登录'}
                    </span>
                    <span className="right">
                        {
                            userInfo && userInfo.nickname
                            ? <Icon type="edit" />
                            : null
                        }

                    </span>
                </div>
                <div className="content">
                    <div className="links">
                        <Link to="">
                            <span className="img"><img src="/image/jiyin.png" /></span>
                            <span className="title">基因检测</span>
                        </Link>
                        <Link to="" onClick={this.goToPage.bind(this, 'betterfood')}>
                            <span className="img"><img src="/image/shanshi.png" /></span>
                            <span className="title">精准膳食</span>
                        </Link>
                    </div>
                    <div className="links">
                        <Link to="">
                            <span className="img"><img src="/image/jinghua.png" /></span>
                            <span className="title">净化卫士</span>
                        </Link>
                        <Link to="" onClick={this.goToPage.bind(this, 'present')}>
                            <span className="img"><img src="/image/lipin.png" /></span>
                            <span className="title">礼品礼盒</span>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
