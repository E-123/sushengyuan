import React from 'react';
import {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import { Card } from 'antd';

class CollapsedContent extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        collapse: true
    };

    toggleCollapse = () => {
        this.setState({
            collapse: !this.state.collapse
        })
    }

    render() {
        let content = this.props.content;
        let collapse = this.state.collapse;
        content = this.props.content.slice(0, collapse ? 100 : -1).replace(/\n/g, '</p><p>');
        content = '<p>' + content + '</p>';
        return <div>
            <div
                className="content"
                onClick={this.toggleCollapse}
                dangerouslySetInnerHTML={{__html: content}}>
            </div>
            <span>{collapse ? '...' : ''}</span>
        </div>;
    }
}

export default class IngredientsDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount() {
        let name = this.props.params.name;
        this.props.getIngredientsDetail(name);
    }

    renderFoodValue() {
        let detail = this.props.ingredientsDetail;
        let {foodvalue, gongxiao, jieshao, yingyangjiazhi, shiyongxiaoguo, shiyongrenqun} = detail || {};
        let {title, data} = foodvalue || {};
        return <div>
            <strong>{jieshao && jieshao.title}</strong>
            <div className="content-wrap">
                <CollapsedContent content={jieshao && jieshao.content || ''} />
            </div>

            <strong>{gongxiao && gongxiao.title}</strong>
            <div className="content-wrap">
                <CollapsedContent content={gongxiao && gongxiao.content || ''} />
            </div>

            <strong>{shiyongrenqun && shiyongrenqun.title}</strong>
            <div className="content-wrap">
                <CollapsedContent content={shiyongrenqun && shiyongrenqun.content || ''} />
            </div>

            <strong>{yingyangjiazhi && yingyangjiazhi.title}</strong>
            <div className="content-wrap">
                <CollapsedContent content={yingyangjiazhi && yingyangjiazhi.content || ''} />
            </div>

            <strong>{shiyongxiaoguo && shiyongxiaoguo.title}</strong>
            <div className="content-wrap">
                <CollapsedContent content={shiyongxiaoguo && shiyongxiaoguo.content || ''} />
            </div>

            <strong>{title}</strong>
            <div className="content-wrap">
                {this.renderFoodValueTable(data || [])}
            </div>
        </div>;
    }

    renderFoodValueTable(data){
        return data.map((item, index) => {
            return <div key={index} className="value-table">
                <span>{item.name}:</span><span>{item.value}</span>
            </div>;
        });
    }
    render() {
        let name = this.props.params.name;
        return (
            <div className="ingredients-detail">
                <div className="category-detail">
                    <h3>{name}</h3>
                    {this.renderFoodValue()}
                </div>
            </div>
        );
    }
}
