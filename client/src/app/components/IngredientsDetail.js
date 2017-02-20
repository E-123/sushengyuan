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
        let readMore = collapse && content.length > 70 ? '...' : '';
        let slicedContent = collapse ? content.slice(0, 71) : content.slice(0);
        slicedContent = slicedContent.replace(/\n/g, '</p><p>');
        slicedContent = '<p>' + slicedContent + readMore + '</p>';
        return <div>
            <div
                className="content"
                onClick={this.toggleCollapse}
                dangerouslySetInnerHTML={{__html: slicedContent}}>
            </div>
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
            {
                !jieshao || !jieshao.title || !jieshao.content
                ? null
                : <Card>
                    <strong>{jieshao && jieshao.title}</strong>
                    <div className="content-wrap">
                        <CollapsedContent content={jieshao && jieshao.content || ''} />
                    </div>
                </Card>
            }

            {
                !gongxiao || !gongxiao.title || !gongxiao.content
                ? null
                : <Card>
                    <strong>{gongxiao && gongxiao.title}</strong>
                    <div className="content-wrap">
                        <CollapsedContent content={gongxiao && gongxiao.content || ''} />
                    </div>
                </Card>
            }

            {
                !shiyongrenqun || !shiyongrenqun.title || !shiyongrenqun.content
                ? null
                : <Card>
                    <strong>{shiyongrenqun && shiyongrenqun.title}</strong>
                    <div className="content-wrap">
                        <CollapsedContent content={shiyongrenqun && shiyongrenqun.content || ''} />
                    </div>
                </Card>
            }

            {
                !yingyangjiazhi || !yingyangjiazhi.title || !yingyangjiazhi.content
                ? null
                : <Card>
                    <strong>{yingyangjiazhi && yingyangjiazhi.title}</strong>
                    <div className="content-wrap">
                        <CollapsedContent content={yingyangjiazhi && yingyangjiazhi.content || ''} />
                    </div>
                </Card>
            }

            {
                !shiyongxiaoguo || !shiyongxiaoguo.title || !shiyongxiaoguo.content
                ? null
                : <Card>
                    <strong>{shiyongxiaoguo && shiyongxiaoguo.title}</strong>
                    <div className="content-wrap">
                        <CollapsedContent content={shiyongxiaoguo && shiyongxiaoguo.content || ''} />
                    </div>
                </Card>
            }

            {
                !title || !data
                ? null
                : <Card>
                    <strong>{title}</strong>
                    <div className="content-wrap">
                        {this.renderFoodValueTable(data || [])}
                    </div>
                </Card>
            }
        </div>;
    }

    renderFoodValueTable(data){
        return data.map((item, index) => {
            if (!item.value || !item.name) {
                return null;
            }
            return <div key={index} className="value-table">
                <span>{item.name}:</span><span>{item.value}</span>
            </div>;
        });
    }
    render() {
        let {name, category} = this.props.params;
        return (
            <div className="ingredients-detail">
                <div className="category-detail">
                    <h3 className="crumbs"><Link to="/ingredients">全部分类</Link>
                    <span className="split-string">&gt;</span>
                    <Link to={`/ingredients/${category}`}>{category}</Link>
                    <span className="split-string">&gt;</span>
                    {name}</h3>
                    {this.renderFoodValue()}
                </div>
            </div>
        );
    }
}
